"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { Award, BookOpen, ExternalLink, Maximize2, Trophy, X } from "lucide-react";
import { CERTIFICATES } from "@/lib/Certificates";
import Modal from "./ui/Modal";

const FILTERS = [
  { id: "all", label: "All", icon: Award },
  { id: "Competition", label: "Competitions & Ranks", icon: Trophy },
  { id: "Course", label: "Courses", icon: BookOpen },
];

function TypeBadge({ type }) {
  const isCompetition = type === "Competition";
  const Icon = isCompetition ? Trophy : BookOpen;
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
      <Icon size={11} /> {isCompetition ? "Rank / Prize" : "Course"}
    </span>
  );
}

// Shared by the home section (limit=6) and the /certificates archive (no limit).
export default function CertificateGallery({ limit, clampText = true }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCert, setSelectedCert] = useState(null);
  const closeLightbox = useCallback(() => setSelectedCert(null), []);

  const filtered =
    activeCategory === "all" ? CERTIFICATES : CERTIFICATES.filter((c) => c.type === activeCategory);
  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <>
      <div className="-mx-5 mb-8 overflow-x-auto px-5 no-scrollbar sm:mx-0 sm:px-0">
        <div
          role="group"
          aria-label="Filter certificates"
          className="inline-flex gap-1 rounded-full border border-border bg-surface p-1"
        >
          {FILTERS.map(({ id, label, icon: Icon }) => {
            const isActive = activeCategory === id;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                }`}
              >
                <Icon size={14} />
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayed.map((cert, index) => (
          <li
            key={cert.title}
            className="animate-rise"
            style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
          >
            <button
              type="button"
              onClick={() => setSelectedCert(cert)}
              className="card card-hover group flex h-full w-full flex-col overflow-hidden text-left"
            >
              <div className="relative aspect-16/11 w-full overflow-hidden bg-surface-2">
                <Image
                  src={cert.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute top-3 left-3">
                  <TypeBadge type={cert.type} />
                </div>
                <span className="absolute right-3 bottom-3 grid size-8 place-items-center rounded-full bg-white/90 text-neutral-900 opacity-0 shadow-card transition-opacity group-hover:opacity-100">
                  <Maximize2 size={14} />
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="line-clamp-1 text-xs font-medium text-brand-ink">{cert.issuer}</span>
                <h3 className={`font-semibold leading-snug tracking-tight ${clampText ? "line-clamp-2" : ""}`}>
                  {cert.title}
                </h3>
                {cert.description && (
                  <p
                    className={`text-sm leading-relaxed text-muted-foreground ${
                      clampText ? "line-clamp-3" : ""
                    }`}
                  >
                    {cert.description}
                  </p>
                )}
                <span className="mt-auto pt-3 font-mono text-xs text-muted-foreground">{cert.date}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <Modal
        open={Boolean(selectedCert)}
        onClose={closeLightbox}
        label={selectedCert?.title ?? "Certificate"}
        className="max-h-[92dvh] max-w-4xl"
      >
        {selectedCert && (
          <>
            <div className="flex items-start justify-between gap-4 border-b border-border p-4 sm:p-5">
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="truncate text-xs font-medium text-brand-ink">{selectedCert.issuer}</span>
                <h3 className="font-semibold tracking-tight sm:text-lg">{selectedCert.title}</h3>
              </div>
              <button type="button" onClick={closeLightbox} aria-label="Close preview" className="icon-btn shrink-0">
                <X size={18} />
              </button>
            </div>

            <div className="relative min-h-[40dvh] flex-1 bg-surface-2 sm:min-h-[60dvh]">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                sizes="(min-width: 1024px) 56rem, 100vw"
                className="object-contain p-3"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border p-4 sm:px-5">
              <span className="font-mono text-xs text-muted-foreground">Issued {selectedCert.date}</span>
              {selectedCert.verificationLink && (
                <a
                  href={selectedCert.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Verify credential <ExternalLink size={14} />
                </a>
              )}
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
