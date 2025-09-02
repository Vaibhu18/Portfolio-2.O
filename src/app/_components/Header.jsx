"use client"
import { GoDotFill } from "react-icons/go";
import { IoMdDownload } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='w-[100vw] sm:w-[75vw] md:w-[60vw] lg:w-[55vw] mx-auto px-2'
        >
            <div className='flex justify-between my-5'></div>

            {/* Name & Profile */}
            <div className='flex gap-1 justify-between mb-5'>
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className='text-[20px] md:text-2xl font-bold mb-1'>
                        Hi, I'm <span className='text-[red]'>Vaibhav Shinde</span>
                    </h1>
                    <p className='font-medium text-[#464545] dark:text-[#9a9999] text-[15px] md:text-[16px] md:w-[500px]'>
                        Full-Stack Developer focused on delivering impactful solutions and solving complex problems with innovation and precision.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="min-w-[150px] flex justify-center"
                >
                    <img
                        src="/images/profile.jpeg"
                        alt="Profile"
                        className="w-[100px] h-[100px] rounded-full border-2 border-gray-300 dark:border-gray-600 shadow-sm hover:shadow-md transition-all object-contain bg-white"
                    />
                </motion.div>
            </div>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className='mt-3 flex gap-2 md:gap-5 mb-5'
            >
                <a href="/vaibhav.pdf" download="vaibhav.pdf">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex gap-1 justify-center items-center bg-[red] px-4 py-1.5 rounded-md font-medium text-[14px] text-white shadow-md"
                    >
                        <IoMdDownload />
                        Download Resume
                    </motion.button>
                </a>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigator?.clipboard?.writeText("vcode.dev18@gmail.com")}
                    className='flex gap-2 justify-center items-center border bg-slate-200 hover:bg-slate-300 px-4 py-1 rounded-md font-medium text-[14px] dark:bg-[black] dark:hover:bg-[#363636]'
                >
                    <IoCopyOutline /> Copy Email
                </motion.button>
            </motion.div>
        </motion.div>
    )
}

export default Header;
