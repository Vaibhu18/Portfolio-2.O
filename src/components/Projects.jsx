"use client";
import Link from "next/link";
import { Globe, Github, Dot } from "lucide-react";
import React from "react";
import { PROJECTS } from "@/lib/projects";

const Projects = () => {
    return (
        <section className="relative w-full overflow-hidden sm:w-[85vw] md:w-[75vw] mx-auto px-2 sm:px-4 pt-5">

            {/* Background glow */}
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-3xl rounded-md" />

            <div className="relative bg-white/70 dark:bg-zinc-900 backdrop-blur-xl rounded-md border border-gray-200/40 dark:border-gray-800/40 p-1 sm:p-8 shadow-lg">

                {/* Section Title */}
                <div className="mb-4 p-5">
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Featured Projects
                    </h1>
                    <div className="mt-2 h-1 w-16 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 lg:columns-2 gap-4 space-y-4">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            className="break-inside-avoid group relative overflow-hidden rounded-md
                            border border-gray-200 dark:border-gray-700
                            bg-white/90 dark:bg-gray-950/80
                            shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            {/* Project Preview */}
                            <div className="relative w-full h-[210px] overflow-hidden">
                                <iframe src={project.link[0]} title={project.title} loading="lazy" className="absolute top-0 left-0" style={{ transform: "scale(0.25)", transformOrigin: "top left", width: "400%", height: "400%", }} ></iframe>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                <span className="absolute bottom-3 left-3 text-xs font-medium px-2.5 py-1 rounded-md bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-all">
                                    Live Preview
                                </span>
                            </div>

                            {/* Project Info */}
                            <div className="p-5 sm:p-7 flex flex-col">

                                {/* Title & Date */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-1">
                                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h2>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {project.date}
                                    </span>
                                </div>

                                {/* Features */}
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-400 mb-2">
                                    Key Features
                                </p>
                                <ul className="space-y-2 mb-5">
                                    {project.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2 text-sm text-gray-800 dark:text-gray-300"
                                        >
                                            <Dot className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Technologies */}
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-400 mb-2">
                                    Technologies
                                </p>
                                <ul className="flex flex-wrap gap-2">
                                    {project.techs.map((tech, i) => (
                                        <li
                                            key={i}
                                            className="text-xs font-medium px-3 py-1.5 rounded-lg
                                            border border-gray-300 dark:border-gray-700
                                            bg-gray-50 dark:bg-gray-900
                                            text-gray-800 dark:text-gray-200
                                            hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30
                                            transition-colors"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3 mt-6">
                                    <Link
                                        href={project.link[1]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium
                                        bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600
                                        text-white rounded-xl shadow-md hover:shadow-lg transition-all"
                                    >
                                        <Globe size={14} />
                                        Live Demo
                                    </Link>

                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium
                                        bg-gray-900 hover:bg-gray-800 text-white
                                        dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-900
                                        rounded-xl shadow-md hover:shadow-lg transition-all"
                                    >
                                        <Github size={14} />
                                        Source Code
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom divider */}
            <div className="mt-5 h-px bg-linear-to-r from-transparent via-gray-300/50 dark:via-gray-700/40 to-transparent" />
        </section>
    );
};

export default Projects;
