"use client";
import React from "react";

const Education = () => {
    return (
        <section className="relative w-full sm:w-[85vw] md:w-[75vw] mx-auto px-2 sm:px-4 pt-5">

            {/* Background glow */}
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500/5 via-pink-500/5 to-red-500/5 blur-3xl rounded-3xl" />

            <div className="relative bg-white/70 dark:bg-zinc-900 backdrop-blur-xl rounded-md border border-gray-200/40 dark:border-gray-800/40 p-4 sm:p-8 shadow-lg">

                {/* Heading */}
                <div className="mb-5">
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Education
                    </h1>
                    <div className="mt-2 h-1 w-14 rounded-full bg-linear-to-r from-blue-500 via-pink-500 to-red-500" />
                </div>

                {/* Education List */}
                <div className="space-y-6">

                    {/* Card 1 */}
                    <div className="flex justify-between gap-4 items-start">
                        <div className="flex gap-3">
                            <img
                                src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1709278369_llqmhZo9oz.jpg"
                                alt="Vidya Pratishthan's College Logo"
                                className="w-11 h-11 rounded-lg object-cover border border-gray-200 dark:border-gray-700"
                            />
                            <div>
                                <h2 className="text-[15px] font-semibold text-gray-900 dark:text-white leading-snug">
                                    Vidya Pratishthan's Arts Science & Commerce College Baramati
                                </h2>
                                <p className="text-[14px] font-medium text-gray-600 dark:text-gray-400">
                                    Bachelor of Computer Science
                                </p>
                            </div>
                        </div>
                        <p className="text-[14px] font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">
                            2023 – 2026
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-linear-to-r from-transparent via-gray-300/40 dark:via-gray-700/40 to-transparent" />

                    {/* Card 2 */}
                    <div className="flex justify-between gap-4 items-start">
                        <div className="flex gap-3">
                            <img
                                src="https://media.licdn.com/dms/image/v2/C4D0BAQHn-mst7Jf8Pw/company-logo_200_200/company-logo_200_200/0/1638195127956/functionup_logo?e=2147483647&v=beta&t=0nmjGtV6aj8aI4ltop8_q2aF7-zMaoeb0gU63pDE3as"
                                alt="FunctionUp Logo"
                                className="w-11 h-11 rounded-lg object-cover border border-gray-200 dark:border-gray-700"
                            />
                            <div>
                                <h2 className="text-[15px] font-semibold text-gray-900 dark:text-white leading-snug">
                                    Trainee as a Software Developer at FunctionUp Noida
                                </h2>
                                <p className="text-[14px] font-medium text-gray-600 dark:text-gray-400">
                                    Backend Development
                                </p>
                            </div>
                        </div>
                        <p className="text-[14px] font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">
                            2022 – 2023
                        </p>
                    </div>

                </div>
            </div>

            {/* Bottom divider */}
            <div className="mt-5 h-px bg-linear-to-r from-transparent via-gray-300/50 dark:via-gray-700/40 to-transparent" />
        </section>
    );
};

export default Education;
