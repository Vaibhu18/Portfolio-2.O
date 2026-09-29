"use client";

import React, { useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import ChatHistory from "./ChatHistory";

export default function ChatWindow({
  isOpen,
  onClose,
  activeTab = "current",
  onTabChange,
  activeSession,
  sessions = [],
  onSelectSession,
  onNewChat,
  onDeleteSession,
  onClearAllSessions,
  isTyping,
  onSendMessage,
  onSelectQuestion,
}) {
  const windowRef = useRef(null);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Click outside to close
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (
        windowRef.current &&
        !windowRef.current.contains(e.target) &&
        !e.target.closest("[data-chat-launcher]")
      ) {
        onClose();
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const messages = activeSession?.messages || [];

  return (
    <div
      ref={windowRef}
      role="dialog"
      aria-label="VCode Portfolio AI Assistant"
      aria-modal="false"
      className="animate-chat-window-in fixed inset-x-3 bottom-3 z-50 flex h-[min(85dvh,620px)] flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-pop sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-100"
    >
      <ChatHeader
        activeTab={activeTab}
        onTabChange={onTabChange}
        onNewChat={onNewChat}
        onClose={onClose}
        historyCount={sessions.length}
      />

      {activeTab === "current" ? (
        <>
          <ChatMessages
            messages={messages}
            isTyping={isTyping}
            onSelectQuestion={onSelectQuestion}
          />
          <ChatInput onSendMessage={onSendMessage} disabled={isTyping} />
        </>
      ) : (
        <ChatHistory
          sessions={sessions}
          activeSessionId={activeSession?.id}
          onSelectSession={onSelectSession}
          onNewChat={onNewChat}
          onDeleteSession={onDeleteSession}
          onClearAllSessions={onClearAllSessions}
        />
      )}
    </div>
  );
}
