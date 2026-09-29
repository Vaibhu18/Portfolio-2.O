"use client";

import React, { useState, useEffect, useCallback } from "react";
import ChatLauncher from "./ChatLauncher";
import ChatWindow from "./ChatWindow";
import {
  loadChatStore,
  saveChatStore,
  createNewSession,
  generateSessionTitle,
  formatLocalTimestamp,
} from "@/lib/chatbot/chatStorage";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [activeTab, setActiveTab] = useState("current");
  const [chatStore, setChatStore] = useState(loadChatStore);
  const [isTyping, setIsTyping] = useState(false);
  const [contactDraft, setContactDraft] = useState({
    name: null,
    email: null,
    message: null,
  });

  // Save changes to localStorage whenever chatStore changes
  const updateChatStore = useCallback((updater) => {
    setChatStore((prev) => {
      const updated = typeof updater === "function" ? updater(prev) : updater;
      saveChatStore(updated);
      return updated;
    });
  }, []);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) setHasOpened(true);
      return next;
    });
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Start a fresh chat session
  const handleNewChat = useCallback(() => {
    const fresh = createNewSession();
    updateChatStore((prev) => {
      const currentSessions = prev?.sessions || [];
      return {
        sessions: [fresh, ...currentSessions],
        activeSessionId: fresh.id,
      };
    });
    setContactDraft({ name: null, email: null, message: null });
    setActiveTab("current");
  }, [updateChatStore]);

  // Switch to a previous conversation from History
  const handleSelectSession = useCallback((sessionId) => {
    updateChatStore((prev) => ({
      ...prev,
      activeSessionId: sessionId,
    }));
    setActiveTab("current");
  }, [updateChatStore]);

  // Delete a single conversation
  const handleDeleteSession = useCallback(
    (sessionId) => {
      updateChatStore((prev) => {
        const remaining = (prev?.sessions || []).filter((s) => s.id !== sessionId);
        let nextActiveId = prev?.activeSessionId;

        if (remaining.length === 0) {
          const fresh = createNewSession();
          return { sessions: [fresh], activeSessionId: fresh.id };
        }

        if (nextActiveId === sessionId) {
          nextActiveId = remaining[0].id;
        }

        return { sessions: remaining, activeSessionId: nextActiveId };
      });
    },
    [updateChatStore]
  );

  // Clear all conversation history
  const handleClearAllSessions = useCallback(() => {
    const fresh = createNewSession();
    updateChatStore({
      sessions: [fresh],
      activeSessionId: fresh.id,
    });
    setContactDraft({ name: null, email: null, message: null });
    setActiveTab("current");
  }, [updateChatStore]);

  // Send message to real backend API
  const handleSendMessage = useCallback(
    async (text) => {
      if (!text || !text.trim() || isTyping || !chatStore) return;

      const userText = text.trim();
      const nowIso = new Date().toISOString();
      const displayTime = formatLocalTimestamp(nowIso);

      const userMessage = {
        id: `user_${Date.now()}`,
        role: "user",
        content: userText,
        timestamp: displayTime,
      };

      const activeId = chatStore.activeSessionId;
      const currentActiveSession =
        chatStore.sessions.find((s) => s.id === activeId) || chatStore.sessions[0];

      const isFirstUserTurn =
        !currentActiveSession.messages.some((m) => m.role === "user");

      const sessionTitle = isFirstUserTurn
        ? generateSessionTitle(userText)
        : currentActiveSession.title;

      // 1. Append user message immediately
      const updatedMessagesWithUser = [...currentActiveSession.messages, userMessage];

      updateChatStore((prev) => {
        const updatedSessions = (prev?.sessions || []).map((s) => {
          if (s.id === currentActiveSession.id) {
            return {
              ...s,
              title: sessionTitle,
              updatedAt: nowIso,
              messages: updatedMessagesWithUser,
            };
          }
          return s;
        });

        return {
          ...prev,
          sessions: updatedSessions,
        };
      });

      setIsTyping(true);

      try {
        // 2. Call server-side /api/chat endpoint
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            conversation: updatedMessagesWithUser,
            message: userText,
            contactDraft,
          }),
        });

        const data = await response.json();

        // 3. Update contact draft state if backend provided structured contact updates
        if (data.contact) {
          setContactDraft((prev) => ({
            name: data.contact.name || prev.name,
            email: data.contact.email || prev.email,
            message: data.contact.message || prev.message,
          }));
        }

        if (data.emailSent) {
          // Reset draft after successful email transmission
          setContactDraft({ name: null, email: null, message: null });
        }

        const replyContent =
          data.reply ||
          "I'm VCode, Vaibhav's portfolio assistant. What would you like to know about his work?";

        const assistantMessage = {
          id: `assistant_${Date.now()}`,
          role: "assistant",
          content: replyContent,
          timestamp: formatLocalTimestamp(new Date().toISOString()),
        };

        // 4. Append assistant response and persist
        updateChatStore((prev) => {
          const updatedSessions = (prev?.sessions || []).map((s) => {
            if (s.id === currentActiveSession.id) {
              return {
                ...s,
                updatedAt: new Date().toISOString(),
                messages: [...s.messages, assistantMessage],
              };
            }
            return s;
          });

          return {
            ...prev,
            sessions: updatedSessions,
          };
        });
      } catch (err) {
        console.error("Chat communication error:", err);

        const errorMessage = {
          id: `assistant_${Date.now()}`,
          role: "assistant",
          content:
            "Sorry, I couldn't process that right now. You can reach out directly using the contact information in the portfolio.",
          timestamp: formatLocalTimestamp(new Date().toISOString()),
        };

        updateChatStore((prev) => {
          const updatedSessions = (prev?.sessions || []).map((s) => {
            if (s.id === currentActiveSession.id) {
              return {
                ...s,
                messages: [...s.messages, errorMessage],
              };
            }
            return s;
          });

          return {
            ...prev,
            sessions: updatedSessions,
          };
        });
      } finally {
        setIsTyping(false);
      }
    },
    [isTyping, chatStore, contactDraft, updateChatStore]
  );

  const activeSession =
    chatStore?.sessions?.find((s) => s.id === chatStore.activeSessionId) ||
    chatStore?.sessions?.[0] ||
    null;

  return (
    <>
      <ChatLauncher
        isOpen={isOpen}
        onToggle={handleToggle}
        hasOpened={hasOpened}
      />

      <ChatWindow
        isOpen={isOpen}
        onClose={handleClose}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        activeSession={activeSession}
        sessions={chatStore?.sessions || []}
        onSelectSession={handleSelectSession}
        onNewChat={handleNewChat}
        onDeleteSession={handleDeleteSession}
        onClearAllSessions={handleClearAllSessions}
        isTyping={isTyping}
        onSendMessage={handleSendMessage}
        onSelectQuestion={handleSendMessage}
      />
    </>
  );
}
