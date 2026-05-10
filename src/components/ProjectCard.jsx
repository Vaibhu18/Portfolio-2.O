"use client";
import { ArrowUpRight, EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden bg-white dark:bg-neutral-900">
      <div className="relative h-50 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <iframe
          src={project.link}
          title={project.title}
          loading="lazy"
          className="absolute top-0 left-0 w-[400%] h-[400%] scale-[0.25] origin-top-left pointer-events-none"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 ">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium dark:font-normal text-neutral-500 dark:text-neutral-400">
            {project.date}
          </span>
          <span className="text-[11px] font-semibold dark:font-medium text-green-500 uppercase tracking-wider">
            {project.status}
          </span>
        </div>
        <h3 className="text-base font-semibold text-neutral-800 dark:text-white font-space">
          {project.title}
        </h3>

        <p className="text-sm font-medium dark:font-normal  text-neutral-500 dark:text-neutral-400">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-2 mt-1">
          {project.highlightTechs.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex gap-2">
            <Link
              href={project.link}
              target="_blank"
              className="text-[13px] px-3 py-1.5 rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition font-medium flex items-center gap-1"
            >
              <EyeIcon size={15} />
              Preview
            </Link>

            <Link
              href={`/projects/${project.id}`}
              className="text-[13px] px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition font-medium flex items-center gap-1"
            >
              Explore
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <Link
            href={project.github}
            target="_blank"
            className="px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            <FaGithub size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
