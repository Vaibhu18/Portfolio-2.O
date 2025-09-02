"use client"
import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <motion.div
            className="w-[100vw] sm:w-[85vw] md:w-[65vw] mx-auto px-2 mt-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <motion.h1
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                About
            </motion.h1>

            <motion.p
                className="font-medium text-gray-600 dark:text-[#9a9999] text-[15px] md:text-[16px] leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                Full-Stack Developer with a strong foundation in Computer Science,
                programming, and problem-solving. Skilled in designing and developing
                scalable applications, integrating databases, and building APIs.
                Passionate about applying technical expertise to real-world challenges
                while continuously learning and adapting to emerging technologies.
                Committed to contributing to innovative projects and delivering
                impactful solutions across both frontend and backend development.
            </motion.p>
        </motion.div>
    );
};

export default AboutMe;
