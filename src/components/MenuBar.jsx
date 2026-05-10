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
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[96%] max-w-105 z-50">
      <div
        className="flex justify-between items-center px-3 py-2 rounded-xl backdrop-blur-md bg-black/80 dark:bg-white/80 border border-white/20 dark:border-white/10 shadow-lg"
      >
        {menuItems.map((item, index) => {
          if (item.external) {
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1 px-2 py-1 text-gray-300 dark:text-gray-800 hover:text-white dark:hover:text-black transition cursor-pointer"
              >
                {item.icon}
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            );
          }

          return (
            <Link
              key={index}
              href={item.href}
              onClick={() => handleClick(item.href)}
              scroll={true}
              className="flex flex-col items-center justify-center gap-1 px-2 py-1 text-gray-300 dark:text-gray-800 hover:text-white dark:hover:text-black transition cursor-pointer"
            >
              {item.icon}
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}

        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex flex-col items-center justify-center gap-1 px-2 py-1 text-gray-300 dark:text-gray-800 hover:text-white dark:hover:text-black transition cursor-pointer"
        >
          {theme === "dark" ? <IoSunny size={18} /> : <IoMoon size={18} />}
          <span className="text-xs font-medium">
            {theme === "dark" ? "Light" : "Dark"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
