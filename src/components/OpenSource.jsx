"use client";
import React, { useState } from "react";
import { ExternalLink, Calendar, CheckCircle2 } from "lucide-react"; // ✅ replacing react-icons
import { PullRequests } from "./Data";

const OpenSource = () => {
    const [visibleCount, setVisibleCount] = useState(5);
    const handleShowMore = () => setVisibleCount((prev) => prev + 5);

    return (
        <section className="w-full sm:w-[85vw] md:w-[65vw] mx-auto pt-10 px-3">
            {/* Header */}
            <div className="mb-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    Open Source Contributions
                </h1>
                <p className="text-[15px] text-gray-600 dark:text-gray-400 mt-1">
                    A collection of my pull requests and contributions to the open-source
                    community.
                </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto shadow-md bg-white/70 dark:bg-gray-950 backdrop-blur-sm">
                <table className="w-full text-sm border-separate border-spacing-y-2">
                    <thead className="bg-gray-100/80 dark:bg-gray-900">
                        <tr className="text-left">
                            {["Pull Request", "Organization", "Date", "Status", "Action"].map(
                                (header) => (
                                    <th
                                        key={header}
                                        className="p-4 text-gray-800 dark:text-gray-300 text-[13px] font-semibold uppercase tracking-wide"
                                    >
                                        {header}
                                    </th>
                                )
                            )}
                        </tr>
                    </thead>

                    <tbody>
                        {PullRequests.slice(0, visibleCount).map((contrib, index) => (
                            <tr
                                key={index}
                                className="transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-950/60 rounded-xl"
                            >
                                {/* Pull Request */}
                                <td className="p-4 align-top max-w-[250px] md:max-w-[350px] rounded-l-xl">
                                    <a
                                        href={contrib.action}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition block truncate"
                                        title={contrib.request}
                                    >
                                        {contrib.request}
                                    </a>
                                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                                        {contrib.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="text-[11px] px-2 py-0.5 border border-gray-300 dark:border-gray-700 rounded-md font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/60 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </td>

                                {/* Organization */}
                                <td className="p-4 align-top">
                                    <div className="flex items-center gap-2">
                                        <div className="size-7 bg-linear-to-br from-blue-600 to-blue-400 rounded-md flex items-center justify-center shadow-md">
                                            <span className="text-[13px] font-bold text-white">
                                                {contrib.organization.charAt(0)}
                                            </span>
                                        </div>
                                        <span className="truncate max-w-[120px] font-semibold text-gray-700 dark:text-gray-300 text-[13px]">
                                            {contrib.organization}
                                        </span>
                                    </div>
                                </td>

                                {/* Date */}
                                <td className="p-4 align-top whitespace-nowrap text-gray-600 dark:text-gray-400">
                                    <div className="flex items-center gap-1 text-[13px] font-medium">
                                        <Calendar size={14} className="text-blue-500" />
                                        {contrib.date}
                                    </div>
                                </td>

                                {/* Status */}
                                <td className="p-4 align-top">
                                    <div
                                        className={`px-3 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1 w-fit ${contrib.status === "Merged"
                                            ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-200"
                                            }`}
                                    >
                                        <CheckCircle2 size={13} />
                                        <span>{contrib.status}</span>
                                    </div>
                                </td>

                                {/* Action */}
                                <td className="p-4 align-top rounded-r-xl">
                                    <a
                                        href={contrib.action}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-[13px] font-medium hover:underline"
                                    >
                                        View
                                        <ExternalLink size={14} />
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Show More / Hide */}
            <div className="flex justify-center mt-8">
                {visibleCount < PullRequests.length ? (
                    <button
                        onClick={handleShowMore}
                        className="px-6 py-2.5 text-sm font-medium rounded-xl bg-linear-to-r from-blue-600 to-blue-500 text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                    >
                        Show {PullRequests.length - visibleCount} more pull request
                        {PullRequests.length - visibleCount > 1 ? "s" : ""}
                    </button>
                ) : (
                    PullRequests.length > 5 && (
                        <button
                            onClick={() => setVisibleCount(5)}
                            className="px-6 py-2.5 text-sm font-medium rounded-xl bg-gray-700 text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                        >
                            Hide pull requests
                        </button>
                    )
                )}
            </div>
        </section>
    );
};

export default OpenSource;
