"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import { FaHome, FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoSunny, IoMoon } from "react-icons/io5";

const menuItems = [
  {
    icon: <FaHome size={18} />,
    label: "Home",
    href: "/",
    external: false,
  },
  {
    icon: <FaBriefcase size={18} />,
    label: "Projects",
    href: "/projects",
    external: false,
  },
  {
    icon: <FaGithub size={18} />,
    label: "Github",
    href: "https://github.com/Vaibhu18",
    external: true,
  },
  {
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vaibhu18",
    external: true,
  },
  {
    icon: <SiLeetcode size={18} />,
    label: "LeetCode",
    href: "https://leetcode.com/vaibhu18/",
    external: true,
  },
];

const MenuBar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch for next-themes
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderItem = (icon, label, isActive) => (
    <div
      className={`
        relative flex flex-col items-center justify-center gap-0.5
        py-2 md:py-2 mx-0 md:mx-1 rounded-xl
        text-gray-700 dark:text-gray-300 w-full
        transition-all duration-300 ease-out
        hover:scale-[1.08] active:scale-95
        hover:text-black dark:hover:text-white
        ${
          isActive
            ? "bg-white/40 dark:bg-white/15 text-black dark:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_2px_10px_rgba(0,0,0,0.15)]"
            : "hover:bg-white dark:hover:bg-white/10"
        }
      `}
    >
      {icon}
      <span className="text-[10px] md:text-[12px] font-medium tracking-tight whitespace-nowrap">
        {label}
      </span>
    </div>
  );

  return (
    <div className="fixed bottom-1 left-1/2 -translate-x-1/2 w-[calc(100%-0rem)] md:w-full max-w-lg z-50">
      <div
        className="
          relative flex items-center justify-between overflow-hidden
          rounded-xl
          bg-gradient-to-b
        from-zinc-50 via-zinc-100 to-zinc-200
        dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-950
          backdrop-blur-2xl backdrop-saturate-[180%]
          shadow-[0_8px_30px_-6px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.15)] p-1
        "
      >
        {/* Glass Effects */}
        <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent" />
        <div className="pointer-events-none absolute -top-10 -left-10 w-32 h-32 rounded-full bg-white/25 blur-3xl opacity-40 dark:opacity-20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/10 to-transparent" />

        {menuItems.map((item) => {
          const isActive = !item.external && pathname === item.href;

          if (item.external) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center"
              >
                {renderItem(item.icon, item.label, false)}
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex-1 flex justify-center"
            >
              {renderItem(item.icon, item.label, isActive)}
            </Link>
          );
        })}

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="
            flex-1
            relative flex flex-col items-center justify-center gap-0.5
            py-2 md:py-2.5 mx-0 md:mx-1 rounded-xl
            text-gray-700 dark:text-gray-300
            transition-all duration-300 ease-out
            hover:scale-[1.08] active:scale-95
            hover:bg-white dark:hover:bg-white/10
            hover:text-black dark:hover:text-white
          "
        >
          {mounted && theme === "dark" ? (
            <IoSunny size={18} />
          ) : (
            <IoMoon size={18} />
          )}
          <span className="text-[10px] md:text-[11px] font-medium tracking-tight whitespace-nowrap">
            {mounted && theme === "dark" ? "Light" : "Dark"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
