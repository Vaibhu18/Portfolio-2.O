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
        <section className="relative flex justify-center px-4 lg:px-6 overflow-hidden pt-10 py-5 mx-auto">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.15),transparent_60%)]"></div>

            <div className="w-full max-w-6xl relative z-10">
                <div className="relative rounded-3xl overflow-hidden bg-white/70 dark:bg-zinc-900 backdrop-blur-xl border border-gray-200/40 dark:border-gray-800/40 shadow-xl transition-all duration-500">

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-8 sm:p-12 lg:p-16 items-center">

                        {/* LEFT */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                            {/* Profile Image */}
                            <div className="relative group">
                                <div className="absolute -inset-5 bg-linear-to-r from-red-500 via-pink-500 to-blue-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-700"></div>
                                <img
                                    src="/profile1.jpg"
                                    alt="Vaibhav Shinde"
                                    className="relative w-32 h-36 sm:w-40 sm:h-44 rounded-2xl object-cover border-4 border-white dark:border-gray-800 shadow-xl transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Name */}
                            <div className="space-y-2">
                                <h1 className="text-xl sm:text-2xl font-extrabold">
                                    <span className="bg-linear-to-r from-red-500 via-pink-600 to-blue-500 bg-clip-text text-transparent">
                                        Vaibhav Nagnath Shinde
                                    </span>
                                </h1>

                                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                                    Full-Stack Developer
                                </p>

                                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 dark:text-gray-400">
                                    <MapPin className="w-4 h-4" />
                                    <span>Pune, India</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="lg:col-span-2 flex flex-col gap-8 text-center lg:text-left">
                            <div className="space-y-4">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
                                    Crafting{" "}
                                    <span className="bg-linear-to-r from-red-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                                        Digital Experiences {" "}
                                    </span>
                                    That Inspire & Empower
                                </h2>

                                <p className="text-[15px] sm:text-[16px] text-gray-600 dark:text-gray-300 text-start max-w-2xl leading-relaxed">
                                    Full-Stack Developer passionate about crafting high-performance web applications,
                                    real-time systems, and elegant user experiences.
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                {/* Resume */}
                                <a href="/vaibhav.pdf" download className="group">
                                    <button className="flex items-center justify-center gap-2 bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full cursor-pointer">
                                        <Download className="w-5 h-5" />
                                        Download Resume
                                    </button>
                                </a>

                                {/* Contact */}
                                <button
                                    onClick={handleCopy}
                                    className="relative flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                                >
                                    <Mail className="w-5 h-5" />
                                    {copied ? "Email Copied!" : "Contact Me"}

                                    {copied && (
                                        <span className="absolute inset-0 rounded-2xl border border-green-400 bg-green-500/10 animate-pulse" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Divider */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-300/50 dark:via-gray-700/50 to-transparent" />
                </div>
            </div>
        </section>
    );
};

export default Header;
