import Image from 'next/image'
import React from 'react'



const Skills = () => {
    return (
        <div className="w-[100vw] sm:w-[85vw] md:w-[60vw] mx-auto px-2 mt-8 dark:text-white dark:bg-black">
            <h1 className="text-xl font-semibold mb-2">Skills</h1>
            <div className='flex gap-3 flex-wrap flex-grow-4'>
                {skills.map((skill, index) => {
                    return (
                        <span key={index} className='flex justify-center items-center gap-1 py-1 px-2 border rounded-md bg-slate-200 dark:bg-[#c9bfbf39]'>
                            <Image src={skill.image} width={40} height={40} alt={skill.name} />
                            <h1 className='font-semibold'>{skill.name}</h1>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills


const skills = [{
    name: 'HTML',
    image: '/images/html.png',
}, {
    name: 'CSS',
    image: '/images/css.png',
}, {
    name: 'Tailwind CSS',
    image: '/images/tailwind.png',
}, {
    name: 'JavaScript',
    image: '/images/javascript.png',
}, {
    name: 'React JS',
    image: '/images/react.png',
}, {
    name: 'Redux',
    image: '/images/redux.png',
}, {
    name: 'Next JS',
    image: '/images/Next.js.jpeg',
}, {
    name: 'Node JS',
    image: '/images/nodejs.png',
}, {
    name: 'Express JS',
    image: '/images/express.png',
}, {
    name: 'MongoDB',
    image: '/images/mongo-db.png',
}, {
    name: 'Socket.io',
    image: '/images/socket.png',
}, {
    name: 'C',
    image: '/images/C.png',
}, {
    name: 'C++',
    image: '/images/C++.png',
}, {
    name: 'DSA',
    image: '/images/DSA.png',
}, {
    name: 'Git',
    image: '/images/git.png',
}, {
    name: 'GitHub',
    image: '/images/github.png',
}, {
    name: 'Windows',
    image: '/images/windows.png',
}, {
    name: 'Ubuntu',
    image: '/images/ubuntu.png',
}]