"use client";
import { PROJECTS } from "@/lib/Projects";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 bg-white dark:bg-neutral-950">
      <div className="w-full max-w-5xl mx-auto py-10 md:py-10">
        <h2 className="text-2xl font-space font-semibold mb-3">
          Featured Projects
        </h2>

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
