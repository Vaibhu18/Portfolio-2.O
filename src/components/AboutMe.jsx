import { Briefcase, CheckCircle2, Code, Cpu, Database, Layers, MapPin, Sparkles } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { SITE } from "@/lib/site";

const HIGHLIGHTS = [
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Designing end-to-end full-stack systems with clean separation of concerns.",
  },
  {
    icon: Cpu,
    title: "Backend & Enterprise APIs",
    desc: "Robust REST services built with ASP.NET Core, C#, Node.js & Express.",
  },
  {
    icon: Database,
    title: "Database Optimization",
    desc: "Extensive querying and tuning across SQL Server, MongoDB, and Redis.",
  },
  {
    icon: Code,
    title: "Modern Interactive UI",
    desc: "Crafting fluid, accessible experiences with React and Next.js.",
  },
];

const FACTS = [
  { icon: Briefcase, label: "Current role", value: "Software Developer @ Prix Corp" },
  { icon: MapPin, label: "Location", value: SITE.location },
  { icon: Sparkles, label: "Specialization", value: "Full Stack (.NET / MERN / Next)" },
  { icon: CheckCircle2, label: "Status", value: "Open for collaboration", accent: true },
];

const AboutMe = () => {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <SectionHeading
          index="01"
          label="About"
          title={
            <>
              Engineering software that&apos;s <span className="serif-accent text-brand">simple</span> to
              use and built to last.
            </>
          }
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Narrative */}
          <div className="reveal card flex flex-col justify-between gap-8 p-6 sm:p-8 lg:col-span-7">
            <p className="text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
              Full-Stack Developer with a strong foundation in Computer Science, programming, and
              problem-solving.{" "}
              <span className="text-muted-foreground">
                Skilled in designing and developing scalable applications, integrating databases, and
                building APIs. Passionate about applying technical expertise to real-world challenges
                while continuously learning and adapting to emerging technologies.
              </span>
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Committed to contributing to innovative projects and delivering impactful solutions
              across both frontend and backend development.
            </p>
          </div>

          {/* Quick facts */}
          <div className="reveal card p-6 sm:p-8 lg:col-span-5">
            <dl className="flex flex-col divide-y divide-border">
              {FACTS.map(({ icon: Icon, label, value, accent }) => (
                <div key={label} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-surface-2 text-muted-foreground">
                    <Icon size={16} />
                  </span>
                  <div className="flex min-w-0 flex-col">
                    <dt className="text-xs text-muted-foreground">{label}</dt>
                    <dd className={`font-medium ${accent ? "text-success" : ""}`}>{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Highlights */}
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-4">
            {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="reveal card card-hover flex flex-col gap-4 p-6">
                <span className="grid size-10 place-items-center rounded-xl bg-brand-soft text-brand-ink">
                  <Icon size={18} />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold tracking-tight">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
