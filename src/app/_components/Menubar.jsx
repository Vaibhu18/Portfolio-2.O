'use client'
import Link from 'next/link';
import React from 'react';
import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { AiOutlineHome, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbBrandLeetcode } from "react-icons/tb";

const Menubar = () => {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])
    return (
        <div className="w-[300px] mx-auto fixed justify-between bottom-5 left-0 right-0 flex p-3 px-5 shadow-[0px_0px_5px_0.01px_black] dark:shadow-[0px_0px_5px_0.01px_white] rounded-xl bg-white dark:text-white dark:bg-black">
            <AiOutlineHome size={28} />
            <AiFillGithub size={28} />
            <AiFillLinkedin size={28} />
            <TbBrandLeetcode size={28} />
            {resolvedTheme == "dark" ? <><FiMoon size={28} onClick={() => setTheme('light')} /></> : <><FiSun size={28} onClick={() => setTheme('dark')} /></>}
        </div>
    );
};

export default Menubar;
