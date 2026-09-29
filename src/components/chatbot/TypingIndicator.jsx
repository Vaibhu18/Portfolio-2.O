"use client";

import React from "react";
import { Bot } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div
      className="animate-fade-in flex max-w-[88%] items-start gap-2.5 self-start"
      role="status"
      aria-label="Assistant is typing"
    >
      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-surface-2 text-foreground">
        <Bot size={14} />
      </span>
      <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md bg-surface-2 px-4 py-3.5">
        <span className="sr-only">Assistant is typing a response...</span>
        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" />
      </div>
    </div>
  );
}
