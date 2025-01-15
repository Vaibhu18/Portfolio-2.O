import { GoDotFill } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import Link from "next/link";

const projects = [
    {
        title: "Flowbite Components",
        link: "https://vcode-dev-vaibhav.vercel.app/",
        techs: ["html", "css", "js", "react", "mongodb"],
    },
];

const Projects = () => {
    return (
        <div className="w-full sm:w-[85%] md:w-[60%] mx-auto px-4 mt-8">
            <h1 className="text-2xl font-semibold mb-6 text-center">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border rounded-lg overflow-hidden pb-4 bg-[#dddddd] dark:bg-[#1d1d1d] shadow-md"
                    >
                        <iframe
                            src={project.link}
                            title={project.title}
                            className="w-full h-[250px]"
                            scrolling="no"
                        ></iframe>
                        <div className="px-3 py-2">
                            <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
                            <ul className="flex gap-2 flex-wrap mb-3 text-sm">
                                {project.techs.map((tech, techIndex) => (
                                    <li
                                        key={techIndex}
                                        className="border-2 border-yellow-600 rounded-md px-2 flex items-center gap-1"
                                    >
                                        <GoDotFill className="text-yellow-600" /> {tech}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex gap-3">
                                <Link href="https://vcode-dev-vaibhav.vercel.app/"
                                    className="flex items-center gap-1 bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded-md text-sm font-medium"
                                    target="block"
                                >
                                    <FaGlobe /> Website
                                </Link>
                                <Link href="https://vcode-dev-vaibhav.vercel.app/"
                                    className="flex items-center gap-1 bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded-md text-sm font-medium"
                                    target="block"
                                >
                                    <FaGithub /> Source Code
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
