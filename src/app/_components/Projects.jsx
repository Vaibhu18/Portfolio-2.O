import { GoDotFill } from "react-icons/go";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from "next/link";

const projects = [
    {
        title: "🧠 Mindful - AI Health Coach",
        desc: `Mindful is an AI-powered journaling and wellness companion that helps users reflect, track moods, and receive personalized coaching using the Gemini API 🤖. It leverages mood-based journaling and conversational AI to guide users toward better mental clarity and wellness 🧘. Built with Next.js and MongoDB, it features secure and seamless authentication with NextAuth.js 🔐.`,
        link: ["https://vcode-mindful.vercel.app/", "https://vcode-mindful.vercel.app/"],
        github: "https://github.com/Vaibhu18/Mindful",
        techs: ["⚛️ Next.js", "🛡️ NextAuth.js", "🟢 MongoDB", "🤖 Gemini API"],
        date: "📅 May 28, 2025",
    },
    {
        title: "🚀 GenPro - AI Productivity Assistant",
        desc: `GenPro is an AI-powered tool that generates complete React applications based on user prompts using the Gemini API 🤖.It intelligently interprets user intent and builds production-ready code in real time 🚀.The generated app is rendered directly within the browser using Sandpack, providing an interactive coding experience 💻.Built with MERN and Next.js 15, it features seamless authentication through Auth.js 🔐.`,
        link: ["https://vcode-genpro.vercel.app/", "https://vcode-genpro.vercel.app/"],
        github: "https://github.com/Vaibhu18/ThinkAI",
        techs: ["⚛️ MERN with Next.js 15", "🧩 SandPack (To Preview Code)", "🔐 Auth.js", "🤖 Gemini API"],
        date: "📅 May 22, 2025",
    },
    {
        title: "🧠 ThinkAI – AI-Powered Search Platform",
        desc: `ThinkAI is an AI-powered search assistant that takes user queries and returns intelligent, context-aware responses in a chat-like format 🤖. It leverages Gemini to understand intent and provide accurate, real-time answers tailored to each prompt 🧠. The interface is clean, responsive, and built for an intuitive user experience 🔍. Developed using MERN with Next.js 15, it features secure authentication powered by Clerk 🔐.`,
        link: ["/images/thinkai.png", "https://vcode-thinkai.vercel.app/"],
        github: "https://github.com/Vaibhu18/ThinkAI",
        techs: ["⚛️ MERN with Next.js 15", "🎨 Tailwind CSS", "🔐 Clerk (Authentication)", "🤖 Gemini API"],
        date: "📅 May 11, 2025",
    },
    {
        title: "🏫 Top Coders Academy",
        link: ["https://tca-vcode.vercel.app/", "https://tca-vcode.vercel.app/"],
        desc: `Top Coders Academy is a mock learning platform where users can make payments to receive a certificates 🎓. It uses Razorpay SDK for secure payment processing and generates personalized certificate data instantly 💳📄. The application is built with Next.js 15 (Fullstack) and styled using Tailwind CSS for a modern UI ⚛️🎨. User authentication is managed with NextAuth.js, and data is validated using Zod 🔐🧪.`,
        github: "https://github.com/Vaibhu18/TCA-Cirtificates",
        techs: [
            "⚛️ Next.js 15 (Frontend & Backend)",
            "🎨 Tailwind CSS",
            "🗃️ MongoDB (Mongoose)",
            "🔐 NextAuth.js (Authentication)",
            "💳 Razorpay SDK (Payments)",
            "🧪 Zod (Validation)"
        ],
        date: "📅 Jan 14, 2025",
    },
    {
        title: "🌐 Personal Portfolio – Developer Showcase",
        link: ["https://vcode-portfolio.vercel.app", "https://vcode-portfolio.vercel.app"],
        desc: `Personal Portfolio is a modern and responsive web app designed to showcase my skills, projects, and professional background 💼🌐. Built using Next.js, it ensures fast performance, and an optimized developer experience ⚡⚛️. The design is clean and fully responsive, making it accessible across all devices 📱💻. Developed with NEXTJS, Tailwind CSS, React, it blends functionality with aesthetics seamlessly 🎨🧱.`,
        github: "https://github.com/Vaibhu18/Portfolio-2.O",
        techs: ["🧱 HTML", "🎨 CSS", "📜 JavaScript", "⚛️ React.js"],
        date: "📅 Jan 13, 2025",
    },
];


const Projects = () => {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 mt-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                🚀 My Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700
                bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg
                shadow-lg hover:shadow-2xl hover:border-blue-400
                transition-all duration-300 transform hover:-translate-y-2"
                    >
                        {/* Project Preview */}
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


                        {/* Project Content */}
                        <div className="p-5 sm:p-6 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-1">
                                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h2>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">{project.date}</span>
                                </div>

                                <p className="text-sm sm:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
                                    {project.desc}
                                </p>

                                {/* Tech Tags */}
                                <ul className="flex flex-wrap gap-2">
                                    {project.techs.map((tech, i) => (
                                        <li
                                            key={i}
                                            className="text-xs sm:text-sm border border-blue-500 dark:border-blue-400
                                    bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300
                                    rounded-full px-3 py-1 flex items-center gap-1.5
                                    hover:bg-blue-500 dark:hover:bg-blue-400
                                    hover:text-white dark:hover:text-gray-900
                                    transition-all duration-300"
                                        >
                                            <GoDotFill className="text-[8px]" /> {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Buttons */}
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
