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
        <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[95%] sm:max-w-md z-50">
            <div className="flex justify-around items-center px-2 py-2 bg-gray-200/50 dark:bg-zinc-900/80 backdrop-blur-sm border border-gray-500/10 dark:border-gray-700/50 shadow-2xl rounded-2xl transition-all duration-300 ease-out hover:shadow-3xl">
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
                            className="group relative flex flex-col items-center text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 ease-in-out min-w-[60px]"
                        >
                            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-transparent group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-active:scale-95 transition-all duration-200">
                                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                <span className="relative z-10 group-hover:scale-110 transition-transform duration-200">
                                    {item.icon}
                                </span>
                            </div>

                            <span className="text-[11px] font-semibold tracking-tight text-black dark:text-white">
                                {item.name}
                            </span>

                            {/* Active indicator dot */}
                            <div className="absolute -bottom-1 w-10 h-0.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </Wrapper>
                    );
                })}
            </div>
        </div>
    );
};

export default MenuBar;
