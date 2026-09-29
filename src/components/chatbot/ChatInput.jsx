"use client";

import React, { useState, useRef } from "react";
import { ArrowUp } from "lucide-react";

export default function ChatInput({ onSendMessage, disabled = false }) {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputText.trim();
    if (!trimmed || disabled) return;

    onSendMessage(trimmed);
    setInputText("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const isSendActive = inputText.trim().length > 0 && !disabled;

  return (
    <form onSubmit={handleSubmit} className="shrink-0 border-t border-border p-3">
      <div className="relative flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder="Ask about my work, skills, projects..."
          aria-label="Ask about Vaibhav's work"
          className="field rounded-full py-3 pr-12 pl-4 sm:text-sm disabled:cursor-not-allowed disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={!isSendActive}
          aria-label="Send message"
          className={`absolute right-1.5 grid size-9 place-items-center rounded-full transition-all duration-200 ${
            isSendActive
              ? "bg-foreground text-background hover:scale-105 active:scale-95"
              : "cursor-not-allowed bg-surface-2 text-muted-foreground"
          }`}
        >
          <ArrowUp size={17} />
        </button>
      </div>

      <div className="mt-2 flex items-center justify-between px-2 text-[11px] text-muted-foreground">
        <span>
          Press <kbd className="rounded border border-border bg-surface-2 px-1 font-mono text-[10px]">Enter</kbd> to send
        </span>
        <span>Frontend Demo Mode</span>
      </div>
    </form>
  );
}
