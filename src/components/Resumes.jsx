import { Download, Eye, FileText } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { RESUMES } from "@/lib/Resumes";

const Resumes = () => {
  return (
    <section id="resume" className="section">
      <div className="container-page">
        <SectionHeading
          index="08"
          label="Resume"
          title={
            <>
              Curriculum <span className="serif-accent text-brand">vitae</span>.
            </>
          }
          subtitle="A comprehensive overview of full-stack engineering experience, production projects, and core technical competencies."
        />

        <div className="mx-auto max-w-2xl">
          {RESUMES.map((resume) => (
            <div
              key={resume.id}
              className="reveal card card-hover flex flex-col gap-6 p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-xl bg-brand-soft text-brand-ink">
                    <FileText size={22} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{resume.title}</h3>
                    <span className="text-xs text-muted-foreground">Updated Resume</span>
                  </div>
                </div>
                <span className="chip border-success/30 bg-success/10 text-success">Latest</span>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">{resume.focus}</p>

              <ul className="flex flex-wrap gap-2">
                {resume.stack.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={resume.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  aria-label={`View ${resume.title} resume`}
                >
                  <Eye size={16} /> View Resume
                </a>
                <a
                  href={resume.file}
                  download={resume.downloadName}
                  className="btn btn-primary"
                  aria-label={`Download ${resume.title} resume`}
                >
                  <Download size={16} /> Download CV
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resumes;
