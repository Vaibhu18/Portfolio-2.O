import ProjectCard from "@/components/ProjectCard";
import PageHeader from "@/components/ui/PageHeader";
import { PROJECTS } from "@/lib/Projects";

export const metadata = {
  title: "Projects",
  description:
    "Explore full-stack web applications, AI platforms, and distributed systems developed by Vaibhav Shinde.",
};

const ProjectsPage = () => {
  return (
    <>
      <PageHeader
        eyebrow={`Archive · ${PROJECTS.length} projects`}
        title={
          <>
            All <span className="serif-accent text-brand">projects</span>.
          </>
        }
        subtitle="Explore live previews, architectural patterns, and technology stacks for each full-stack application."
      />
      <section className="container-page pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
