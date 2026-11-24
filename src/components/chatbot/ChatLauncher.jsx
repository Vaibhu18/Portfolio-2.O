"use client";

import React, { useState, useEffect } from "react";
import { Bot, X, ChevronRight } from "lucide-react";

export default function ChatLauncher({
  isOpen,
  onToggle,
  hasOpened,
}) {
  const [showGreeting, setShowGreeting] = useState(false);
  const [greetingDismissed, setGreetingDismissed] = useState(false);

  // Show floating greeting message after a subtle 2.8s delay
  useEffect(() => {
    if (hasOpened || greetingDismissed) return;

    const timer = setTimeout(() => {
      setShowGreeting(true);
    }, 2800);

    return () => clearTimeout(timer);
  }, [hasOpened, greetingDismissed]);

  const handleDismissGreeting = (e) => {
    e.stopPropagation();
    setGreetingDismissed(true);
  };

  if (isOpen) return null;

  return (
    <div
      data-chat-launcher="true"
      className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6"
    >
      {/* Greeting bubble */}
      {showGreeting && !hasOpened && !greetingDismissed && (
        <div
          onClick={onToggle}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onToggle()}
          className="animate-greeting-bubble group relative max-w-70 cursor-pointer rounded-2xl rounded-br-md border border-border bg-surface p-4 pr-9 shadow-pop select-none"
        >
          <button
            type="button"
            onClick={handleDismissGreeting}
            aria-label="Dismiss greeting"
            className="absolute top-2 right-2 rounded-md p-1 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
          >
            <X size={13} />
          </button>
          <p className="text-sm font-medium leading-snug">Hi! I&apos;m VCode, Vaibhav&apos;s AI assistant.</p>
          <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-brand-ink">
            Ask me about projects &amp; skills
            <ChevronRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </p>
        </div>
      )}

      {/* Launcher */}
      <button
        type="button"
        onClick={onToggle}
        aria-label="Open portfolio assistant"
        className="group relative grid size-14 place-items-center rounded-full bg-foreground text-background shadow-pop transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <Bot size={24} className="transition-transform duration-300 group-hover:-rotate-6" />
        {!hasOpened && (
          <span className="absolute top-0.5 right-0.5 flex size-3">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex size-3 rounded-full border-2 border-background bg-brand" />
          </span>
        )}
      </button>
    </div>
  );
}
