"use client"
import React from "react"
import { motion } from "framer-motion"

const Education = () => {
    return (
        <div className="w-[100vw] sm:w-[85vw] md:w-[65vw] mx-auto px-2 mt-8">
            <motion.h1
                className="text-xl font-semibold mb-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Education
            </motion.h1>

            {/* First Card */}
            <motion.div
                className="flex gap-1 justify-between items-start mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="flex gap-2">
                    <img
                        src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1709278369_llqmhZo9oz.jpg"
                        alt="Vidya Pratishthan's College Logo"
                        className="w-[40px] h-[40px] rounded-md object-fill"
                    />
                    <div>
                        <h2 className="text-[14px] font-medium">
                            Vidya Pratishthan's Arts Science & Commerce College Baramati
                        </h2>
                        <p className="text-[14px] font-medium text-gray-600 dark:text-gray-500">
                            Bachelor of Computer Science
                        </p>
                    </div>
                </div>
                <p className="text-[13px] font-semibold text-gray-700 dark:text-gray-500">
                    2023 - 2026
                </p>
            </motion.div>

            {/* Second Card */}
            <motion.div
                className="flex gap-1 justify-between items-start mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="flex gap-2">
                    <img
                        src="https://media.licdn.com/dms/image/v2/C4D0BAQHn-mst7Jf8Pw/company-logo_200_200/company-logo_200_200/0/1638195127956/functionup_logo?e=2147483647&v=beta&t=0nmjGtV6aj8aI4ltop8_q2aF7-zMaoeb0gU63pDE3as"
                        alt="FunctionUp Logo"
                        className="w-[40px] h-[40px] rounded-md object-fill"
                    />
                    <div>
                        <h2 className="text-[14px] font-medium">
                            Trainee as a Software Developer at FunctionUp Noida
                        </h2>
                        <p className="text-[14px] font-medium text-gray-600 dark:text-gray-500">
                            Backend Development
                        </p>
                    </div>
                </div>
                <p className="text-[13px] font-semibold text-gray-700 dark:text-gray-500">
                    2022 - 2023
                </p>
            </motion.div>
        </div>
    )
}

export default Education
