export const runtime = "nodejs";

import { sendContactEmail } from "@/lib/email/sendContactEmail";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body || {};

    const result = await sendContactEmail({
      name,
      email,
      message,
      source: "Homepage Contact Form",
    });

    return Response.json(result);
  } catch (error) {
    console.error("Email Route Error:", error);
    return Response.json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
}

