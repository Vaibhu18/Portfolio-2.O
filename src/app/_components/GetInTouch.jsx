"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const GetInTouch = () => {
    return (
        <section className="w-[100vw] sm:w-[85vw] md:w-[65vw] mx-auto px-4 mt-16 mb-20">
            <h1 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white text-center md:text-left">
                Get in Touch
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="bg-white/80 dark:bg-gray-950/80 border border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl p-6 backdrop-blur-md">
                    <form className="space-y-5">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-sm text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-sm text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-sm text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Info + Socials */}
                <div className="flex flex-col justify-center gap-8 text-center md:text-left">
                    <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed max-w-md mx-auto md:mx-0">
                        I’d love to hear from you! Whether it’s a project idea, collaboration,
                        or just a quick hello — feel free to reach out and I’ll get back to you soon.
                    </p>

                    <div className="flex justify-center md:justify-start gap-4">
                        <a
                            href="mailto:your@email.com"
                            className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all shadow-md"
                        >
                            <FaEnvelope className="text-lg" />
                        </a>
                        <a
                            href="https://github.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-900 transition-all shadow-md"
                        >
                            <FaGithub className="text-lg" />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-all shadow-md"
                        >
                            <FaLinkedin className="text-lg" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
