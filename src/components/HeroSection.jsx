"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LuDownload } from "react-icons/lu";
import { GoMail } from "react-icons/go";

const HeroSection = () => {
  const fullText = "Vaibhav Shinde";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (index < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 80);
    } else {
      timeout = setTimeout(() => {
        setTypedText("");
        setIndex(0);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [index]);

  const [copied, setCopied] = useState(false);

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
    <section className="w-full flex items-center px-6 sm:px-12 lg:px-20 bg-white dark:bg-neutral-950">
      <div className="w-full max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 py-20">
        <div className="flex flex-col gap-5 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
              Full Stack Developer
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight font-space">
              Hi, I'm{" "}
              <span className="text-neutral-700 dark:text-neutral-300">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
              .
            </h1>
          </div>

          <p className="text-neutral-600 dark:text-neutral-300 text-[15px] sm:text-base leading-relaxed max-w-sm mx-auto md:mx-0 dark:font-light">
            Building clean, scalable web apps with a focus on performance and
            developer experience.
          </p>

          <div className="flex gap-3 mt-1 justify-center md:justify-start">
            <a
              href="/vaibhav.pdf"
              download
              className=" px-5 py-2.5 text-[13px] font-medium rounded-lg bg-neutral-900 text-white dark:bg-neutral-50 dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors duration-150"
            >
              <span className="flex items-center gap-1">
                <LuDownload size={18} />
                Download CV
              </span>
            </a>

            <button
              onClick={handleCopy}
              className=" px-5 py-2.5 text-[13px] font-medium rounded-lg border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-150"
            >
              <span className="flex items-center gap-1">
                <GoMail size={17} />
                {copied ? "Email Copied!" : "Contact Me"}
              </span>
            </button>
          </div>
        </div>

        <div className="shrink-0 flex justify-center md:justify-end">
          <div className="relative">
            <Image
              src="/profile.jpg"
              alt="Vaibhav Shinde"
              width={220}
              height={220}
              className=" rounded-md object-cover ring-1 ring-neutral-200 dark:ring-neutral-800 shadow-sm "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
