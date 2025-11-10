"use client";
import { Download, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const Header = () => {
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
        <section className="relative flex justify-center lg:px-5 overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute inset-0 opacity-40"></div>

            <div className="w-full max-w-5xl relative z-10">
                <div className="relative rounded-3xl overflow-hidden transition-all duration-300 pt-5">
                    {/* Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 p-6 sm:p-10 lg:p-14 items-center">
                        {/* LEFT SECTION */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                            {/* Profile Image with Aura */}
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-linear-to-r from-blue-500 via-purple-500 to-red-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
                                <img
                                    src="/profile1.jpg"
                                    alt="Vaibhav Shinde"
                                    className="relative w-28 h-32 sm:w-36 sm:h-40 lg:w-40 lg:h-44 rounded-2xl object-center border-4 border-white dark:border-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Name + Role */}
                            <div className="space-y-2">
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-snug">
                                    <span className="bg-linear-to-tl from-red-400 via-pink-600 to-red-400 bg-clip-text text-transparent">
                                        Vaibhav Shinde
                                    </span>
                                </h1>

                                <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-semibold tracking-wide">
                                    Full-Stack Developer
                                </p>

                                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 dark:text-gray-400">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm sm:text-base">Pune, India</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SECTION */}
                        <div className="lg:col-span-2 text-center lg:text-left flex flex-col gap-8">
                            {/* Title */}
                            <div className="space-y-3">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-snug">
                                    Crafting{" "}
                                    <span className="bg-linear-to-r from-red-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                                        Digital Experiences
                                    </span>{" "}
                                    That Inspire & Empower
                                </h2>

                                <p className="text-[15px] sm:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl text-start lg:mx-0">
                                    Full-Stack Developer focused on delivering impactful solutions and solving complex problems with innovation and precision.
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-2 sm:pt-2 justify-center lg:justify-start">
                                {/* Download Resume */}
                                <a href="/vaibhav.pdf" download="vaibhav.pdf" className="group flex-1 sm:flex-none">
                                    <button className="relative w-full sm:w-auto flex gap-2 items-center justify-center bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                                        <Download className="w-5 h-5" />
                                        Download Resume
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            ↓
                                        </span>
                                    </button>
                                </a>

                                {/* Contact Me */}
                                <button
                                    onClick={handleCopy}
                                    className="relative group flex-1 sm:flex-none flex gap-2 items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                                >
                                    <Mail className="w-5 h-5" />
                                    {copied ? "Email Copied!" : "Contact Me"}
                                    {copied && (
                                        <div className="absolute inset-0 rounded-2xl border border-green-400 bg-green-500/10 animate-pulse" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Subtle gradient divider */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-gray-300/40 dark:via-gray-700/40 to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default Header;
