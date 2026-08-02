"use client";

import React from "react";
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

  const renderItem = (icon, label, isActive) => (
    <div
      className={`
        relative flex flex-col items-center justify-center gap-0.5
        py-3 px-2 mx-1 rounded-2xl
        text-gray-700 dark:text-gray-200
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

      <span className="text-[11px] font-medium tracking-tight">{label}</span>
    </div>
  );

  return (
    <div className="fixed bottom-0 md:bottom-5 left-1/2 -translate-x-1/2 w-full max-w-md px-3 md:px-0 z-50">
      <div
        className="
          relative flex items-center overflow-hidden
          rounded-[26px] md:rounded-[28px]
          border border-white/25 dark:border-black/10
          bg-gradient-to-b
          from-white/20 via-white/10 to-white/[0.04]
          dark:from-black/40 dark:via-black/25 dark:to-black/10
          backdrop-blur-2xl backdrop-saturate-[180%]
          shadow-[0_8px_30px_-6px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.15)] p-1
        "
      >
        {/* Glass Effects */}
        <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

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
                className="flex-1"
              >
                {renderItem(item.icon, item.label, false)}
              </a>
            );
          }

          return (
            <Link key={item.label} href={item.href} className="flex-1">
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
            py-3 mx-1 rounded-2xl
            text-gray-700 dark:text-gray-200
            transition-all duration-300 ease-out
            hover:scale-[1.08] active:scale-95
            hover:bg-white dark:hover:bg-white/10
            hover:text-black dark:hover:text-white
          "
        >
          {theme === "dark" ? <IoSunny size={18} /> : <IoMoon size={18} />}

          <span className="text-[11px] font-medium tracking-tight">
            {theme === "dark" ? "Light" : "Dark"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
