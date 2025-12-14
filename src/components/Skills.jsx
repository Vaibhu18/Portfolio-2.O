"use client";
import Image from "next/image";
import React from "react";

const Skills = () => {
    return (
        <section className="relative w-full sm:w-[85vw] md:w-[75vw] mx-auto px-2 sm:px-4 pt-5">

            {/* Background glow */}
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500/5 via-purple-500/5 to-green-500/5 blur-3xl rounded-3xl" />

            <div className="relative bg-white/70 dark:bg-zinc-900 backdrop-blur-xl rounded-md border border-gray-200/40 dark:border-gray-800/40 p-6 sm:p-8 shadow-lg">

                {/* Header */}
                <div className="mb-5">
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Skills & Technologies
                    </h1>
                    <p className="text-[15px] text-gray-600 dark:text-gray-400 mt-2 max-w-xl">
                        A curated list of tools and technologies I use to design, develop, and
                        deploy modern applications.
                    </p>
                    <div className="mt-2 h-1 w-14 rounded-full bg-linear-to-r from-red-500 via-pink-500 to-blue-500" />
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center gap-1 px-5 py-3 rounded-md
                            border border-gray-200 dark:border-gray-700
                            bg-gray-50 dark:bg-zinc-950
                            text-sm font-medium
                            hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30
                            hover:shadow-md transition-all duration-300"
                        >
                            <Image
                                src={skill.image}
                                width={34}
                                height={34}
                                alt={skill.name}
                                className="object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Skill Categories */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-5 rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
                        <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                            Frontend
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            React, Next.js, Tailwind, Redux, TanStack Query
                        </p>
                    </div>

                    <div className="text-center p-5 rounded-2xl border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20">
                        <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                            Backend
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Node.js, Express, Python, Microservices
                        </p>
                    </div>

                    <div className="text-center p-5 rounded-2xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
                        <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                            DevOps
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Docker, AWS, Git, Redis
                        </p>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center mt-8">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        Constantly learning, improving, and adapting to new technologies.
                    </p>
                </div>
            </div>

            {/* Bottom Divider */}
            <div className="mt-5 h-px bg-linear-to-r from-transparent via-gray-300/50 dark:via-gray-700/40 to-transparent" />
        </section>
    );
};

export default Skills;

/* Skills Data */
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
    { name: "TanStack Query", image: "/images/tanstack.png" },
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
