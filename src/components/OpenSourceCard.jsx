"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, GitMerge } from "lucide-react";

const OpenSourceCard = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const prNumber = data.Link.split("/").pop();

  const handleCopyCommit = async () => {
    try {
      await navigator.clipboard.writeText(data.Commit);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — ignore
    }
  };

  return (
    <article className="reveal card card-hover flex h-full flex-col gap-5 p-6 sm:p-7">
      <header className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-ink">
            <GitMerge size={18} />
          </span>
          <div className="flex flex-col">
            <span className="font-semibold">{data.Org}</span>
            <span className="text-xs text-muted-foreground">{data.Date}</span>
          </div>
        </div>
        <span className="chip border-brand/30 bg-brand-soft text-brand-ink">
          {data.Status}
        </span>
      </header>

      <div className="flex flex-col gap-2">
        <h3 className="font-mono text-[0.9375rem] leading-snug font-medium">{data.Issue}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{data.Desc}</p>
      </div>

      <footer className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
        <button
          type="button"
          onClick={handleCopyCommit}
          title="Copy full commit SHA"
          className="inline-flex items-center gap-2 rounded-lg bg-surface-2 px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          {copied ? <Check size={12} className="text-success" /> : <Copy size={12} />}
          {copied ? "Copied" : data.Commit.slice(0, 7)}
        </button>
        <a
          href={data.Link}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-sm font-medium hover:text-brand-ink"
        >
          View PR #{prNumber}
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </footer>
    </article>
  );
};

export default OpenSourceCard;
