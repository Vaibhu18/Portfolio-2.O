/**
 * Versioned LocalStorage Conversation Manager for VCode Chatbot.
 */

export const STORAGE_KEY = "vcode_chat_history_v1";

export const INITIAL_WELCOME_MESSAGES = [
  {
    id: "welcome-1",
    role: "assistant",
    content: "Hi! I'm VCode, Vaibhav's portfolio assistant. 👋",
    timestamp: "Just now",
  },
  {
    id: "welcome-2",
    role: "assistant",
    content:
      "I can help you explore his projects, technical skills, professional experience, education, and ways to get in touch. What would you like to know?",
    timestamp: "Just now",
  },
];

/**
 * Generate a concise conversation title from the first visitor prompt.
 */
export function generateSessionTitle(firstPrompt = "") {
  const text = String(firstPrompt || "").trim().toLowerCase();
  if (!text) return "New Conversation";

  if (text.includes("project") || text.includes("hirelink") || text.includes("astro") || text.includes("veltrix") || text.includes("nexora")) {
    return "Projects Discussion";
  }
  if (text.includes("skill") || text.includes("tech") || text.includes("stack") || text.includes("react") || text.includes("dotnet") || text.includes(".net")) {
    return "Skills & Tech Stack";
  }
  if (text.includes("contact") || text.includes("email") || text.includes("hire") || text.includes("connect") || text.includes("message")) {
    return "Contact Vaibhav";
  }
  if (text.includes("experience") || text.includes("prix") || text.includes("work") || text.includes("role")) {
    return "Work Experience";
  }
  if (text.includes("education") || text.includes("college") || text.includes("msc") || text.includes("degree")) {
    return "Education & Academics";
  }
  if (text.includes("certificate") || text.includes("award") || text.includes("achievement")) {
    return "Certificates & Awards";
  }

  // Fallback to truncated first words
  const clean = firstPrompt.replace(/[^\w\s]/gi, "").trim();
  if (clean.length <= 26) return clean.charAt(0).toUpperCase() + clean.slice(1);
  return clean.slice(0, 24).trim() + "...";
}

/**
 * Format ISO timestamp into the visitor's local date/time string.
 */
export function formatLocalTimestamp(isoString) {
  if (!isoString) return "";
  try {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return "";

    const now = new Date();
    const isToday =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();

    const timeStr = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (isToday) {
      return `Today ${timeStr}`;
    }

    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const isYesterday =
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear();

    if (isYesterday) {
      return `Yesterday ${timeStr}`;
    }

    const dateStr = date.toLocaleDateString([], {
      month: "short",
      day: "numeric",
    });

    return `${dateStr}, ${timeStr}`;
  } catch {
    return "";
  }
}

/**
 * Create a fresh chat session object.
 */
export function createNewSession(title = "New Conversation") {
  const now = new Date().toISOString();
  return {
    id: `chat_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    title,
    createdAt: now,
    updatedAt: now,
    messages: [...INITIAL_WELCOME_MESSAGES],
  };
}

/**
 * Safely load chat storage from localStorage.
 */
export function loadChatStore() {
  if (typeof window === "undefined") {
    const defaultSession = createNewSession();
    return {
      sessions: [defaultSession],
      activeSessionId: defaultSession.id,
    };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initialSession = createNewSession();
      const initialStore = {
        sessions: [initialSession],
        activeSessionId: initialSession.id,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialStore));
      return initialStore;
    }

    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.sessions) || parsed.sessions.length === 0) {
      const fallback = createNewSession();
      return { sessions: [fallback], activeSessionId: fallback.id };
    }

    return parsed;
  } catch (err) {
    console.warn("Corrupted chat localStorage. Resetting to clean state.", err);
    const fallback = createNewSession();
    return { sessions: [fallback], activeSessionId: fallback.id };
  }
}

/**
 * Safely save chat store to localStorage.
 */
export function saveChatStore(store) {
  if (typeof window === "undefined" || !store) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch (err) {
    console.error("Failed to write chat history to localStorage:", err);
  }
}
