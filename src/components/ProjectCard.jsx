"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Maximize2, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Modal from "./ui/Modal";
import { stripEmoji } from "@/lib/utils";

export function BrowserBar({ url, children }) {
  return (
    <div className="flex items-center gap-3 border-b border-border bg-surface-2 px-3.5 py-2.5">
      <div className="flex shrink-0 gap-1.5" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      <span className="min-w-0 flex-1 truncate rounded-md bg-background px-2.5 py-0.5 text-center font-mono text-[11px] text-muted-foreground">
        {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
      </span>
      {children}
    </div>
  );
}

const ProjectCard = ({ project }) => {
  const [showPreview, setShowPreview] = useState(false);
  const closePreview = useCallback(() => setShowPreview(false), []);

  return (
    <>
      <article className="reveal card card-hover group flex h-full flex-col overflow-hidden">
        {/* Live preview */}
        <div className="relative">
          <BrowserBar url={project.link} />
          <div className="relative aspect-16/10 overflow-hidden bg-surface-2">
            <iframe
              src={project.link}
              title={`${project.title} live preview`}
              loading="lazy"
              tabIndex={-1}
              aria-hidden="true"
              sandbox="allow-scripts allow-same-origin"
              className="pointer-events-none absolute top-0 left-0 h-[400%] w-[400%] origin-top-left scale-25 border-0"
            />
            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/55 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">
              <button
                type="button"
                onClick={() => setShowPreview(true)}
                className="btn btn-sm bg-white text-neutral-900 hover:bg-neutral-100"
              >
                <Maximize2 size={14} /> Full preview
              </button>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
            <span className="font-mono">{stripEmoji(project.date)}</span>
            <span className="chip border-success/30 bg-success/10 py-0.5 text-success">{project.status}</span>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold tracking-tight">
              <Link href={`/projects/${project.id}`} className="transition-colors hover:text-brand-ink">
                {project.title}
              </Link>
            </h3>
            <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>
          </div>

          <ul className="flex flex-wrap gap-1.5">
            {project.highlightTechs.map((tech) => (
              <li key={tech} className="chip py-0.5 text-[11px]">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-center gap-2 border-t border-border pt-4">
            <Link href={`/projects/${project.id}`} className="btn btn-primary btn-sm group/btn">
              Case study
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </Link>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <ExternalLink size={14} /> Live
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Source code for ${project.title} on GitHub`}
              className="icon-btn ml-auto size-9"
            >
              <FaGithub size={16} />
            </a>
          </div>
        </div>
      </article>

      <Modal open={showPreview} onClose={closePreview} label={`${project.title} preview`} className="h-[85dvh] max-w-6xl">
        <BrowserBar url={project.link}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open in new tab"
            className="icon-btn size-7 shrink-0 border-0 bg-transparent"
          >
            <ExternalLink size={14} />
          </a>
          <button
            type="button"
            onClick={closePreview}
            aria-label="Close preview"
            className="icon-btn size-7 shrink-0 border-0 bg-transparent"
          >
            <X size={16} />
          </button>
        </BrowserBar>
        <iframe src={project.link} title={project.title} className="h-full w-full flex-1 border-0 bg-white" />
      </Modal>
    </>
  );
};

export default ProjectCard;
