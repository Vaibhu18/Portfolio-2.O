"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PROJECTS } from "@/lib/Projects";
import { stripEmoji } from "@/lib/utils";
import PageHeader from "@/components/ui/PageHeader";
import { BrowserBar } from "@/components/ProjectCard";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const projectId = parseInt(id);

  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    return (
      <section className="container-page flex min-h-[70vh] items-center justify-center pt-28 pb-20">
        <div className="card flex max-w-lg flex-col items-center gap-5 p-8 text-center sm:p-10">
          <span className="font-mono text-sm text-brand-ink">404</span>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Project not found</h1>
          <p className="text-muted-foreground">
            The project you are looking for does not exist or may have been updated.
          </p>
          <Link href="/projects" className="btn btn-primary">
            Explore all projects
          </Link>
        </div>
      </section>
    );
  }

  const index = PROJECTS.indexOf(project);
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <>
      <PageHeader
        backHref="/projects"
        backLabel="All projects"
        eyebrow={
          <>
            <span>{stripEmoji(project.date)}</span>
            <span className="h-px w-6 bg-border" aria-hidden="true" />
            <span className="text-success">{project.status}</span>
          </>
        }
        title={project.title}
        subtitle={project.tagline}
      >
        <div className="animate-rise delay-3 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Visit live site <ExternalLink size={15} />
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <FaGithub size={16} /> Source code
          </a>
        </div>
      </PageHeader>

      <div className="container-page flex flex-col gap-6 pb-24">
        {/* Live embed */}
        <div className="card overflow-hidden">
          <BrowserBar url={project.link}>
            <span className="hidden shrink-0 items-center gap-1.5 font-mono text-[11px] text-success sm:inline-flex">
              <span className="size-1.5 animate-pulse rounded-full bg-success" /> Live
            </span>
          </BrowserBar>
          <iframe
            src={project.link}
            title={project.title}
            loading="lazy"
            className="block h-[60dvh] min-h-105 w-full border-0 bg-white md:h-160"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Features */}
          <section className="reveal card flex flex-col gap-5 p-6 sm:p-8 lg:col-span-3">
            <h2 className="text-xl font-semibold tracking-tight">Key features</h2>
            <ul className="flex flex-col gap-3.5">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 leading-relaxed">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success/10 text-success">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-[0.9375rem]">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Stack */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <section className="reveal card flex flex-col gap-4 p-6 sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight">Tech stack</h2>
              <ul className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <li key={tech} className="chip">
                    {stripEmoji(tech)}
                  </li>
                ))}
              </ul>
            </section>

            <section className="reveal card flex flex-col gap-4 p-6 sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight">Core highlights</h2>
              <ul className="flex flex-wrap gap-2">
                {project.highlightTechs.map((tech) => (
                  <li key={tech} className="chip border-brand/30 bg-brand-soft text-brand-ink">
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Next project */}
        {nextProject && nextProject.id !== project.id && (
          <Link
            href={`/projects/${nextProject.id}`}
            className="reveal card card-hover group mt-6 flex items-center justify-between gap-6 p-6 sm:p-8"
          >
            <div className="flex min-w-0 flex-col gap-1">
              <span className="eyebrow">Next project</span>
              <span className="truncate text-xl font-semibold tracking-tight sm:text-2xl">{nextProject.title}</span>
            </div>
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-foreground text-background transition-transform group-hover:translate-x-1">
              <ArrowRight size={20} />
            </span>
          </Link>
        )}
      </div>
    </>
  );
};

export default ProjectDetailPage;
