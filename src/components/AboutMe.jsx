"use client";
import React from "react";

const AboutMe = () => {
    return (
        <section className="relative w-full sm:w-[85vw] md:w-[75vw] mx-auto px-2 sm:px-4 pt-5">

            {/* Subtle background glow */}
            <div className="absolute -inset-4 bg-linear-to-r from-red-500/5 via-pink-500/5 to-blue-500/5 blur-3xl rounded-3xl" />

            <div className="relative bg-white/70 dark:bg-zinc-900 backdrop-blur-xl rounded-md border border-gray-200/40 dark:border-gray-800/40 p-4 sm:p-8 shadow-lg transition-all duration-300">

                {/* Heading */}
                <div className="mb-5">
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        About Me
                    </h1>
                    <div className="mt-2 h-1 w-14 rounded-full bg-linear-to-r from-red-500 via-pink-500 to-blue-500" />
                </div>

                {/* Paragraph */}
                <p className="font-medium text-gray-600 dark:text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                    Full-Stack Developer with a strong foundation in Computer Science,
                    programming, and problem-solving. Skilled in designing and developing
                    scalable applications, integrating databases, and building APIs.
                    Passionate about applying technical expertise to real-world challenges
                    while continuously learning and adapting to emerging technologies.
                    Committed to contributing to innovative projects and delivering
                    impactful solutions across both frontend and backend development.
                </p>
            </div>

            {/* Bottom divider */}
            <div className="mt-5 h-px bg-linear-to-r from-transparent via-gray-300/50 dark:via-gray-700/40 to-transparent" />
        </section>
    );
};

export default AboutMe;
