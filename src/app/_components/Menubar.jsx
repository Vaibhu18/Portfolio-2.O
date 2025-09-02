'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiSun } from "react-icons/fi";
import { useTheme } from 'next-themes';
import { AiOutlineHome, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbBrandLeetcode } from "react-icons/tb";
import { IoMdMoon } from "react-icons/io";
import { motion } from "framer-motion";

const Menubar = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const menuItems = [
        { href: "/", icon: <AiOutlineHome size={20} />, label: "Home", hover: "hover:text-blue-500" },
        { href: "https://github.com/Vaibhu18", icon: <AiFillGithub size={20} />, label: "GitHub", hover: "hover:text-gray-800" },
        { href: "https://www.linkedin.com/in/vaibhav-shinde-b3b782238", icon: <AiFillLinkedin size={20} className="text-blue-500" />, label: "LinkedIn", hover: "hover:text-blue-600" },
        { href: "https://leetcode.com/u/Vaibhav8605/", icon: <TbBrandLeetcode size={20} className="text-orange-500" />, label: "Leetcode", hover: "hover:text-orange-500" },
    ];

    // Parent container animation (stagger children)
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12,
                staggerChildren: 0.1, // delay between items
            },
        },
    };

    // Child item animation
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-[350px] md:w-[400px] mx-auto fixed bottom-2 left-0 right-0 flex justify-between gap-4 py-2 px-6
                 shadow-[0px_0px_8px_0.5px_rgba(0,0,0,0.3)]
                 dark:shadow-[0px_0px_8px_0.5px_rgba(255,255,255,0.3)]
                 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-md
                 border border-gray-200 dark:border-gray-700"
        >
            {menuItems.map((item, i) => (
                <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    variants={itemVariants}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex flex-col justify-between items-center gap-1 ${item.hover} transition-colors duration-300`}
                >
                    {item.icon}
                    <span className="text-[10px] font-semibold">{item.label}</span>
                </motion.a>
            ))}

            {/* Theme Toggle */}
            <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="flex flex-col justify-between items-center transition-colors duration-300"
            >
                {resolvedTheme === "dark"
                    ? <FiSun size={20} className="text-yellow-400" />
                    : <IoMdMoon size={20} className="text-black dark:text-white" />}
                <span className="text-[10px] font-semibold">
                    {resolvedTheme === "dark" ? "Light" : "Dark"}
                </span>
            </motion.button>
        </motion.div>
    );
};

export default Menubar;
