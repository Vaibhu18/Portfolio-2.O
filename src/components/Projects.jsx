import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/Projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./ui/SectionHeading";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container-page">
        <SectionHeading
          index="04"
          label="Projects"
          title={
            <>
              Selected <span className="serif-accent text-brand">work</span>.
            </>
          }
          subtitle="Production-ready applications featuring real-time communication, AI agent workflows, and full-stack cloud architectures."
          action={
            <Link href="/projects" className="btn btn-secondary group">
              View all projects
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          }
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
