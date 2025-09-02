import { GoDotFill } from "react-icons/go";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import Link from "next/link";

const projects = [
    {
        title: "Mindful - AI Health Coach",
        features: [
            "AI-powered journaling & wellness tracking",
            "Mood-based journaling with personalized coaching",
            "Built with Next.js, MongoDB & NextAuth.js",
            "Gemini API for conversational AI guidance"
        ],
        link: ["https://vcode-mindful.vercel.app/", "https://vcode-mindful.vercel.app/"],
        github: "https://github.com/Vaibhu18/Mindful",
        techs: ["⚛️ Next.js", "🛡️ NextAuth.js", "🟢 MongoDB", "🤖 Gemini API"],
        date: "📅 May 28, 2025",
    },
    {
        title: "GenPro - AI Productivity Assistant",
        features: [
            "Generates complete React apps from user prompts",
            "Interactive preview with Sandpack",
            "Built with MERN + Next.js 15",
            "Seamless authentication using Auth.js"
        ],
        link: ["https://vcode-genpro.vercel.app/", "https://vcode-genpro.vercel.app/"],
        github: "https://github.com/Vaibhu18/ThinkAI",
        techs: ["⚛️ MERN with Next.js 15", "🧩 SandPack", "🔐 Auth.js", "🤖 Gemini API"],
        date: "📅 May 22, 2025",
    },
    {
        title: "ThinkAI – AI-Powered Search Platform",
        features: [
            "Context-aware intelligent search responses",
            "Built with MERN + Next.js 15",
            "Clean, responsive UI with Tailwind",
            "Authentication powered by Clerk"
        ],
        link: ["/images/thinkai.png", "https://vcode-thinkai.vercel.app/"],
        github: "https://github.com/Vaibhu18/ThinkAI",
        techs: ["⚛️ MERN with Next.js 15", "🎨 Tailwind CSS", "🔐 Clerk", "🤖 Gemini API"],
        date: "📅 May 11, 2025",
    },
    // {
    //     title: "🏫 Top Coders Academy",
    //     features: [
    //         "Mock learning platform with payments",
    //         "Razorpay SDK for secure transactions",
    //         "Built with Next.js Fullstack + Tailwind",
    //         "Certificates generated instantly"
    //     ],
    //     link: ["https://tca-vcode.vercel.app/", "https://tca-vcode.vercel.app/"],
    //     github: "https://github.com/Vaibhu18/TCA-Cirtificates",
    //     techs: [
    //         "⚛️ Next.js 15",
    //         "🎨 Tailwind CSS",
    //         "🗃️ MongoDB",
    //         "🔐 NextAuth.js",
    //         "💳 Razorpay SDK",
    //         "🧪 Zod"
    //     ],
    //     date: "📅 Jan 14, 2025",
    // },
    // {
    //     title: "🌐 Personal Portfolio – Developer Showcase",
    //     features: [
    //         "Modern and responsive developer portfolio",
    //         "Showcases skills, projects & background",
    //         "Built with Next.js, React & Tailwind",
    //         "Clean design, optimized for all devices"
    //     ],
    //     link: ["https://vcode-portfolio.vercel.app", "https://vcode-portfolio.vercel.app"],
    //     github: "https://github.com/Vaibhu18/Portfolio-2.O",
    //     techs: ["🧱 HTML", "🎨 CSS", "📜 JavaScript", "⚛️ React.js"],
    //     date: "📅 Jan 13, 2025",
    // },
];


const Projects = () => {
    return (
        <section className="w-full max-w-[1000px] mx-auto px-4 mt-16">
            <h1 className="text-2xl font-semibold mb-5">
                Featured Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((project, index) => (
                    <div key={index}
                        className="group relative rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-950 backdrop-blur-lg shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                        <div className="relative w-full h-[200px] md:h-[220px] overflow-hidden">
                            <iframe
                                src={project.link[0]}
                                title={project.title}
                                loading="lazy"
                                className="absolute top-0 left-0 border-b-4 border-blue-500"
                                style={{
                                    transform: `scale(0.25)`,
                                    transformOrigin: "top left",
                                    width: "400%",
                                    height: "400%",
                                }}
                            ></iframe>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        </div>

                        <div className="p-5 sm:p-6 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-1">
                                    <h2 className="text-lg  font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h2>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">{project.date}</span>
                                </div>

                                <p className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-400">Key Features:</p>
                                <ul className="space-y-1.5 mb-5">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-800 dark:text-gray-300">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-400">Technologies:</p>
                                <ul className="flex flex-wrap gap-2">
                                    {project.techs.map((tech, i) => (
                                        <li key={i} className="text-xs font-medium border dark:border-gray-700 px-3 py-1 rounded-md">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-6">
                                <Link
                                    href={project.link[1]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
                                >
                                    <FaGlobe className="text-[14px]" /> Live
                                </Link>

                                <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all"
                                >
                                    <FaGithub className="text-[14px]" /> Source Code
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
