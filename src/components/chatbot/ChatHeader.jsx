"use client";

import React from "react";
import { Bot, X, Plus, Clock, MessageSquare } from "lucide-react";

const TABS = [
  { id: "current", label: "Chat", icon: MessageSquare },
  { id: "history", label: "History", icon: Clock },
];

export default function ChatHeader({
  activeTab = "current",
  onTabChange,
  onNewChat,
  onClose,
  historyCount = 0,
}) {
  return (
    <div className="flex shrink-0 flex-col gap-3 border-b border-border px-4 pt-4 pb-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="relative grid size-9 place-items-center rounded-full bg-foreground text-background">
            <Bot size={17} />
            <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-surface bg-success" />
          </span>
          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 text-sm font-semibold">
              VCode
              <span className="rounded-full bg-brand-soft px-1.5 py-px text-[10px] font-medium text-brand-ink">
                Gemini AI
              </span>
            </span>
            <span className="text-xs text-muted-foreground">Portfolio assistant · Online</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {activeTab === "current" && (
            <button
              type="button"
              onClick={onNewChat}
              aria-label="Start new conversation"
              title="Start new conversation"
              className="btn btn-ghost btn-sm h-8 px-2.5"
            >
              <Plus size={14} /> New
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close portfolio assistant"
            title="Close chat (ESC)"
            className="grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
          >
            <X size={17} />
          </button>
        </div>
      </div>

      <div className="flex rounded-full bg-surface-2 p-1">
        {TABS.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onTabChange(id)}
              aria-pressed={isActive}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                isActive ? "bg-surface text-foreground shadow-card" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon size={13} />
              {label}
              {id === "history" && historyCount > 0 && (
                <span className="rounded-full bg-border px-1.5 font-mono text-[10px]">{historyCount}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
