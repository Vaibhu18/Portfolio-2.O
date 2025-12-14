"use client";

import { useEffect, useState } from "react";

const Footer = () => {
    const [year, setYear] = useState("");

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="relative w-full sm:w-[85vw] md:w-[60vw] mx-auto pt-14 pb-[110px] px-4">

            {/* Top divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-300/50 dark:via-gray-700/40 to-transparent" />

            <div className="flex flex-col items-center gap-3 text-center">

                {/* Copyright */}
                <p className="text-[12px] sm:text-[14px] font-medium text-gray-600 dark:text-gray-400">
                    © {year}{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                        Portfolio (Vaibhav Shinde)
                    </span>
                    . All Rights Reserved.
                </p>

                {/* Sub text */}
                <p className="text-[11px] sm:text-[12px] text-gray-500 dark:text-gray-500">
                    Built with passion, precision, and modern web technologies.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
