"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LuDownload } from "react-icons/lu";
import { GoMail, GoCheckCircle } from "react-icons/go";

const HeroSection = () => {
  const fullText = "Hi, I'm Vaibhav Shinde";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Improved Typewriter Effect
  useEffect(() => {
    let timeout;
    if (index < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 90);
    } else {
      timeout = setTimeout(() => {
        setTypedText("");
        setIndex(0);
      }, 3500); // Increased pause at the end so it's readable before resetting
    }

    return () => clearTimeout(timeout);
  }, [index, fullText]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("vcode.dev18@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="relative w-full flex items-center min-h-[80vh] px-6 sm:px-12 lg:px-20 bg-white dark:bg-neutral-950 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-neutral-100 dark:from-neutral-900 to-transparent opacity-50 pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-8 py-20 relative z-10">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-center md:text-left flex-1">
          {/* Status Badge */}
          <div className="flex justify-center md:justify-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-600 dark:text-neutral-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium tracking-wide">
                Full Stack Developer
              </span>
            </div>
          </div>

          {/* Heading with Typewriter */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
              <span className="bg-linear-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="animate-pulse text-neutral-400 dark:text-neutral-600 font-light">
                |
              </span>
            </h1>

            <p className="text-neutral-600 dark:text-neutral-300 text-[15px] sm:text-base leading-relaxed max-w-sm mx-auto md:mx-0 dark:font-light">
              Building clean, scalable web apps with a focus on performance and
              developer experience.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-2 justify-center md:justify-start">
            <a
              href="/vaibhav.pdf"
              download
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-neutral-900 text-white dark:bg-neutral-50 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-lg shadow-neutral-900/20 dark:shadow-white/10 transition-all duration-300 active:scale-95"
            >
              <LuDownload
                size={18}
                className="group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              Download CV
            </a>

            <button
              onClick={handleCopy}
              disabled={copied}
              className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl border transition-all duration-300 active:scale-95
                ${
                  copied
                    ? "border-emerald-500/50 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700"
                }`}
            >
              {copied ? (
                <GoCheckCircle size={18} className="text-emerald-500" />
              ) : (
                <GoMail
                  size={18}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              )}
              <span className="min-w-[5rem] text-center">
                {copied ? "Copied!" : "Contact Me"}
              </span>
            </button>
          </div>
        </div>

        {/* Right Content / Image */}
        <div className="shrink-0 flex justify-center md:justify-end flex-1">
          <div className="relative group">
            {/* Background Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              <Image
                src="/vaibhav.jpeg"
                alt="Vaibhav Shinde"
                fill
                sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                className="rounded-2xl object-cover shadow-xl shadow-black/5 dark:shadow-white/5 ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-500 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
