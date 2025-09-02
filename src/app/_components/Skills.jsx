"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <div className="w-[100vw] sm:w-[85vw] md:w-[65vw] mx-auto px-2 mt-12">
            <motion.h1
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl font-bold mb-2 text-gray-900 dark:text-white"
            >
                Skills
            </motion.h1>

            <motion.div
                className="flex flex-wrap gap-3"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.08, // delay for each child
                        },
                    },
                }}
            >
                {skills.map((skill, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8, y: 20 },
                            show: { opacity: 1, scale: 1, y: 0 },
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
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
                    </motion.span>
                ))}
            </motion.div>
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
