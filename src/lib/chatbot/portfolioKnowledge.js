import { PROJECTS } from "@/lib/Projects";
import { CERTIFICATES } from "@/lib/Certificates";
import { PULLREQUESTS } from "@/lib/OpenSource";

/**
 * Authoritative Server-Safe Portfolio Knowledge Object for Vaibhav Shinde.
 * Reuses existing project data structures as the single source of truth.
 */
export const PORTFOLIO_KNOWLEDGE = {
  identity: {
    name: "Vaibhav Shinde",
    alias: "vcode",
    title: "Full Stack Developer",
    location: "Baramati, Maharashtra, India",
    status:
      "Completed a Software Development Internship at Prix Corporation (Mar–Sep 2026); not currently employed there. Open to full-time roles and impactful collaboration.",
    tagline: "Building clean, scalable web apps with a focus on performance and developer experience.",
  },

  about: {
    summary:
      "Full-Stack Developer with a strong foundation in Computer Science, software architecture, and problem-solving. Skilled in building scalable enterprise systems, robust REST APIs, resilient database architectures, and interactive modern user interfaces. Dedicated to continuous learning and applying cutting-edge full-stack and AI technologies to real-world challenges.",
    highlights: [
      {
        title: "Scalable Architecture",
        desc: "Designing end-to-end full-stack systems with clean separation of concerns.",
      },
      {
        title: "Backend & Enterprise APIs",
        desc: "Robust REST services built with ASP.NET Core, C#, Node.js & Express.",
      },
      {
        title: "Database Optimization",
        desc: "Extensive querying and tuning across SQL Server, MongoDB, and Redis.",
      },
      {
        title: "Modern Interactive UI",
        desc: "Crafting fluid, accessible experiences with React and Next.js.",
      },
    ],
  },

  experience: [
    {
      company: "Prix Corporation",
      role: "Software Development Intern",
      type: "Internship (completed)",
      period: "1 Mar 2026 – 16 Sep 2026",
      location: "Baramati, Maharashtra, India",
      technologies: [
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
      ],
      responsibilities: [
        "Developed and maintained enterprise web applications using C# and .NET.",
        "Built robust and scalable REST APIs with ASP.NET Core.",
        "Designed and integrated responsive user interfaces using TypeScript and Bootstrap.",
        "Worked extensively with Entity Framework Core and SQL Server for data management.",
        "Participated in code reviews and sprint planning, collaborating closely with QA, BAs, and senior developers.",
      ],
      achievements: [
        "Developed multiple enterprise modules for HR and Payroll systems, enhancing overall system capabilities.",
        "Improved API response times through efficient query optimization and database tuning.",
        "Built highly reusable UI components that were adopted across multiple screens and projects.",
        "Implemented secure authentication and authorization protocols to protect sensitive enterprise data.",
        "Actively contributed to smooth production releases, bug fixes, and continuous system improvements.",
      ],
    },
  ],

  education: [
    {
      institution: "Tuljaram Chaturchand College of Arts, Science and Commerce (TCC), Baramati",
      degree: "Master of Computer Science (M.Sc CS)",
      period: "2026 – 2028",
      status: "Enrolled",
      highlight: "Advanced Algorithms, Cloud Architecture & Distributed Systems",
    },
    {
      institution: "Vidya Pratishthan's Arts Science & Commerce College (VPASC), Baramati",
      degree: "Bachelor of Computer Science (B.Sc CS)",
      period: "2023 – 2026",
      status: "Graduated",
      highlight: "Core Computer Science, Data Structures, OOP & Database Systems",
    },
    {
      institution: "FunctionUp, Noida",
      degree: "Backend Development Specialization",
      period: "2022 – 2023",
      status: "Completed",
      highlight: "Intensive Node.js, Express, MongoDB REST API & Microservices",
    },
  ],

  skills: {
    languages: ["C", "C#", "Java", "JavaScript", "TypeScript"],
    frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Three.js"],
    backend: ["ASP.NET Core", ".NET 8", "Node.js", "Express.js", "Socket.IO", "REST APIs"],
    databases: ["MongoDB", "SQL Server", "PostgreSQL", "Redis", "Entity Framework Core"],
    devopsAndTools: ["Git", "AWS", "Inngest", "Cloudinary", "Postman", "Sandpack"],
  },

  projects: PROJECTS.map((p) => ({
    id: p.id,
    title: p.title,
    tagline: p.tagline,
    features: p.features,
    techs: p.highlightTechs,
    status: p.status,
    liveUrl: p.link,
    githubUrl: p.github,
    date: p.date,
  })),

  openSource: PULLREQUESTS.map((pr) => ({
    organization: pr.Org,
    date: pr.Date,
    issue: pr.Issue,
    status: pr.Status,
    description: pr.Desc,
    pullRequestUrl: pr.Link,
  })),

  certificates: CERTIFICATES.map((c) => ({
    title: c.title,
    issuer: c.issuer,
    date: c.date,
    description: c.description,
    type: c.type,
    verificationLink: c.verificationLink || null,
  })),

  contact: {
    email: "vcode.dev18@gmail.com",
    github: "https://github.com/Vaibhu18",
    linkedin: "https://www.linkedin.com/in/vaibhu18",
    leetcode: "https://leetcode.com/vaibhu18/",
    hackerrank: "https://www.hackerrank.com/profile/vcode_dev18",
    website: "https://itsvcode.vercel.app",
    averageResponseTime: "Within 24 hours",
  },
};
