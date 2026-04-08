"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Home, Github, Linkedin, Code2, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const MenuBar = () => {
  const { theme, setTheme } = useTheme();
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    {
      name: "Home",
      icon: <Home className="w-5 h-5" />,
      href: "/",
      color: "from-violet-600 to-indigo-600",
      glow: "shadow-[0_8px_28px_rgba(124,58,237,0.6)]",
    },
    {
      name: "Github",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Vaibhu18",
      color: "from-gray-700 to-gray-900",
      glow: "shadow-[0_8px_28px_rgba(55,65,81,0.6)]",
    },
    {
      name: "Linkedin",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/vaibhu18",
      color: "from-sky-500 to-blue-600",
      glow: "shadow-[0_8px_28px_rgba(14,165,233,0.6)]",
    },
    {
      name: "Leetcode",
      icon: <Code2 className="w-5 h-5" />,
      href: "https://leetcode.com/Vaibhav-dev18",
      color: "from-amber-500 to-orange-500",
      glow: "shadow-[0_8px_28px_rgba(245,158,11,0.6)]",
    },
    {
      name: theme === "light" ? "Dark" : "Light",
      icon:
        theme === "light" ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        ),
      action: () => setTheme(theme === "light" ? "dark" : "light"),
      color: "from-purple-500 to-fuchsia-600",
      glow: "shadow-[0_8px_28px_rgba(168,85,247,0.6)]",
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[440px] z-50 font-sans">
      {/* Outer Glow */}
      <div className="absolute -inset-[3px] rounded-[30px] blur-[18px] bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-pink-500/20 animate-pulse" />

      {/* Dock */}
      <div
        className="relative z-10 flex items-center justify-around px-3 pt-2 rounded-[20px]
        bg-black/60 border border-white/10 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.55)]
      "
      >
        {menuItems.map((item, index) => {
          const isThemeToggle = !!item.action;
          const showSeparatorBefore = index === menuItems.length - 1;

          const inner = (
            <>
              {/* Tooltip */}
              <span
                className="absolute -top-10 left-1/2 -translate-x-1/2 text-[11px] font-semibold px-3 py-1 rounded-md
                bg-black/90 text-white/90 border border-white/10 opacity-0 group-hover:opacity-100
                translate-y-1 group-hover:translate-y-0 transition-all duration-150 whitespace-nowrap backdrop-blur"
              >
                {item.name}
              </span>

              {/* Icon */}
              <div
                className={`
                  relative w-11 h-11 flex items-center justify-center rounded-xl overflow-hidden
                  bg-gradient-to-br ${item.color}
                  transition-all duration-200
                  ${hoveredItem === item.name ? item.glow : "shadow-md"}
                `}
              >
                <div className="absolute top-1 left-1 w-8 h-3 bg-white/20 rounded-full" />
                <div className="relative z-10 text-white">{item.icon}</div>
              </div>

              {/* Label */}
              <span className="text-[10px] font-semibold text-white/60 group-hover:text-white transition">
                {item.name}
              </span>

              {/* Dot */}
              <span className="w-1 h-1 rounded-full bg-transparent group-hover:bg-white/50 transition" />
            </>
          );

          return (
            <React.Fragment key={item.name}>
              {showSeparatorBefore && (
                <div className="w-[1px] h-9 bg-white/10 rounded shrink-0" />
              )}

              {isThemeToggle ? (
                <button
                  onClick={item.action}
                  className="group relative flex flex-col items-center gap-1 min-w-[54px] p-1 rounded-xl
                    transition-transform duration-200 hover:-translate-y-1 hover:scale-100 active:scale-95"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {inner}
                </button>
              ) : (
                <Link
                  href={item.href}
                  target={item.href?.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    item.href?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group relative flex flex-col items-center gap-1 min-w-[54px] p-1 rounded-xl
                    transition-transform duration-200 hover:-translate-y-1 hover:scale-100 active:scale-95"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {inner}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default MenuBar;
