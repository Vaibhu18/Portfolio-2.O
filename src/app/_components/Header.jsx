"use client"
import { GoDotFill } from "react-icons/go";
import { IoMdDownload } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";

const Header = () => {
    return (
        <div className='w-[100vw] sm:w-[75vw] md:w-[60vw] lg:w-[50vw] mx-auto px-2'>
            <div className='flex justify-between my-5'>
                <h1 className='flex items-center font-semibold text-[15px] md:text-[17px]'> <GoDotFill /> Software Developer</h1>
                <h1 className='flex items-center bg-[#66e873] px-2 py-1 rounded-full text-black font-semibold text-[14px] md:text-[17px]'> <GoDotFill /> Available for work</h1>
            </div>
            <div className='flex gap-1 justify-between mb-5'>
                <div>
                    <h1 className='text-[20px] md:text-2xl font-bold mb-1'>Hi, I'm <span className='text-[red]'>Vaibhav Shinde</span> </h1>
                    <p className=' font-medium text-[#464545] dark:text-[#9a9999] text-[15px] md:text-[17px] md:w-[500px]'>Full-Stack Developer with a love for building things that make a difference. Always exploring new ideas and solving problems.</p>
                </div>
                <div className='min-w-[100px]'>
                    <img src='https://avatars.githubusercontent.com/u/103619246?v=4' alt='Profile'
                        className='w-[100px] rounded-full p-0.5 border border-[#969494] dark:border-[#817f7f]'
                    />
                </div>
            </div>
            <div className='mt-3 flex gap-2 md:gap-5 mb-5'>
                <a href="/vaibhav.pdf" download="vaibhav.pdf">
                    <button className="flex gap-1 justify-center items-center bg-[red] px-4 py-1 rounded-md font-medium text-[14px] text-white">
                        <IoMdDownload />
                        Download Resume
                    </button>
                </a>
                <button
                    onClick={() => navigator?.clipboard?.writeText("vcode.dev18@gmail.com")}
                    className='flex gap-2 justify-center items-center border bg-slate-200 hover:bg-slate-300 px-4 py-1 rounded-md font-medium text-[14px] dark:bg-[black] dark:hover:bg-[#363636]'> <IoCopyOutline />Copy Email </button>
            </div>
        </div>
    )
}

export default Header