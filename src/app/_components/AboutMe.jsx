"use client"
import React from "react";

const AboutMe = () => {
    return (
        <div className="w-[100vw] sm:w-[85vw] md:w-[65vw] mx-auto px-2 mt-8">
            <h1 className="text-xl font-semibold mb-2">
                About
            </h1>

            <p className="font-medium text-gray-600 dark:text-[#9a9999] text-[15px] md:text-[16px] leading-relaxed">
                Full-Stack Developer with a strong foundation in Computer Science,
                programming, and problem-solving. Skilled in designing and developing
                scalable applications, integrating databases, and building APIs.
                Passionate about applying technical expertise to real-world challenges
                while continuously learning and adapting to emerging technologies.
                Committed to contributing to innovative projects and delivering
                impactful solutions across both frontend and backend development.
            </p>
        </div>
    );
};

export default AboutMe;
