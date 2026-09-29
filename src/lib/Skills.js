export const SKILL_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "DevOps & Tools" },
];

// `invertDark`: monochrome black logo, invert it on dark backgrounds.
// `plate`: logo has dark text; give it a light backing plate in dark mode.
export const SKILLS = [
  // Languages
  { name: "C", image: "/Skills/C.png", category: "languages" },
  { name: "C#", image: "/Skills/CSharp.png", category: "languages" },
  { name: "Java", image: "/Skills/Java.png", category: "languages" },
  { name: "JavaScript", image: "/Skills/JavaScript.png", category: "languages" },

  // Frontend
  { name: "HTML5", image: "/Skills/HTML5.png", category: "frontend" },
  { name: "CSS3", image: "/Skills/CSS3.png", category: "frontend" },
  { name: "Tailwind CSS", image: "/Skills/TailwindCSS.png", category: "frontend" },
  { name: "React.js", image: "/Skills/Reactjs.png", category: "frontend" },
  { name: "Next.js", image: "/Skills/Nextjs.png", category: "frontend" },

  // Backend
  { name: "Node.js", image: "/Skills/Nodejs.png", category: "backend" },
  { name: ".NET", image: "/Skills/Dotnet.png", category: "backend" },
  { name: "Express.js", image: "/Skills/Expressjs.png", category: "backend" },
  { name: "Socket.IO", image: "/Skills/Socket.png", category: "backend", invertDark: true },

  // Databases
  { name: "MongoDB", image: "/Skills/Mongodb.png", category: "databases" },
  { name: "PostgreSQL", image: "/Skills/Postgresql.png", category: "databases" },
  { name: "SQL Server", image: "/Skills/sqlServer.svg", category: "databases" },
  { name: "Redis", image: "/Skills/Redis.png", category: "databases" },

  // DevOps & Tools
  { name: "Git", image: "/Skills/Git.png", category: "tools" },
  { name: "AWS", image: "/Skills/AWS.png", category: "tools", plate: true },
];
