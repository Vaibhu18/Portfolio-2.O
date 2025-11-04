"use client";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const GetInTouch = () => {
    const [userInfo, setUserInfo] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleMessage = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log(userInfo);
        setTimeout(() => {
            setIsSubmitting(false);
            setUserInfo({ name: "", email: "", message: "" });
        }, 2000);
    };

    return (
        <section
            className="relative w-full max-w-260 mx-auto px-3 pt-10 overflow-x-hidden ">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 md:mb-4 px-4">
                Get in Touch
            </h1>

            {/* Grid */}
            <div
                className=" grid grid-cols-1 lg:grid-cols-2 gap-8 items-start " >
                {/* Contact Form */}
                <div className="relative group order-1 lg:order-0 w-full">
                    {/* Subtle background glow contained */}

                    <div className="relative bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 sm:p-7 shadow-xl transition-all duration-500">
                        <form onSubmit={handleMessage} className="space-y-5 sm:space-y-4">
                            {/* Name */}
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    value={userInfo.name}
                                    onChange={(e) =>
                                        setUserInfo({ ...userInfo, name: e.target.value })
                                    }
                                    required
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 mt-1"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    value={userInfo.email}
                                    onChange={(e) =>
                                        setUserInfo({ ...userInfo, email: e.target.value })
                                    }
                                    required
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 mt-1"
                                />
                            </div>

                            {/* Message */}
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Your Message
                                </label>
                                <textarea
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    value={userInfo.message}
                                    onChange={(e) =>
                                        setUserInfo({ ...userInfo, message: e.target.value })
                                    }
                                    required
                                    className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none mt-1"
                                ></textarea>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className=" w-full group relative bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold
                  py-3 sm:py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" >
                                <div className="flex items-center justify-center gap-3 text-sm sm:text-base">
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                        </>
                                    )}
                                </div>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Info + Socials */}
                <div className="flex flex-col justify-center gap-8 sm:gap-8 text-center lg:text-left w-full">
                    {/* About Section */}
                    <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed text-start">
                        I'm always excited to take on new challenges and collaborate on
                        innovative projects. Whether you need a web app, a redesign, or
                        technical consultation — I’d love to help.
                    </p>

                    {/* Social Buttons */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Connect with me
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {/* Email */}
                            <a
                                href="mailto:vcode.dev18@gmail.com"
                                className="group flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 text-gray-700 dark:text-gray-300 px-1 pr-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="text-white rounded-lg group-hover:scale-110 transition-transform duration-200 w-12 h-12">
                                    {/* <Mail size={18} /> */}
                                    <img src="/email.png" alt="" />
                                </div>
                                <span className="font-medium text-[15px]">Email</span>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/Vaibhu18"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300 px-1 pr-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="text-white rounded-lg group-hover:scale-110 transition-transform duration-200 w-12 h-12">
                                    {/* <Mail size={18} /> */}
                                    <img src="/github.png" alt="" />
                                </div>
                                <span className="font-medium text-[15px]">GitHub</span>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/in/vcode"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 text-gray-700 dark:text-gray-300 px-1 pr-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="text-white rounded-lg group-hover:scale-110 transition-transform duration-200 w-12 h-12">
                                    {/* <Mail size={18} /> */}
                                    <img src="/linkedin.png" alt="" />
                                </div>
                                <span className="font-medium text-[15px]">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Box */}
                    <div className="bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-4 sm:p-6 border border-blue-200 dark:border-blue-800 shadow-inner">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                            Prefer direct contact?
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Shoot me an email at{" "}
                            <a
                                href="mailto:vcode.dev18@gmail.com"
                                className="text-blue-500 hover:text-blue-600 font-medium"
                            >
                                vcode.dev18@gmail.com
                            </a>{" "}
                            and I’ll get back to you within 24 hours.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
