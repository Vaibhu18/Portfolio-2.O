"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Award, Briefcase, Download, FolderGit2, Layers, Mail, User } from "lucide-react";
import ThemeToggle from "./ui/ThemeToggle";
import Logo from "./ui/Logo";
import SocialIcon from "./ui/SocialIcon";
import { NAV_LINKS, SITE, SOCIALS } from "@/lib/site";

const LINK_ICONS = {
  about: User,
  experience: Briefcase,
  skills: Layers,
  projects: FolderGit2,
  certificates: Award,
  contact: Mail,
};

// Every home-page section, so the highlight clears over sections without a nav link
const OBSERVED_SECTIONS = ["hero", "about", "experience", "skills", "projects", "opensource", "education", "certificates", "contact"];

const subscribeScroll = (callback) => {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
};

// Tracks which home-page section sits in the middle of the viewport
function useActiveSection(enabled) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!enabled) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    OBSERVED_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

function MenuIcon({ open }) {
  const bar = "absolute left-1/2 h-[1.5px] w-[18px] -translate-x-1/2 rounded-full bg-current transition-all duration-300";
  return (
    <span className="relative block size-5" aria-hidden="true">
      <span className={`${bar} ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[6px]"}`} />
      <span className={`${bar} top-1/2 -translate-y-1/2 ${open ? "opacity-0" : "opacity-100"}`} />
      <span className={`${bar} ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[13px]"}`} />
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useSyncExternalStore(subscribeScroll, () => window.scrollY > 8, () => false);
  const activeSection = useActiveSection(pathname === "/");

  // Close the mobile menu on Escape, and lock page scroll while it's open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (link) =>
    (!link.href.includes("#") && pathname.startsWith(link.href)) || activeSection === link.section;

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
          open
            ? "border-b border-border bg-background"
            : scrolled
              ? "border-b border-border bg-background/80 backdrop-blur-xl backdrop-saturate-150"
              : "border-b border-transparent"
        }`}
      >
        <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-4">
          <Link href="/" onClick={close} className="group" aria-label={`${SITE.name} — home`}>
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 rounded-full lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "true" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      active ? "bg-surface-2 text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-brand" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href={SITE.resume} download className="btn btn-primary btn-sm hidden sm:inline-flex">
              Resume
              <ArrowUpRight size={15} />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`icon-btn lg:hidden ${open ? "border-foreground/20 text-foreground" : ""}`}
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="fixed inset-0 top-16 z-45 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={close}
            className="animate-fade-in absolute inset-0 bg-background/60 backdrop-blur-sm"
          />

          <div className="container-page relative pt-3">
            <div className="animate-chat-window-in card max-h-[calc(100dvh-6rem)] overflow-y-auto p-2 shadow-pop">
              <ul className="flex flex-col gap-0.5">
                {NAV_LINKS.map((link, i) => {
                  const active = isActive(link);
                  const Icon = LINK_ICONS[link.section];
                  return (
                    <li key={link.href} className="animate-rise" style={{ animationDelay: `${60 + i * 35}ms` }}>
                      <Link
                        href={link.href}
                        onClick={close}
                        aria-current={active ? "true" : undefined}
                        className={`group flex items-center gap-3.5 rounded-2xl px-3 py-3 transition-colors active:scale-[0.99] ${
                          active ? "bg-surface-2" : "hover:bg-surface-2"
                        }`}
                      >
                        <span
                          className={`grid size-10 shrink-0 place-items-center rounded-xl transition-colors ${
                            active
                              ? "bg-foreground text-background"
                              : "bg-brand-soft text-brand-ink group-hover:bg-foreground group-hover:text-background"
                          }`}
                        >
                          <Icon size={17} />
                        </span>
                        <span className="flex min-w-0 flex-1 items-baseline gap-2.5">
                          <span className="font-mono text-[11px] text-muted-foreground">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-base font-semibold tracking-tight">{link.label}</span>
                        </span>
                        {active ? (
                          <span className="size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                        ) : (
                          <ArrowRight
                            size={16}
                            className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div
                className="animate-rise mt-2 flex flex-col gap-4 rounded-2xl bg-surface-2 p-4"
                style={{ animationDelay: `${60 + NAV_LINKS.length * 35}ms` }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-sm">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
                      <span className="relative inline-flex size-2 rounded-full bg-success" />
                    </span>
                    <span className="font-medium">Available for work</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.id}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="icon-btn size-9"
                      >
                        <SocialIcon id={s.id} size={15} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a href={SITE.resume} download onClick={close} className="btn btn-primary btn-sm h-11">
                    <Download size={15} /> Resume
                  </a>
                  <Link href="/#contact" onClick={close} className="btn btn-secondary btn-sm h-11">
                    Let&apos;s talk <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
