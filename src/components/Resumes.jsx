import { Download, Eye, FileText } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { RESUMES, DEFAULT_RESUME } from "@/lib/Resumes";

const Resumes = () => {
  return (
    <section id="resume" className="section">
      <div className="container-page">
        <SectionHeading
          index="08"
          label="Resume"
          title={
            <>
              Pick the resume that <span className="serif-accent text-brand">fits</span> the role.
            </>
          }
          subtitle="Three versions of the same experience, each focused on a different stack."
        />

        <ul className="grid gap-6 md:grid-cols-3">
          {RESUMES.map((resume) => {
            const isDefault = resume.id === DEFAULT_RESUME.id;
            return (
              <li key={resume.id} className="reveal card card-hover flex flex-col gap-5 p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-brand-soft text-brand-ink">
                    <FileText size={18} />
                  </span>
                  {isDefault && (
                    <span className="chip border-success/30 bg-success/10 text-success">Recommended</span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-semibold tracking-tight">{resume.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{resume.focus}</p>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {resume.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={resume.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label={`View ${resume.title} resume`}
                  >
                    <Eye size={15} /> View
                  </a>
                  <a
                    href={resume.file}
                    download={resume.downloadName}
                    className={`btn btn-sm ${isDefault ? "btn-primary" : "btn-secondary"}`}
                    aria-label={`Download ${resume.title} resume`}
                  >
                    <Download size={15} /> Download
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Resumes;
