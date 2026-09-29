"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import SocialIcon from "./ui/SocialIcon";
import Logo from "./ui/Logo";
import { NAV_LINKS, SITE, SOCIALS } from "@/lib/site";

const formatIST = () =>
  new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(formatIST());
    const first = setTimeout(tick, 0);
    const interval = setInterval(tick, 30_000);
    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, []);

  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="container-page flex flex-col gap-12 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="group w-fit" aria-label={`${SITE.name} — home`}>
              <Logo size={40} />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Full-stack developer building clean, scalable web apps with a focus on performance and
              developer experience.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="w-fit text-sm font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-brand"
            >
              {SITE.email}
            </a>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="eyebrow">Navigate</span>
            <ul className="grid grid-cols-2 gap-2 text-sm md:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <span className="eyebrow">Elsewhere</span>
            <ul className="flex flex-col gap-2 text-sm">
              {SOCIALS.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <SocialIcon id={s.id} size={14} />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {time && (
              <span className="font-mono text-xs">
                Baramati · {time} IST
              </span>
            )}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="icon-btn size-9"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
