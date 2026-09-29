import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Header block for standalone pages (clears the fixed navbar).
export default function PageHeader({ backHref = "/", backLabel = "Back to home", eyebrow, title, subtitle, children }) {
  return (
    <div className="relative overflow-hidden pt-28 pb-10 md:pt-36 md:pb-14">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-glow" />
      <div className="container-page relative flex flex-col items-start gap-6">
        <Link
          href={backHref}
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
          {backLabel}
        </Link>
        <div className="flex max-w-3xl flex-col gap-4">
          {eyebrow && <span className="eyebrow animate-rise">{eyebrow}</span>}
          <h1 className="animate-rise delay-1 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="animate-rise delay-2 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
