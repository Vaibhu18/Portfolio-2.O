"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight, Check, Copy, Download, MapPin } from "lucide-react";
import SocialIcon from "./ui/SocialIcon";
import SkillLogo from "./ui/SkillLogo";
import { SITE, SOCIALS } from "@/lib/site";
import { SKILLS } from "@/lib/Skills";
import { PROJECTS } from "@/lib/Projects";
import { CERTIFICATES } from "@/lib/Certificates";
import { PULLREQUESTS } from "@/lib/OpenSource";

const STATS = [
  { value: `${PROJECTS.length}+`, label: "Projects shipped" },
  { value: `${SKILLS.length}+`, label: "Technologies" },
  { value: `${CERTIFICATES.length}`, label: "Certificates & awards" },
  { value: `${PULLREQUESTS.length}`, label: "Open-source PRs merged" },
];

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-glow" />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          {/* Copy */}
          <div className="flex flex-col items-start gap-7">
            <div className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/80 py-1.5 pr-4 pl-2 text-sm backdrop-blur">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-success" />
                </span>
                Available
              </span>
              <span className="text-muted-foreground">
                Software Developer @ <span className="font-medium text-foreground">Prix Corp</span>
              </span>
            </div>

            <h1 className="animate-rise delay-1 text-balance text-[2.6rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="mb-3 block text-lg font-medium tracking-normal text-muted-foreground sm:text-xl">
                Hi, I&apos;m {SITE.name} —
              </span>
              Full-stack developer building{" "}
              <span className="serif-accent text-brand">scalable</span> products for the web.
            </h1>

            <p className="animate-rise delay-2 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              I architect enterprise systems with C# and .NET, and craft fast, accessible
              interfaces with Next.js and React — with AI workflows where they add real value.
            </p>

            <div className="animate-rise delay-3 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={SITE.resume} download className="btn btn-primary">
                <Download size={16} />
                Download CV
              </a>
              <a href="#contact" className="btn btn-secondary group">
                Let&apos;s work together
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="animate-rise delay-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-full px-1 py-1 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label={`Copy email address ${SITE.email}`}
              >
                {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
                <span aria-live="polite">{copied ? "Copied to clipboard" : SITE.email}</span>
              </button>
              <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
              <div className="flex items-center gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} profile`}
                    className="icon-btn size-9"
                  >
                    <SocialIcon id={s.id} size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="animate-rise delay-2 relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] border border-border bg-surface-2 shadow-pop">
              <Image
                src="/vaibhav.jpeg"
                alt={`Portrait of ${SITE.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 90vw"
                className="object-cover object-[50%_30%]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
                <div>
                  <p className="text-lg font-semibold leading-tight">{SITE.name}</p>
                  <p className="text-sm text-white/75">{SITE.role}</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-xs backdrop-blur-md">
                  <MapPin size={12} /> Baramati, IN
                </span>
              </div>
            </div>

            {/* Floating stack badge */}
            <div className="absolute -top-4 -left-4 hidden items-center gap-2 rounded-2xl border border-border bg-surface/90 p-2 pr-3.5 shadow-card backdrop-blur sm:flex">
              <div className="flex -space-x-2">
                {SKILLS.filter((s) => [".NET", "Next.js", "React.js"].includes(s.name)).map((s) => (
                  <SkillLogo key={s.name} skill={s} size={16} className="size-8 rounded-full bg-surface p-1.5" />
                ))}
              </div>
              <span className="text-xs font-medium">.NET · Next · React</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <dl className="animate-rise delay-5 mt-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-border gap-px md:mt-20 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 bg-surface p-5 sm:p-6">
              <dt className="order-2 text-xs text-muted-foreground sm:text-sm">{stat.label}</dt>
              <dd className="order-1 text-3xl font-semibold tracking-tight sm:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <a
          href="#about"
          className="mx-auto mt-12 hidden w-fit items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground md:flex"
        >
          <ArrowDown size={14} className="animate-bounce" /> Scroll
        </a>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-12 overflow-hidden border-y border-border bg-surface/50 py-5 md:mt-6 mask-[linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <div className="animate-marquee flex w-max hover:paused">
          {[...SKILLS, ...SKILLS].map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              aria-hidden={i >= SKILLS.length}
              className="flex items-center gap-2.5 pr-10 text-sm font-medium whitespace-nowrap text-muted-foreground"
            >
              <SkillLogo skill={skill} size={18} className="rounded-lg p-1.5" />
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
