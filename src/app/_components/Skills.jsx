"use client";
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
    { name: "C", image: "/images/icons8-c-100.png" },
    { name: "Java", image: "/images/icons8-java-100.png" },
    { name: "Python", image: "/images/icons8-python-100.png" },
    { name: "JavaScript", image: "/images/icons8-javascript-100.png" },
    { name: "HTML5", image: "/images/icons8-html5-100.png" },
    { name: "CSS3", image: "/images/icons8-css3-100.png" },
    { name: "Tailwind CSS", image: "/images/icons8-tailwind-css-100.png" },
    { name: "React.js", image: "/images/icons8-react-100.png" },
    { name: "Redux", image: "/images/icons8-redux-100.png" },
    { name: "Next.js", image: "/images/icons8-nextjs-100.png" },
    { name: "Node.js", image: "/images/icons8-nodejs-100.png" },
    { name: "Express.js", image: "/images/icons8-express-js-100.png" },
    { name: "Socket.IO", image: "/images/socket.png" },
    { name: "Microservices", image: "/images/icons8-centralized-network-100.png" },
    { name: "MongoDB", image: "/images/icons8-mongodb-100.png" },
    { name: "PostgreSQL", image: "/images/icons8-postgresql-100.png" },
    { name: "Redis", image: "/images/icons8-redis-100.png" },
    { name: "Git", image: "/images/icons8-git-100.png" },
    { name: "Docker", image: "/images/icons8-docker-100.png" },
    { name: "AWS", image: "/images/icons8-aws-100.png" },
];
