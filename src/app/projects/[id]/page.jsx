"use client";
import { PROJECTS } from "@/lib/Projects";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const Project = () => {
  const { id } = useParams();
  const projectId = parseInt(id);

  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    return (
      <section className="w-full px-6 sm:px-12 lg:px-20 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <div className="max-w-3xl mx-auto py-16 md:py-24 flex flex-col gap-8">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl md:text-4xl font-semibold font-space">
              Project not found
            </h1>

            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              The project you're looking for doesn’t exist or may have been
              removed. Try exploring other projects or return to the main
              listing.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap mt-2">
            <Link
              href="/projects"
              className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black text-sm font-medium"
            >
              View All Projects
            </Link>

            <Link
              href="/"
              className="px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              Go to Home
            </Link>
          </div>

          <div className="text-xs text-neutral-500 mt-4">
            Error Code: PROJECT_NOT_FOUND
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <div className="max-w-5xl mx-auto py-12 md:py-20 flex flex-col gap-10">
        <Link
          href="/projects"
          className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <div className="flex flex-col gap-3">
          <span className="text-sm text-neutral-500">{project.date}</span>

          <h1 className="text-3xl md:text-4xl font-bold font-space">
            {project.title}
          </h1>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
            {project.tagline}
          </p>

          <div className="flex gap-3 mt-3 flex-wrap">
            <Link
              href={project.link}
              target="_blank"
              className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black text-sm font-medium"
            >
              Live Preview
            </Link>

            <Link
              href={project.github}
              target="_blank"
              className="px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 text-sm font-medium flex items-center gap-2"
            >
              <FaGithub />
              Source Code
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech, i) => (
              <span
                key={i}
                className="text-sm px-3 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-3">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="text-neutral-700 dark:text-neutral-300 leading-relaxed"
              >
                • {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Highlights</h2>
          <div className="flex flex-wrap gap-2">
            {project.highlightTechs.map((tech, i) => (
              <span
                key={i}
                className="text-sm px-3 py-1 rounded-md bg-neutral-200 dark:bg-neutral-800 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
          <div className="w-full h-125 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
            <iframe
              src={project.link}
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
