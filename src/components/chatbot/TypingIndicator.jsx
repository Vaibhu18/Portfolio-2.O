"use client";

import React from "react";
import Image from "next/image";
import { SITE } from "@/lib/site";

export default function TypingIndicator() {
  return (
    <div
      className="animate-fade-in flex max-w-[88%] items-start gap-2.5 self-start"
      role="status"
      aria-label="Assistant is typing"
    >
      <span className="size-7 shrink-0 overflow-hidden rounded-[28%] ring-1 ring-border">
        <Image
          src={SITE.logo}
          alt="vcode"
          width={28}
          height={28}
          className="size-full object-contain"
        />
      </span>
      <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md bg-surface-2 px-4 py-3.5">
        <span className="sr-only">Assistant is typing a response...</span>
        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" />
      </div>
    </div>
  );
}
