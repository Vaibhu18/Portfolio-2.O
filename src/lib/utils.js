import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Drops decorative leading emoji/symbols from data labels, e.g. "📅 May 22, 2025" → "May 22, 2025"
export function stripEmoji(text = "") {
  return text.replace(/^[^\p{L}\p{N}.]+/u, "").trim();
}
