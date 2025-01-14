"use client"

import { useEffect, useState } from "react"

const Footer = () => {
    const [year, setYear] = useState("loading");
    useEffect(() => {
        setYear(new Date().getFullYear())
    }, [])
    return (
        <div className="w-[100vw] sm:w-[85vw] md:w-[60vw] mx-auto mt-8 mb-[80px] flex justify-center">
            <h1 className='mx-auto font-medium text-[12px] md:text-[14px]'>© {year} Portfolio (Vaibhav Shinde). All Rights Reserved.</h1>
        </div>
    )
}

export default Footer