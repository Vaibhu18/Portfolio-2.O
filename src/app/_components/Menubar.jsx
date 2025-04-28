'use client'
import Link from 'next/link';
import React from 'react';
import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { AiOutlineHome, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbBrandLeetcode } from "react-icons/tb";
import { IoMdMoon } from "react-icons/io";

const Menubar = () => {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])
    return (
        <div className="w-[300px] mx-auto fixed justify-between bottom-5 left-0 right-0 flex py-2 px-5 shadow-[0px_0px_5px_0.01px_black] dark:shadow-[0px_0px_5px_0.01px_white] rounded-xl bg-white dark:text-white dark:bg-black">
            <a href="/" className="flex flex-col justify-between items-center hover:border-b-2 border-gray-700 dark:border-zinc-200">
                <AiOutlineHome size={20} />
                <span className="text-[10px] font-semibold">Home</span>
            </a>

            <a href="https://github.com/Vaibhu18" target="blank" className="flex flex-col justify-between items-center hover:border-b-2 border-zinc-800 dark:border-zinc-200">
                <AiFillGithub size={20} />
                <span className="text-[10px] font-semibold">GitHub</span>
            </a>

            <a href="https://www.linkedin.com/in/vaibhav-shinde-b3b782238" target="blank" className="flex flex-col justify-between items-center hover:text-blue-500 hover:border-b-2 border-blue-600">
                <AiFillLinkedin size={20} className='text-blue-500' />
                <span className="text-[10px] font-semibold">LinkedIn</span>
            </a>

            <a href="https://leetcode.com/u/Vaibhav8605/" target="blank" className="flex flex-col justify-between items-center hover:text-orange-500 hover:border-b-2 border-orange-600">
                <TbBrandLeetcode size={20} className='text-orange-500' />
                <span className="text-[10px] font-semibold">Leetcode</span>
            </a>

            <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className={`${resolvedTheme === "dark" ? "border-orange-500 hover:text-orange-500" : "border-black"} flex flex-col justify-between items-center hover:border-b-2 `}
            >
                {resolvedTheme === "dark" ? <FiSun size={20} color='orange' /> : <IoMdMoon size={20} color='black' />}
                <span className="text-[10px] font-semibold">
                    {resolvedTheme === "dark" ? "Light" : "Dark"}
                </span>
            </button>
        </div>

    );
};

export default Menubar;
