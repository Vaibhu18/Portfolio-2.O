"use client";

import React from "react";
import { SUGGESTED_QUESTIONS } from "@/lib/chatbot/mockResponses";
import { Sparkles } from "lucide-react";

export default function SuggestedQuestions({ onSelectQuestion, disabled = false }) {
  return (
    <div className="mt-2 flex flex-col gap-2 pt-2">
      <span className="flex items-center gap-1.5 px-1 text-xs font-medium text-muted-foreground">
        <Sparkles size={12} className="text-brand" />
        Suggested
      </span>
      <div className="flex flex-wrap gap-1.5">
        {SUGGESTED_QUESTIONS.map((item) => (
          <button
            key={item.id}
            type="button"
            disabled={disabled}
            onClick={() => onSelectQuestion(item.query)}
            className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium transition-colors hover:border-brand/50 hover:bg-brand-soft hover:text-brand-ink disabled:pointer-events-none disabled:opacity-50"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
