"use client";

import React, { useState } from "react";
import { MessageSquare, Trash2, Plus, AlertCircle, Check, X } from "lucide-react";
import { formatLocalTimestamp } from "@/lib/chatbot/chatStorage";

export default function ChatHistory({
  sessions = [],
  activeSessionId,
  onSelectSession,
  onNewChat,
  onDeleteSession,
  onClearAllSessions,
}) {
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [confirmClearAll, setConfirmClearAll] = useState(false);

  const handleDeleteClick = (e, sessionId) => {
    e.stopPropagation();
    setConfirmDeleteId(sessionId);
  };

  const handleConfirmDelete = (e, sessionId) => {
    e.stopPropagation();
    onDeleteSession(sessionId);
    setConfirmDeleteId(null);
  };

  const handleCancelDelete = (e) => {
    e.stopPropagation();
    setConfirmDeleteId(null);
  };

  return (
    <div className="flex flex-1 flex-col overflow-hidden p-4">
      {/* Toolbar */}
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-muted-foreground">
          Saved conversations ({sessions.length})
        </span>
        <div className="flex items-center gap-1">
          {sessions.length > 1 && (
            <button
              type="button"
              onClick={() => setConfirmClearAll(true)}
              className="rounded-full px-2.5 py-1 text-xs font-medium text-destructive transition-colors hover:bg-destructive/10"
            >
              Clear all
            </button>
          )}
          <button type="button" onClick={onNewChat} className="btn btn-primary btn-sm h-8 px-3 text-xs">
            <Plus size={13} /> New chat
          </button>
        </div>
      </div>

      {/* Clear-all confirmation */}
      {confirmClearAll && (
        <div className="animate-fade-in mb-3 flex items-center justify-between gap-2 rounded-2xl border border-destructive/25 bg-destructive/10 p-3 text-xs">
          <span className="flex items-center gap-1.5 text-destructive">
            <AlertCircle size={14} /> Delete all history?
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => {
                onClearAllSessions();
                setConfirmClearAll(false);
              }}
              className="rounded-full bg-destructive px-2.5 py-1 font-medium text-white"
            >
              Yes, clear
            </button>
            <button
              type="button"
              onClick={() => setConfirmClearAll(false)}
              className="rounded-full bg-surface px-2.5 py-1 font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Sessions */}
      <div className="custom-chat-scrollbar flex-1 space-y-2 overflow-y-auto pr-1">
        {sessions.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center p-6 text-center text-muted-foreground">
            <MessageSquare size={30} className="mb-2 opacity-40" />
            <p className="text-xs">No previous conversations.</p>
          </div>
        ) : (
          sessions.map((session) => {
            const isActive = session.id === activeSessionId;
            const isDeleting = confirmDeleteId === session.id;

            return (
              <div
                key={session.id}
                onClick={() => onSelectSession(session.id)}
                className={`group relative cursor-pointer rounded-2xl border p-3 transition-colors select-none ${
                  isActive
                    ? "border-brand/40 bg-brand-soft"
                    : "border-border bg-surface hover:bg-surface-2"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-start gap-2.5">
                    <span
                      className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full ${
                        isActive ? "bg-brand text-white" : "bg-surface-2 text-muted-foreground"
                      }`}
                    >
                      <MessageSquare size={13} />
                    </span>

                    <div className="flex min-w-0 flex-col">
                      <div className="flex items-center gap-2">
                        <span className="truncate text-sm font-medium">{session.title || "Conversation"}</span>
                        {isActive && (
                          <span className="shrink-0 rounded-full bg-brand/15 px-1.5 text-[10px] font-medium text-brand-ink">
                            Active
                          </span>
                        )}
                      </div>
                      <span className="mt-0.5 text-[11px] text-muted-foreground">
                        {formatLocalTimestamp(session.updatedAt || session.createdAt)} ·{" "}
                        {session.messages?.length || 0} messages
                      </span>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center">
                    {isDeleting ? (
                      <div className="animate-fade-in flex items-center gap-1 rounded-full border border-border bg-surface p-0.5 shadow-card">
                        <button
                          type="button"
                          onClick={(e) => handleConfirmDelete(e, session.id)}
                          aria-label="Confirm delete conversation"
                          className="rounded-full p-1 text-destructive hover:bg-destructive/10"
                        >
                          <Check size={13} />
                        </button>
                        <button
                          type="button"
                          onClick={handleCancelDelete}
                          aria-label="Cancel delete"
                          className="rounded-full p-1 text-muted-foreground hover:bg-surface-2"
                        >
                          <X size={13} />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => handleDeleteClick(e, session.id)}
                        aria-label="Delete conversation"
                        title="Delete conversation"
                        className="rounded-full p-1.5 text-muted-foreground transition-all hover:bg-destructive/10 hover:text-destructive sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
