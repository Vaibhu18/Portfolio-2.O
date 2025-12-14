"use client";
import React, { useState } from "react";
import { ExternalLink, Calendar, CheckCircle2 } from "lucide-react";
import { PullRequests } from "./Data";

const OpenSource = () => {
    const [visibleCount, setVisibleCount] = useState(5);
    const handleShowMore = () => setVisibleCount((prev) => prev + 5);

    return (
        <section className="relative w-full sm:w-[85vw] md:w-[75vw] mx-auto px-2 sm:px-4 pt-5">

            {/* Background glow */}
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500/5 via-purple-500/5 to-green-500/5 blur-3xl rounded-3xl" />

            <div className="relative bg-white/70 dark:bg-zinc-900 backdrop-blur-xl rounded-md border border-gray-200/40 dark:border-gray-800/40 sm:p-8 shadow-lg">

                {/* Header */}
                <div className="mb-5 p-5">
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Open Source Contributions
                    </h1>
                    <p className="text-[15px] text-gray-600 dark:text-gray-400 mt-2 max-w-xl">
                        A collection of my pull requests and contributions to the open-source
                        community.
                    </p>
                    <div className="mt-2 h-1 w-14 rounded-full bg-linear-to-r from-red-500 via-pink-500 to-blue-500" />
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-md border border-gray-200 dark:border-gray-800">
                    <table className="w-full text-sm border-separate border-spacing-y-2">
                        <thead className="bg-gray-100/80 dark:bg-zinc-950">
                            <tr>
                                {["Pull Request", "Organization", "Date", "Status", "Action"].map(
                                    (header) => (
                                        <th
                                            key={header}
                                            className="px-5 py-3 text-left text-[12px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
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
                                    className="group transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-950/60 rounded-xl"
                                >
                                    {/* Pull Request */}
                                    <td className="px-5 py-4 align-top max-w-[260px] md:max-w-[380px] rounded-l-xl">
                                        <a
                                            href={contrib.action}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block font-medium text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 truncate transition-colors"
                                            title={contrib.request}
                                        >
                                            {contrib.request}
                                        </a>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {contrib.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="text-[11px] px-2.5 py-1 rounded-lg border border-gray-300 dark:border-gray-700 font-medium
                                                    text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/60
                                                    group-hover:border-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-all"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </td>

                                    {/* Organization */}
                                    <td className="px-5 py-4 align-top">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 bg-linear-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-sm">
                                                <span className="text-[13px] font-bold text-white">
                                                    {contrib.organization.charAt(0)}
                                                </span>
                                            </div>
                                            <span className="font-semibold text-gray-700 dark:text-gray-300 text-[13px] truncate max-w-[140px]">
                                                {contrib.organization}
                                            </span>
                                        </div>
                                    </td>

                                    {/* Date */}
                                    <td className="px-5 py-4 align-top whitespace-nowrap">
                                        <div className="flex items-center gap-1.5 text-[13px] font-medium text-gray-600 dark:text-gray-400">
                                            <Calendar size={14} className="text-blue-500" />
                                            {contrib.date}
                                        </div>
                                    </td>

                                    {/* Status */}
                                    <td className="px-5 py-4 align-top">
                                        <div
                                            className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 w-fit
                                            ${contrib.status === "Merged"
                                                    ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                                                    : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-200"
                                                }`}
                                        >
                                            <CheckCircle2 size={13} />
                                            {contrib.status}
                                        </div>
                                    </td>

                                    {/* Action */}
                                    <td className="px-5 py-4 align-top rounded-r-xl">
                                        <a
                                            href={contrib.action}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-[13px] font-medium hover:underline"
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
                            className="px-6 py-2.5 text-sm font-medium rounded-xl bg-linear-to-r from-blue-600 to-blue-500 text-white shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
                        >
                            Show {PullRequests.length - visibleCount} more pull request
                            {PullRequests.length - visibleCount > 1 ? "s" : ""}
                        </button>
                    ) : (
                        PullRequests.length > 5 && (
                            <button
                                onClick={() => setVisibleCount(5)}
                                className="px-6 py-2.5 text-sm font-medium rounded-xl bg-gray-700 text-white shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
                            >
                                Hide pull requests
                            </button>
                        )
                    )}
                </div>
            </div>

            {/* Bottom divider */}
            <div className="mt-5 h-px bg-linear-to-r from-transparent via-gray-300/50 dark:via-gray-700/40 to-transparent" />
        </section>
    );
};

export default OpenSource;
