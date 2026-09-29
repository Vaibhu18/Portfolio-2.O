import Image from "next/image";
import { CalendarDays, GraduationCap } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const EDUCATION = [
  {
    institution: "Tuljaram Chaturchand College of Arts, Science and Commerce, Baramati",
    degree: "Master of Computer Science (M.Sc CS)",
    period: "2026 – 2028",
    logo: "https://recruitment.tccollege.org/images/TCCLogo.png",
    status: "Enrolled",
    highlight: "Advanced Algorithms, Cloud Architecture & Distributed Systems",
  },
  {
    institution: "Vidya Pratishthan's Arts Science & Commerce College Baramati",
    degree: "Bachelor of Computer Science (B.Sc CS)",
    period: "2023 – 2026",
    logo: "https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1709278369_llqmhZo9oz.jpg",
    status: "Graduated",
    highlight: "Core Computer Science, Data Structures, OOP & Database Systems",
  },
  {
    institution: "Trainee Software Developer — FunctionUp, Noida",
    degree: "Backend Development Specialization",
    period: "2022 – 2023",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHn-mst7Jf8Pw/company-logo_200_200/company-logo_200_200/0/1638195127956/functionup_logo?e=2147483647&v=beta&t=0nmjGtV6aj8aI4ltop8_q2aF7-zMaoeb0gU63pDE3as",
    status: "Completed",
    highlight: "Intensive Node.js, Express, MongoDB REST API & Microservices",
  },
];

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container-page">
        <SectionHeading
          index="06"
          label="Education"
          title="Learning, formally and otherwise."
          subtitle="Academic milestones in Computer Science and hands-on professional software engineering training."
        />

        <ol className="relative flex flex-col gap-5 border-l border-border pl-6 sm:gap-6 sm:pl-10">
          {EDUCATION.map((item) => (
            <li key={item.degree} className="reveal relative">
              <span
                aria-hidden="true"
                className={`absolute top-8 left-[-1.9rem] size-3 rounded-full ring-4 ring-background sm:left-[-2.9rem] ${
                  item.status === "Enrolled" ? "bg-brand" : "bg-muted-foreground/40"
                }`}
              />
              <article className="card card-hover flex flex-col gap-5 p-5 sm:flex-row sm:items-start sm:p-7">
                <div className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-white p-1.5">
                  <Image
                    src={item.logo}
                    alt={`${item.institution} logo`}
                    width={52}
                    height={52}
                    className="h-full w-full rounded-md object-contain"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-3">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg leading-snug font-semibold tracking-tight">{item.degree}</h3>
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                    </div>
                    <span className="flex shrink-0 items-center gap-1.5 font-mono text-xs text-muted-foreground sm:pt-1">
                      <CalendarDays size={13} /> {item.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
                    <p className="flex items-center gap-2 text-sm">
                      <GraduationCap size={15} className="shrink-0 text-brand-ink" />
                      {item.highlight}
                    </p>
                    <span
                      className={`chip py-0.5 ${
                        item.status === "Enrolled"
                          ? "border-brand/30 bg-brand-soft text-brand-ink"
                          : "border-success/30 bg-success/10 text-success"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
