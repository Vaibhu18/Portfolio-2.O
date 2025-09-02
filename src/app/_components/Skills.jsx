import Image from "next/image";
import React from "react";

const Skills = () => {
    return (
        <div className="w-[100vw] sm:w-[85vw] md:w-[65vw] mx-auto px-2 mt-12">
            <h1 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Skills
            </h1>

            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-700
                       bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-sm font-medium
                       hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/40
                       transition-colors duration-200"
                    >
                        <Image
                            src={skill.image}
                            width={25}
                            height={25}
                            alt={skill.name}
                            className="object-contain"
                        />
                        {skill.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Skills;

const skills = [
    { name: "C", image: "/images/C.png" },
    { name: "Java", image: "/images/java.png" },
    { name: "Python", image: "/images/python.png" },
    { name: "JavaScript", image: "/images/javascript.png" },
    { name: "HTML5", image: "/images/html.png" },
    { name: "CSS3", image: "/images/css.png" },
    { name: "Tailwind CSS", image: "/images/tailwind.png" },
    { name: "React.js", image: "/images/react.png" },
    { name: "Redux", image: "/images/redux.png" },
    { name: "Next.js", image: "/images/Next.js.jpeg" },
    { name: "Node.js", image: "/images/nodejs.png" },
    { name: "Express.js", image: "/images/express.png" },
    { name: "Socket.IO", image: "/images/socket.png" },
    { name: "Microservices", image: "/images/microservices.png" },
    { name: "MongoDB", image: "/images/mongo-db.png" },
    { name: "PostgreSQL", image: "/images/postgresql.png" },
    { name: "Redis", image: "/images/redis.png" },
    { name: "Git", image: "/images/git.png" },
    { name: "Docker", image: "/images/docker.png" },
    { name: "AWS", image: "/images/aws.png" },
];
