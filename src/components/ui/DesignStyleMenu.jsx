"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Check, GlassWater, Palette, Square, Squircle } from "lucide-react";
import { DESIGN_STYLES, getDesignStyle, setDesignStyle, subscribeDesignStyle } from "@/lib/designStyle";

const STYLE_ICONS = {
  default: Square,
  glass: GlassWater,
  neu: Squircle,
};

export default function DesignStyleMenu({ className = "" }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const activeItemRef = useRef(null);
  // The style is only known on the client; render "default" on the server
  const current = useSyncExternalStore(subscribeDesignStyle, getDesignStyle, () => "default");

  // Close on outside click or Escape; move focus into the list when it opens
  useEffect(() => {
    if (!open) return;
    activeItemRef.current?.focus();
    const onPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (id) => {
    setDesignStyle(id);
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Change design style"
        title="Design style"
        className={`icon-btn ${open ? "border-foreground/20 text-foreground" : ""}`}
      >
        <Palette size={17} />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Design style"
          className="frosted animate-chat-window-in absolute top-full right-0 z-60 mt-2 w-64 rounded-2xl border border-border bg-popover p-1.5 shadow-pop"
        >
          <p className="eyebrow px-2.5 pt-1.5 pb-2">Design style</p>
          <ul className="flex flex-col gap-0.5">
            {DESIGN_STYLES.map((style) => {
              const Icon = STYLE_ICONS[style.id];
              const active = style.id === current;
              return (
                <li key={style.id}>
                  <button
                    ref={active ? activeItemRef : undefined}
                    type="button"
                    role="menuitemradio"
                    aria-checked={active}
                    onClick={() => choose(style.id)}
                    className={`flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left transition-colors ${
                      active ? "bg-surface-2" : "hover:bg-surface-2"
                    }`}
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand-ink">
                      <Icon size={16} />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="text-sm font-medium">{style.label}</span>
                      <span className="text-xs text-muted-foreground">{style.description}</span>
                    </span>
                    {active && <Check size={16} className="shrink-0 text-brand" aria-hidden="true" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
