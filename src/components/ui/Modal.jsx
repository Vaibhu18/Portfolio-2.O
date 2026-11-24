"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

// Accessible overlay: locks page scroll, closes on Escape / backdrop click.
export default function Modal({ open, onClose, label, className = "", children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="animate-fade-in fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onClick={(e) => e.stopPropagation()}
        className={`animate-chat-window-in relative flex w-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-pop ${className}`}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
