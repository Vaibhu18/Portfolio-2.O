"use client";

import React from "react";
import { FaHome, FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MenuBar = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const handleClick = (href) => {
    router.push(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuItems = [
    { icon: <FaHome size={18} />, label: "Home", href: "/", external: false },
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

  return (
    <div className="fixed bottom-0 md:bottom-3 left-1/2 -translate-x-1/2 w-full max-w-md z-50">
      <div className="flex items-center backdrop-blur-xl bg-black/70 dark:bg-white/70 border border-white/10 rounded-tl-2xl rounded-tr-2xl md:rounded-2xl shadow-xl overflow-hidden">
        {menuItems.map((item, index) => {
          const baseClass =
            "flex flex-1 flex-col items-center justify-center py-3 text-gray-300 dark:text-gray-900 hover:text-white dark:hover:text-black transition";

          if (item.external) {
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseClass}
              >
                {item.icon}
                <span className="text-[12px] mt-1">{item.label}</span>
              </a>
            );
          }

          return (
            <Link
              key={index}
              href={item.href}
              onClick={() => handleClick(item.href)}
              className={baseClass}
            >
              {item.icon}
              <span className="text-[12px] mt-1">{item.label}</span>
            </Link>
          );
        })}

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex flex-1 flex-col items-center justify-center py-2 text-gray-300 dark:text-gray-900 hover:text-white dark:hover:text-black transition"
        >
          {theme === "dark" ? <IoSunny size={18} /> : <IoMoon size={18} />}
          <span className="text-[12px] mt-1">
            {theme === "dark" ? "Light" : "Dark"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
