import React from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaRegCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";

const Experience = () => {
  const technologies = [
    "C#",
    ".NET 8",
    "ASP.NET Core",
    "Angular",
    "TypeScript",
    "JavaScript",
    "SQL Server",
    "Entity Framework Core",
    "Git",
    "REST API",
    "Bootstrap",
    "AG Grid",
  ];

  const achievements = [
    "Developed multiple enterprise modules for HR and Payroll systems, enhancing overall system capabilities.",
    "Improved API response times through efficient query optimization and database tuning.",
    "Built highly reusable Angular components that were adopted across multiple screens and projects.",
    "Implemented secure authentication and authorization protocols to protect sensitive enterprise data.",
    "Actively contributed to smooth production releases, bug fixes, and continuous system improvements.",
  ];

  const responsibilities = [
    "Develop and maintain enterprise web applications using C# and .NET.",
    "Build robust and scalable REST APIs with ASP.NET Core.",
    "Design and integrate responsive user interfaces using Angular and Bootstrap.",
    "Work extensively with Entity Framework Core and SQL Server for data management.",
    "Participate in code reviews, sprint planning, and collaborate closely with QA, BAs, and senior developers.",
  ];

  return (
    <section className="w-full flex items-center px-6 sm:px-12 lg:px-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="w-full max-w-5xl mx-auto gap-12 md:gap-16 py-10 md:pt-20 md:pb-10">
        <h1 className="text-2xl font-space mb-2 font-semibold">Experience</h1>

        <div className="relative group">
          <div className="relative  border border-gray-100 dark:border-neutral-800 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center border-b border-gray-100 dark:border-neutral-800 pb-6 mb-6">
              {/* Logo */}
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gray-50 dark:bg-neutral-800 rounded-xl flex items-center justify-center p-2 border border-gray-100 dark:border-neutral-700 overflow-hidden">
                <Image
                  src="/prixlogo.png"
                  alt="Prix Corporation Logo"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Software Developer
                </h2>
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  Prix Corporation
                </h3>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 text-sm text-gray-600 dark:text-gray-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <FaRegCalendarAlt className="text-gray-400 dark:text-gray-500" />
                    <span>April 2026 – Present</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-gray-400 dark:text-gray-500" />
                    <span>Baramati, Maharashtra, India</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaBriefcase className="text-gray-400 dark:text-gray-500" />
                    <span>Full-time</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Key Achievements & Impact
                </h4>
                <ul className="space-y-3">
                  {achievements.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Core Responsibilities
                </h4>
                <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-300 marker:text-blue-500">
                  {responsibilities.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm md:text-base leading-relaxed pl-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-800 dark:text-gray-200 text-xs md:text-sm font-medium rounded-lg transition-colors cursor-default border border-transparent dark:border-neutral-700 hover:border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
