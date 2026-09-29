"use client";

import { useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import SkillLogo from "./ui/SkillLogo";
import { SKILLS, SKILL_CATEGORIES } from "@/lib/Skills";

const CATEGORY_LABELS = Object.fromEntries(SKILL_CATEGORIES.map((c) => [c.id, c.label]));

export default function SkillsAndTech() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all" ? SKILLS : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionHeading
          index="03"
          label="Skills"
          title={
            <>
              A full-stack <span className="serif-accent text-brand">toolkit</span>.
            </>
          }
          subtitle="A comprehensive ecosystem spanning scalable server architectures, resilient databases, and interactive user interfaces."
        />

        {/* Filters */}
        <div className="reveal -mx-5 mb-8 overflow-x-auto px-5 no-scrollbar sm:mx-0 sm:px-0">
          <div
            role="group"
            aria-label="Filter skills by category"
            className="inline-flex gap-1 rounded-full border border-border bg-surface p-1"
          >
            {SKILL_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === "all" ? SKILLS.length : SKILLS.filter((s) => s.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                  }`}
                >
                  {cat.label}
                  <span className={`font-mono text-xs ${isActive ? "opacity-70" : "opacity-60"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <ul
          aria-live="polite"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5"
        >
          {filteredSkills.map((skill, index) => (
            <li
              key={skill.name}
              style={{ animationDelay: `${index * 25}ms` }}
              className="animate-rise card card-hover flex items-center gap-3 p-3 sm:p-4"
            >
              <SkillLogo skill={skill} size={26} />
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-sm font-semibold">{skill.name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {CATEGORY_LABELS[skill.category]}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
