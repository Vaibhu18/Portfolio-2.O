
import { GoDotFill } from "react-icons/go";

const Experience = () => {
    return (
        <div className="w-[100vw] sm:w-[85vw] md:w-[60vw] mx-auto px-2 mt-8">
            <h1 className="text-xl font-semibold mb-2">Experience</h1>
            <div>
                <div className="flex gap-1 justify-between items-start mb-2">
                    <div className="flex gap-2">
                        <GoDotFill />
                        <div>
                            <h2 className="text-[14px] font-medium">
                                Internship at Prix Corporation Baramati
                            </h2>
                        </div>
                    </div>
                    <p className="text-[13px] font-semibold text-gray-700 dark:text-gray-500">2023</p>
                </div>
            </div>
            <div>
                <div className="flex gap-1 justify-between items-start mb-4">
                    <div className="flex gap-2">
                        <GoDotFill />
                        <div>
                            <h2 className="text-[14px] font-medium">
                                Software Trainee and Developer at FunctionUp
                            </h2>
                        </div>
                    </div>
                    <p className="text-[13px] font-semibold text-gray-700 dark:text-gray-500">2022</p>
                </div>
            </div>
        </div>
    )
}

export default Experience