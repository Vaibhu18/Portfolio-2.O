import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/Projects";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section className="w-full flex items-center px-6 sm:px-12 lg:px-20 bg-white dark:bg-neutral-950">
      <div className="w-full max-w-5xl mx-auto gap-12 md:gap-16 py-10 md:py-20">
        <Link
          href="/"
          className="pb-3 flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <h1 className="text-2xl font-space mb-3 font-semibold">
          Featured Projects
        </h1>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
