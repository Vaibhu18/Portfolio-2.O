"use client";

import React from "react";
import { Bot, User } from "lucide-react";

/**
 * Format markdown text into React nodes (supports bold, links, bullets, and linebreaks)
 */
function renderFormattedContent(text) {
  if (!text) return null;

  // Split by line breaks
  const lines = text.split("\n");

  return lines.map((line, lineIdx) => {
    // Process markdown links [label](url) and bold **bold**
    const parts = [];
    let remaining = line;
    let keyCounter = 0;

    // Regex for [label](url) or **bold**
    const tokenRegex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
    let match;
    let lastIndex = 0;

    while ((match = tokenRegex.exec(remaining)) !== null) {
      // Text before match
      if (match.index > lastIndex) {
        parts.push(remaining.slice(lastIndex, match.index));
      }

      if (match[2] && match[3]) {
        // Link [label](url)
        const label = match[2];
        const url = match[3];
        const isExternal = url.startsWith("http") || url.startsWith("mailto");
        parts.push(
          <a
            key={`link-${lineIdx}-${keyCounter++}`}
            href={url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="font-medium underline underline-offset-2 transition-colors hover:text-brand-ink"
          >
            {label}
          </a>
        );
      } else if (match[4]) {
        // Bold **text**
        parts.push(
          <strong
            key={`bold-${lineIdx}-${keyCounter++}`}
            className="font-semibold"
          >
            {match[4]}
          </strong>
        );
      }

      lastIndex = tokenRegex.lastIndex;
    }

    // Remaining text after last match
    if (lastIndex < remaining.length) {
      parts.push(remaining.slice(lastIndex));
    }

    return (
      <span key={`line-${lineIdx}`} className="block leading-relaxed">
        {parts.length > 0 ? parts : "\u00A0"}
      </span>
    );
  });
}

export default function ChatMessageItem({ message }) {
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={`flex items-start gap-2.5 w-full ${
        isAssistant ? "justify-start" : "justify-end"
      } animate-message-in`}
    >
      {/* Assistant Avatar */}
      {isAssistant && (
        <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-surface-2 text-foreground">
          <Bot size={14} />
        </span>
      )}

      {/* Message Bubble */}
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] ${
          isAssistant
            ? "rounded-tl-md bg-surface-2 text-foreground"
            : "rounded-tr-md bg-foreground text-background"
        }`}
      >
        <div className="space-y-1 wrap-break-word">
          {renderFormattedContent(message.content)}
        </div>

        {message.timestamp && (
          <div className="mt-1 flex justify-end font-mono text-[10px] opacity-60">
            <span>{message.timestamp}</span>
          </div>
        )}
      </div>

      {/* User Avatar */}
      {!isAssistant && (
        <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-ink">
          <User size={13} />
        </span>
      )}
    </div>
  );
}
