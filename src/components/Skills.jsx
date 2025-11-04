"use client";
import Image from "next/image";
import React from "react";

const Skills = () => {
    return (
        <section className="w-full sm:w-[85vw] md:w-[65vw] mx-auto px-3 pt-10">
            {/* Header */}
            <div className="mb-5">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    Skills & Technologies
                </h1>
                <p className="text-[15px] text-gray-600 dark:text-gray-400 mt-2 max-w-xl text-start">
                    A curated list of tools and technologies I use to design, develop, and
                    deploy modern applications.
                </p>
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-1 px-5 py-2 rounded-xl border border-gray-200 dark:border-gray-700
                        bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-sm font-medium
                        hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/40
                        transition-colors duration-200"
                    >
                        <div className="shrink-0">
                            <Image
                                src={skill.image}
                                width={33}
                                height={33}
                                alt={skill.name}
                                className="object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* Skill Categories */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                <div className="text-center p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1.5">
                        Frontend
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        React, Next.js, Tailwind, Redux
                    </p>
                </div>
                <div className="text-center p-5 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                    <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-1.5">
                        Backend
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Node.js, Express, Python, Microservices
                    </p>
                </div>
                <div className="text-center p-5 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-green-600 dark:text-green-400 mb-1.5">
                        DevOps
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Docker, AWS, Git, Redis
                    </p>
                </div>
            </div>

            {/* Footer Note */}
            <div className="text-center mt-6">
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    Constantly learning, improving, and adapting to new technologies.
                </p>
            </div>
        </section>
    );
};

export default Skills;

// Skills Data
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
    { name: "Express.js", image: "/images/express.png" },
    { name: "Socket.IO", image: "/images/socket.png" },
    { name: "Microservices", image: "/images/icons8-centralized-network-100.png" },
    { name: "MongoDB", image: "/images/mongodb.png" },
    { name: "PostgreSQL", image: "/images/icons8-postgresql-100.png" },
    { name: "Redis", image: "/images/icons8-redis-100.png" },
    { name: "Git", image: "/images/icons8-git-100.png" },
    { name: "Docker", image: "/images/icons8-docker-100.png" },
    { name: "AWS", image: "/images/icons8-aws-100.png" },
];
