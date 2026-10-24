import Image from "next/image";
import { Briefcase, CalendarDays, Check, MapPin } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const TECHNOLOGIES = [
  "C#",
  ".NET 8",
  "ASP.NET Core",
  "TypeScript",
  "JavaScript",
  "SQL Server",
  "Entity Framework Core",
  "Git",
  "REST API",
  "Bootstrap",
  "AG Grid",
];

const ACHIEVEMENTS = [
  "Developed multiple enterprise modules for HR and Payroll systems, enhancing overall system capabilities.",
  "Improved API response times through efficient query optimization and database tuning.",
  "Built highly reusable UI components that were adopted across multiple screens and projects.",
  "Implemented secure authentication and authorization protocols to protect sensitive enterprise data.",
  "Actively contributed to smooth production releases, bug fixes, and continuous system improvements.",
];

const RESPONSIBILITIES = [
  "Developed and maintained enterprise web applications using C# and .NET.",
  "Built robust and scalable REST APIs with ASP.NET Core.",
  "Designed and integrated responsive user interfaces using TypeScript and Bootstrap.",
  "Worked extensively with Entity Framework Core and SQL Server for data management.",
  "Participated in code reviews and sprint planning, collaborating closely with QA, BAs, and senior developers.",
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <SectionHeading
          index="02"
          label="Experience"
          title="Where I've been building."
          subtitle="Real-world experience architecting and delivering enterprise systems with .NET and high-performance databases."
        />

        <article className="reveal card overflow-hidden">
          {/* Role header */}
          <header className="flex flex-col gap-6 border-b border-border p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-2xl border border-border bg-white p-2 sm:size-18">
                <Image
                  src="/prixlogo.png"
                  alt="Prix Corporation logo"
                  width={72}
                  height={72}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex min-w-0 flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    Software Development Intern
                  </h3>
                  <span className="chip">
                    <Check size={12} strokeWidth={3} /> Completed
                  </span>
                </div>
                <p className="font-medium text-brand-ink">Prix Corporation</p>
              </div>
            </div>

            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground md:flex-col md:items-end md:gap-1.5">
              <li className="flex items-center gap-2">
                <CalendarDays size={15} /> Mar 2026 – Sep 2026
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={15} /> Baramati, Maharashtra, India
              </li>
              <li className="flex items-center gap-2">
                <Briefcase size={15} /> Internship
              </li>
            </ul>
          </header>

          {/* Details */}
          <div className="grid gap-px bg-border lg:grid-cols-2">
            <div className="flex flex-col gap-5 bg-surface p-6 sm:p-8">
              <h4 className="eyebrow">Key achievements & impact</h4>
              <ul className="flex flex-col gap-4">
                {ACHIEVEMENTS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.9375rem] leading-relaxed">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success/10 text-success">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5 bg-surface p-6 sm:p-8">
              <h4 className="eyebrow">Core responsibilities</h4>
              <ul className="flex flex-col gap-4">
                {RESPONSIBILITIES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stack */}
          <footer className="flex flex-col gap-4 border-t border-border p-6 sm:p-8">
            <h4 className="eyebrow">Technologies & tools</h4>
            <ul className="flex flex-wrap gap-2">
              {TECHNOLOGIES.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default Experience;
