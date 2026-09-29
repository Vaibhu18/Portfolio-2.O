export const runtime = "nodejs";

import { GoogleGenAI, Type } from "@google/genai";
import { getSystemInstruction } from "@/lib/chatbot/systemPrompt";
import { sendContactEmail } from "@/lib/email/sendContactEmail";
import { getAssistantResponse } from "@/lib/chatbot/mockResponses";

// Supported response schema definition for structured JSON generation
const chatResponseSchema = {
  type: Type.OBJECT,
  properties: {
    intent: {
      type: Type.STRING,
      enum: [
        "greeting",
        "portfolio_question",
        "contact_information",
        "contact_collection",
        "email_confirmation",
        "send_contact_email",
        "unrelated",
        "unknown",
      ],
    },
    reply: {
      type: Type.STRING,
      description: "Concise answer for the visitor, normally 1 to 3 short sentences",
    },
    contact: {
      type: Type.OBJECT,
      properties: {
        name: { type: Type.STRING, nullable: true },
        email: { type: Type.STRING, nullable: true },
        message: { type: Type.STRING, nullable: true },
      },
    },
    emailAction: {
      type: Type.STRING,
      enum: ["none", "collect", "confirm", "send"],
    },
    requiresContactField: {
      type: Type.STRING,
      enum: ["name", "email", "message", "none"],
      nullable: true,
    },
    requiresConfirmation: {
      type: Type.BOOLEAN,
    },
  },
  required: ["intent", "reply", "emailAction", "requiresConfirmation"],
};

export async function POST(req) {
  try {
    const body = await req.json();
    const { conversation = [], message = "", contactDraft = null } = body || {};

    const trimmedMessage = String(message || "").trim();

    // 1. Basic validation & abuse protection
    if (!trimmedMessage) {
      return Response.json(
        {
          success: false,
          reply: "Please provide a question or message for VCode.",
        },
        { status: 400 }
      );
    }

    if (trimmedMessage.length > 2000) {
      return Response.json(
        {
          success: false,
          reply: "Your message is too long. Please keep questions under 2000 characters.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Fallback if GEMINI_API_KEY is not yet configured in local environment
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not set. Falling back to local knowledge resolver.");
      const mockReply = getAssistantResponse(trimmedMessage);
      return Response.json({
        success: true,
        reply: mockReply,
        intent: "portfolio_question",
        contact: null,
        emailAction: "none",
        requiresContactField: null,
        requiresConfirmation: false,
        emailSent: false,
      });
    }

    // 2. Initialize official @google/genai SDK
    const ai = new GoogleGenAI({ apiKey });

    // 3. Format previous messages for multi-turn chat
    // Keep maximum 10 recent messages for token budget
    const recentMessages = Array.isArray(conversation)
      ? conversation.slice(-10)
      : [];

    const contents = [];

    for (const msg of recentMessages) {
      if (!msg.content || typeof msg.content !== "string") continue;
      const role = msg.role === "assistant" ? "model" : "user";
      contents.push({
        role,
        parts: [{ text: msg.content.trim() }],
      });
    }

    // Add current user turn with draft context if present
    let currentTurnText = trimmedMessage;
    if (contactDraft && (contactDraft.name || contactDraft.email || contactDraft.message)) {
      currentTurnText += `\n[Active Contact Draft Context: ${JSON.stringify(contactDraft)}]`;
    }

    contents.push({
      role: "user",
      parts: [{ text: currentTurnText }],
    });

    // 4. Candidate models in prioritized sequence
    const candidateModels = [
      process.env.GEMINI_MODEL,
      "gemini-3.6-flash",
      "gemini-3.7-flash",
      "gemini-2.0-flash",
      "gemini-1.5-flash",
    ].filter((m, i, arr) => m && arr.indexOf(m) === i);

    let response = null;
    let lastError = null;

    for (const currentModel of candidateModels) {
      try {
        response = await ai.models.generateContent({
          model: currentModel,
          contents,
          config: {
            systemInstruction: getSystemInstruction(),
            temperature: 0.2,
            maxOutputTokens: 1000,
            responseMimeType: "application/json",
            responseSchema: chatResponseSchema,
          },
        });
        if (response) {
          break;
        }
      } catch (err) {
        lastError = err;
        console.warn(`Model ${currentModel} encountered an error:`, err.message || err);
      }
    }

    if (!response) {
      throw lastError || new Error("All candidate Gemini models failed to generate content.");
    }

    const rawText = response.text || "";
    let parsedData;

    try {
      parsedData = JSON.parse(rawText);
    } catch {
      console.error("Failed to parse Gemini JSON output:", rawText);
      parsedData = {
        intent: "portfolio_question",
        reply: rawText || "I'm VCode, Vaibhav's portfolio assistant. What would you like to know about his work?",
        contact: null,
        emailAction: "none",
        requiresContactField: null,
        requiresConfirmation: false,
      };
    }

    let {
      intent = "portfolio_question",
      reply = "",
      contact = null,
      emailAction = "none",
      requiresContactField = null,
      requiresConfirmation = false,
    } = parsedData;

    let emailSent = false;

    // 5. Check if contact email should be sent
    if (emailAction === "send" && contact && contact.name && contact.email && contact.message) {
      const emailResult = await sendContactEmail({
        name: contact.name,
        email: contact.email,
        message: contact.message,
        source: "VCode Portfolio Assistant",
      });

      if (emailResult.success) {
        reply = "Done. Your message has been sent to Vaibhav.";
        emailSent = true;
      } else {
        reply =
          "Sorry, I couldn't send the message right now. You can contact Vaibhav directly at vcode.dev18@gmail.com or via LinkedIn.";
        emailSent = false;
      }
    }

    return Response.json({
      success: true,
      reply,
      intent,
      contact,
      emailAction,
      requiresContactField: requiresContactField === "none" ? null : requiresContactField,
      requiresConfirmation: Boolean(requiresConfirmation),
      emailSent,
    });
  } catch (error) {
    console.error("Chat API Route Error:", error);
    return Response.json(
      {
        success: false,
        reply: "Sorry, I couldn't process that right now. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
