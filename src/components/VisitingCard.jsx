"use client";

import { useState } from "react";
import Image from "next/image";
import { Contact, RotateCw } from "lucide-react";
import { SITE } from "@/lib/site";

const FACE =
  "absolute inset-0 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-pop backface-hidden dark:border-white/10";

// Two-sided business card; click / Enter / Space flips it.
export default function VisitingCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="perspective-distant">
        <button
          type="button"
          onClick={() => setFlipped((v) => !v)}
          aria-label={flipped ? "Show front of visiting card" : "Show back of visiting card"}
          className="group relative block aspect-[1800/1055] w-full cursor-pointer rounded-2xl text-left"
        >
          <div
            className={`relative size-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-3d ${
              flipped ? "rotate-y-180" : "group-hover:rotate-y-6 group-hover:-rotate-x-3"
            }`}
          >
            <div className={FACE} aria-hidden={flipped}>
              <Image
                src="/brand/card-front.webp"
                alt="vcode visiting card, front: vcode.developer — Crafting Modern Software Solutions"
                fill
                sizes="(min-width: 1024px) 30rem, (min-width: 640px) 36rem, 92vw"
                className="object-cover"
              />
            </div>
            <div className={`${FACE} rotate-y-180`} aria-hidden={!flipped}>
              <Image
                src="/brand/card-back.webp"
                alt={`Visiting card, back: ${SITE.fullName}, ${SITE.role}. ${SITE.phone}, ${SITE.email}, itsvcode.vercel.app, Baramati, Pune 413133`}
                fill
                sizes="(min-width: 1024px) 30rem, (min-width: 640px) 36rem, 92vw"
                className="object-cover"
              />
            </div>
          </div>

          <span className="pointer-events-none absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-medium text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <RotateCw size={11} /> Tap to flip
          </span>
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <a href={SITE.vcard} download className="btn btn-primary btn-sm">
          <Contact size={15} /> Save contact
        </a>
        <button type="button" onClick={() => setFlipped((v) => !v)} className="btn btn-secondary btn-sm">
          <RotateCw size={14} className={`transition-transform duration-500 ${flipped ? "rotate-180" : ""}`} />
          {flipped ? "Show front" : "Show back"}
        </button>
        <span className="ml-auto hidden font-mono text-xs text-muted-foreground sm:inline">
          {flipped ? "2 / 2" : "1 / 2"}
        </span>
      </div>
    </div>
  );
}
