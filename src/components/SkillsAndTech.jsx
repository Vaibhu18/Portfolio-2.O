import Image from "next/image";
import React from "react";

const SkillsAndTech = () => {
  return (
    <div>
      <section className="w-full flex items-center px-6 sm:px-12 lg:px-20 bg-white dark:bg-neutral-950">
        <div className="w-full max-w-5xl mx-auto gap-12 md:gap-16 py-10 md:py-10">
          <h1 className="text-2xl font-space mb-3 font-semibold">
            Skills & Technologies
          </h1>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1 border px-3 py-2 rounded-md text-center bg-neutral-50 dark:bg-neutral-900/30"
              >
                <Image
                  src={skill.image}
                  width={38}
                  height={38}
                  alt={skill.name}
                />
                <span className="text-[13px] text-neutral-700 font-medium dark:text-neutral-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsAndTech;

const skills = [
  // 🧠 Languages
  { name: "C", image: "/Skills/C.png" },
  { name: "C#", image: "/Skills/CSharp.png" },
  { name: "Java", image: "/Skills/Java.png" },
  // { name: "Python", image: "/Skills/Python.png" },
  { name: "JavaScript", image: "/Skills/JavaScript.png" },

  // 🎨 Frontend
  { name: "HTML5", image: "/Skills/HTML5.png" },
  { name: "CSS3", image: "/Skills/CSS3.png" },
  { name: "Tailwind CSS", image: "/Skills/TailwindCSS.png" },
  { name: "React.js", image: "/Skills/Reactjs.png" },
  { name: "Angular", image: "/Skills/Angular.png" },
  // { name: "Redux", image: "/Skills/Redux.png" },
  // { name: "TanStack Query", image: "/Skills/TanStackQuery.png" },
  { name: "Next.js", image: "/Skills/Nextjs.png" },

  // ⚙️ Backend
  { name: "Node.js", image: "/Skills/Nodejs.png" },
  { name: ".NET", image: "/Skills/Dotnet.png" },
  { name: "Express.js", image: "/Skills/Expressjs.png" },
  { name: "Socket.IO", image: "/Skills/Socket.png" },
  // {
  //   name: "Microservices",
  //   image: "/Skills/Microservices.png",
  // },

  // 🗄️ Databases
  { name: "MongoDB", image: "/Skills/Mongodb.png" },
  { name: "PostgreSQL", image: "/Skills/Postgresql.png" },
  { name: "SQL Server", image: "/Skills/sqlServer.svg" },
  { name: "Redis", image: "/Skills/Redis.png" },

  // 🚀 DevOps & Tools
  { name: "Git", image: "/Skills/Git.png" },
  // { name: "Docker", image: "/Skills/Docker.png" },
  { name: "AWS", image: "/Skills/AWS.png" },
];
