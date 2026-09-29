"use client";

import React, { useEffect, useRef } from "react";
import ChatMessageItem from "./ChatMessageItem";
import TypingIndicator from "./TypingIndicator";
import SuggestedQuestions from "./SuggestedQuestions";

export default function ChatMessages({
  messages,
  isTyping,
  onSelectQuestion,
  showSuggestions = true,
}) {
  const scrollRef = useRef(null);

  // Auto scroll to latest message smoothly
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  return (
    <div
      ref={scrollRef}
      className="custom-chat-scrollbar flex flex-1 flex-col gap-3.5 overflow-y-auto p-4"
      aria-live="polite"
      aria-relevant="additions"
    >
      {messages.map((message) => (
        <ChatMessageItem key={message.id} message={message} />
      ))}

      {isTyping && <TypingIndicator />}

      {/* Suggested Question Chips (interactive options) */}
      {showSuggestions && (
        <SuggestedQuestions
          onSelectQuestion={onSelectQuestion}
          disabled={isTyping}
        />
      )}
    </div>
  );
}
