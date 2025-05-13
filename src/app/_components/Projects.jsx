import { GoDotFill } from "react-icons/go";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from "next/link";

const projects = [
    {
        title: "ThinkAI (DeepSeek Clone)",
        link: ["/images/thinkai.png", "https://vcode-thinkai.vercel.app/"],
        github: "https://github.com/Vaibhu18/ThinkAI",
        techs: ["MERN with NextJS 15 ", "Tailwind CSS", "Clerk (Authentication)", "Gemini API"],
        date: "May 11, 2025"
    },
    {
        title: "Top Coders Academy",
        link: ["https://tca-vcode.vercel.app/", "https://tca-vcode.vercel.app/"],
        github: "https://github.com/Vaibhu18/TCA-Cirtificates",
        techs: ["Next.js 15 (Frontend & Backend)", "Tailwind CSS", "MongoDB (Mongoose)", "NextAuth.js (Authentication)", "Razorpay SDK (Payments)", "Zod (Validation)"],
        date: "Jan 14, 2025"
    },
    {
        title: "Personal Portfolio",
        link: ["https://vcode-portfolio.vercel.app", "https://vcode-portfolio.vercel.app"],
        github: "https://github.com/Vaibhu18/Portfolio-2.O",
        techs: ["HTML", "CSS", "JavaScript", "React.js"],
        date: "Jan 13, 2025"
    },

];

const Projects = () => {
    return (
        <section className="w-full sm:w-[85%] md:w-[70%] mx-auto px-4 mt-12">
            <h1 className="text-2xl font-bold mb-8 text-center">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 dark:border-gray-700 
                        rounded-2xl overflow-hidden shadow-lg 
                        bg-[#e5f0ff] dark:bg-[#151c27]
                        transition-all hover:scale-[1.01] 
                        hover:shadow-xl hover:shadow-gray-200/50 
                        dark:hover:shadow-black/30"
                    >
                        <div className="w-full h-[200px] overflow-hidden relative">
                            <iframe
                                src={project.link[0]}
                                title={project.title}
                                className="absolute top-0 left-0 w-full h-full border-b-4 border-blue-500"
                                style={{
                                    transform: `scale(0.25)`,
                                    transformOrigin: 'top left',
                                    width: '400%',
                                    height: '400%',
                                }}

                            ></iframe>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-sm font-semibold mb-4">{project.title}</h2>
                                <h2 className="text-[11px] font-medium text-[#a19f9f] mb-4">{project.date}</h2>
                            </div>
                            <ul className="flex flex-wrap gap-2 mb-4">
                                {project.techs.map((tech, techIndex) => (
                                    <li
                                        key={techIndex}
                                        className="text-[11px] border border-blue-500 dark:border-blue-400 
                                        bg-blue-50 dark:bg-blue-900/30
                                        text-blue-700 dark:text-blue-300 
                                        rounded-full px-3 py-1 flex items-center gap-1.5
                                        hover:bg-blue-500 dark:hover:bg-blue-400 
                                        hover:text-white dark:hover:text-gray-900 
                                        transition-all duration-200"
                                    >
                                        <GoDotFill className="text-[8px]" /> {tech}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex gap-3">
                                <Link
                                    href={project.link[1]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium
                                    bg-blue-600 hover:bg-blue-700
                                     text-white rounded-lg transition-all duration-200"
                                >
                                    <FaGlobe className="text-[14px]" /> Live Demo
                                </Link>
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium
                                    dark:bg-gray-200 dark:hover:bg-gray-300
                                    bg-gray-800 hover:bg-gray-900
                                    text-white dark:text-gray-800
                                    rounded-lg shadow-md transition-all duration-200"
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
