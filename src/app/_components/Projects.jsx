import { GoDotFill } from "react-icons/go";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from "next/link";

const projects = [
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
            <h1 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white">
                🚀 My Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border rounded-bl-lg rounded-br-lg border-gray-200 dark:border-gray-700 shadow-md dark:shadow-lg bg-[#f4f8ff] dark:bg-[#151c27] hover:shadow-xl transition-all duration-300"
                    >
                        {/* Project Preview */}
                        <div className="w-full h-[200px] overflow-hidden relative bg-black">
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
                        </div>

                        {/* Project Content */}
                        <div className="min-h-[150px] p-5 flex flex-col justify-between">
                            <div>
                                <div className='flex justify-between mb-4'>
                                    <h1 className='text-base font-semibold text-gray-900 dark:text-white'>{project.title}</h1>
                                    <h1 className="text-sm text-gray-500 dark:text-gray-400">{project.date}</h1>
                                </div>

                                <div className='flex justify-between mb-4'>
                                    <p className="text-[13.5px]">{project.desc}</p>
                                </div>

                                {/* Tech Tags */}
                                <ul className="flex flex-wrap gap-2 mb-5">
                                    {project.techs.map((tech, i) => (
                                        <li
                                            key={i}
                                            className="text-xs border border-blue-500 dark:border-blue-400 
                                                    bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 
                                                    rounded-full px-3 py-1 flex items-center gap-1.5
                                                    hover:bg-blue-500 dark:hover:bg-blue-400 
                                                    hover:text-white dark:hover:text-gray-900 
                                                            transition-all"
                                        >
                                            <GoDotFill className="text-[8px]" /> {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3">
                                <Link
                                    href={project.link[1]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                                >
                                    <FaGlobe className="text-[14px]" /> Live Demo
                                </Link>

                                <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-900 rounded-lg transition"
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
