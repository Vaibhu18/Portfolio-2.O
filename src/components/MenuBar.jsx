"use client";
import React from "react";
import Link from "next/link";
import { Home, Github, Linkedin, Code2, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const MenuBar = () => {
    const { theme, setTheme } = useTheme();

    const menuItems = [
        { name: "Home", icon: <Home className="w-5 h-5" />, href: "/" },
        { name: "Github", icon: <Github className="w-5 h-5" />, href: "https://github.com/Vaibhu18" },
        { name: "Linkedin", icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/vaibhu18" },
        { name: "Leetcode", icon: <Code2 className="w-5 h-5" />, href: "https://leetcode.com/Vaibhav-dev18" },
        {
            name: theme === "light" ? "Dark" : "Light",
            icon: theme === "light" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />,
            action: () => setTheme(theme === "light" ? "dark" : "light"),
        },
    ];

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:max-w-md z-50">

            {/* Dock */}
            <div className="relative flex justify-between items-center px-4 py-3
                bg-white/75 dark:bg-zinc-900/75 backdrop-blur-xl
                border border-gray-200/50 dark:border-gray-700/40
                rounded-3xl
                shadow-[0_15px_50px_rgba(0,0,0,0.28)]
                transition-all duration-300">

                {/* Soft outer glow */}
                <div className="pointer-events-none absolute -inset-1 rounded-3xl
                    bg-linear-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15
                    blur-xl -z-10" />

                {menuItems.map((item) => {
                    const isThemeToggle = !!item.action;
                    const Wrapper = isThemeToggle ? "button" : Link;
                    const props = isThemeToggle
                        ? { onClick: item.action, type: "button" }
                        : {
                            href: item.href,
                            target: item.href?.startsWith("http") ? "_blank" : "_self",
                        };

                    return (
                        <Wrapper
                            key={item.name}
                            {...props}
                            className="group relative flex flex-col items-center gap-1
                            min-w-14
                            text-[11px] font-semibold tracking-tight
                            text-gray-600 dark:text-gray-300
                            hover:text-blue-600 dark:hover:text-blue-400
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60
                            transition-colors"
                        >
                            {/* Icon bubble */}
                            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl
                                bg-transparent
                                group-hover:bg-blue-50 dark:group-hover:bg-blue-900/25
                                transition-all duration-300
                                group-active:scale-95">

                                {/* Inner glow */}
                                <div className="absolute inset-0 rounded-2xl
                                    bg-linear-to-br from-blue-500/25 to-purple-500/25
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                                    {item.icon}
                                </span>
                            </div>

                            {/* Label */}
                            <span className="text-black dark:text-white">
                                {item.name}
                            </span>

                            {/* Indicator */}
                            <span className="absolute -bottom-1 h-1 w-6 rounded-full
                                bg-linear-to-r from-blue-500 to-purple-500
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Wrapper>
                    );
                })}
            </div>
        </div>
    );
};

export default MenuBar;
