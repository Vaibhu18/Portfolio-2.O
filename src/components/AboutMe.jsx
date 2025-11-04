"use client";
import React from "react";

const AboutMe = () => {
    return (
        <section className="w-full sm:w-[85vw] md:w-[65vw] mx-auto px-3 pt-10">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
            </h1>

            {/* Paragraph */}
            <p className="font-medium text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed">
                Full-Stack Developer with a strong foundation in Computer Science,
                programming, and problem-solving. Skilled in designing and developing
                scalable applications, integrating databases, and building APIs.
                Passionate about applying technical expertise to real-world challenges
                while continuously learning and adapting to emerging technologies.
                Committed to contributing to innovative projects and delivering
                impactful solutions across both frontend and backend development.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-gray-300/50 dark:via-gray-700/40 to-transparent"></div>
        </section>
    );
};

export default AboutMe;
