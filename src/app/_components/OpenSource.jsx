"use client"
import React, { useState } from 'react'
import { IoCalendarClearOutline } from "react-icons/io5";
import { BsBoxArrowUpRight, BsCalendar2, BsCheck2Circle } from "react-icons/bs";

const contributions = [
    {
        request: "feat: enhance team form validation and error handling",
        skills: ["Frontend", "React"],
        organization: "Voxora Cloud",
        status: "Merged",
        date: "Aug 2025",
        action: "https://github.com/voxora-cloud/voxora/pull/20"
    },
    {
        request: "feat: add contrast color utility for team color display in agent details",
        skills: ["Frontend", "React"],
        organization: "Voxora Cloud",
        status: "Merged",
        date: "Aug 2025",
        action: "https://github.com/voxora-cloud/voxora/pull/21"
    },
    {
        request: "feat: add contrast color utility for team color display in agent details",
        skills: ["Frontend", "React"],
        organization: "Voxora Cloud",
        status: "Merged",
        date: "Aug 2025",
        action: "https://github.com/voxora-cloud/voxora/pull/21"
    },
    {
        request: "feat: add contrast color utility for team color display in agent details",
        skills: ["Frontend", "React"],
        organization: "Voxora Cloud",
        status: "Merged",
        date: "Aug 2025",
        action: "https://github.com/voxora-cloud/voxora/pull/21"
    },
    {
        request: "feat: add contrast color utility for team color display in agent details",
        skills: ["Frontend", "React"],
        organization: "Voxora Cloud",
        status: "Merged",
        date: "Aug 2025",
        action: "https://github.com/voxora-cloud/voxora/pull/21"
    },
    {
        request: "feat: add contrast color utility for team color display in agent details",
        skills: ["Frontend", "React"],
        organization: "Voxora Cloud",
        status: "Merged",
        date: "Aug 2025",
        action: "https://github.com/voxora-cloud/voxora/pull/21"
    },

]

const OpenSource = () => {
    const [visibleCount, setVisibleCount] = useState(5);

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 5);
    };

    return (
        <div className="w-[100vw] sm:w-[85vw] md:w-[65vw] mx-auto px-2 mt-8 dark:text-white">
            <h1 className="text-xl font-semibold">Open Source Contributions</h1>
            <p className="text-[14px] font-medium text-gray-600 dark:text-gray-400 mb-2">
                All my pull requests and contributions to open source projects
            </p>

            <div className="overflow-x-auto rounded-xl">
                <table className="w-full text-sm border-separate border-spacing-y-2">
                    <thead className="bg-gray-100 dark:bg-gray-900 rounded-lg">
                        <tr className="text-left">
                            <th className="p-3 text-gray-800 dark:text-gray-300">Pull Request</th>
                            <th className="p-3 text-gray-800 dark:text-gray-300">Organization</th>
                            <th className="p-3 text-gray-800 dark:text-gray-300">Date</th>
                            <th className="p-3 text-gray-800 dark:text-gray-300">Status</th>
                            <th className="p-3 text-gray-800 dark:text-gray-300">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contributions.slice(0, visibleCount).map((contrib, index) => (
                            <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-950">
                                <td className="p-3 align-top max-w-[250px] md:max-w-[350px] rounded-l-lg">
                                    <a
                                        href={contrib.action}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-black dark:text-gray-400 font-medium dark:hover:text-gray-300 transition block truncate"
                                        title={contrib.request}
                                    >
                                        {contrib.request}
                                    </a>
                                    <div className="flex flex-wrap gap-2 mt-1.5">
                                        {contrib.skills.map((skill, i) => (
                                            <span key={i} className="text-[11px] px-2 py-0.5 border dark:border-gray-800 rounded-md font-semibold">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </td>

                                <td className="p-3 align-top">
                                    <div className="flex items-center gap-1">
                                        <div className="size-7 bg-gradient-to-br from-blue-600 to-gray-300 rounded-md flex items-center justify-center shadow-md">
                                            <span className="text-[15px] font-bold text-white">
                                                {contrib.organization.charAt(0)}
                                            </span>
                                        </div>
                                        <h1 className="truncate max-w-[120px] font-semibold text-gray-600 dark:text-gray-400 text-[13px]">
                                            {contrib.organization}
                                        </h1>
                                    </div>
                                </td>

                                <td className="p-3 align-top whitespace-nowrap">
                                    <div className="flex items-center gap-1 font-medium text-gray-600 dark:text-gray-400 text-[13px]">
                                        <BsCalendar2 size={13} className='text-black dark:text-white' />
                                        {contrib.date}
                                    </div>
                                </td>

                                <td className="p-3 align-top">
                                    <div className={`px-3 py-1 rounded-md text-[11px] font-medium flex items-center gap-1 w-fit ${contrib.status === "Merged"
                                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200"
                                        }`}
                                    >
                                        <BsCheck2Circle size={13} />
                                        <span>{contrib.status}</span>
                                    </div>
                                </td>

                                <td className="p-3 align-top rounded-r-lg">
                                    <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                                        <a
                                            href={contrib.action}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline text-[13px] font-medium"
                                        >
                                            View
                                        </a>
                                        <BsBoxArrowUpRight size={13} className='' />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {visibleCount < contributions.length ? (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleShowMore}
                        className="px-5 py-2.5 text-sm font-medium rounded-lg bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md transition-all"
                    >
                        Show {contributions.length - visibleCount} more pull request
                        {contributions.length - visibleCount > 1 ? "s" : ""}
                    </button>
                </div>
            ) : (
                contributions.length > 5 && <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setVisibleCount(5)}
                        className="px-5 py-2.5 text-sm font-medium rounded-lg bg-gray-600 text-white shadow-sm hover:bg-gray-700 hover:shadow-md transition-all"
                    >
                        Hide pull requests
                    </button>
                </div>
            )}
        </div>
    )
}

export default OpenSource
