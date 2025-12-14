"use client";
import { ArrowRight } from "lucide-react";
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
        <section className="relative w-full overflow-hidden sm:w-[85vw] md:w-[75vw] mx-auto px-2 sm:px-4 pt-5">

            {/* Background glow */}
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-3xl rounded-3xl" />

            <div className="relative bg-white/70 dark:bg-zinc-900 backdrop-blur-xl rounded-md border border-gray-200/40 dark:border-gray-800/40 p-6 sm:p-10 shadow-lg">

                {/* Header */}
                <div className="mb-5">
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Get in Touch
                    </h1>
                    <div className="mt-2 h-1 w-14 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* Contact Form */}
                    <div className="relative">
                        <div className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl">
                            <form onSubmit={handleMessage} className="space-y-5">

                                {/* Name */}
                                <div>
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
                                        className="mt-1 w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900
                                        text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400
                                        transition-all outline-none"
                                    />
                                </div>

                                {/* Email */}
                                <div>
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
                                        className="mt-1 w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900
                                        text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400
                                        outline-none transition-all"
                                    />
                                </div>

                                {/* Message */}
                                <div>
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
                                        className="mt-1 w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900
                                        text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400
                                        outline-none transition-all resize-none"
                                    ></textarea>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group relative w-full flex items-center justify-center gap-3
    bg-linear-to-r from-blue-600 via-purple-600 to-pink-600
    hover:from-blue-700 hover:via-purple-700 hover:to-pink-700
    text-white font-semibold
    py-3.5 rounded-xl
    shadow-[0_10px_30px_rgba(79,70,229,0.35)]
    hover:shadow-[0_16px_40px_rgba(79,70,229,0.45)]
    transition-all duration-300
    hover:-translate-y-1
    disabled:opacity-50 disabled:cursor-not-allowed
    overflow-hidden cursor-pointer"
                                >
                                    {/* subtle animated shine */}
                                    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/20 skew-x-[-20deg] animate-[shine_1.2s_linear_infinite]" />
                                    </span>

                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </>
                                    )}
                                </button>

                            </form>
                        </div>
                    </div>

                    {/* Info + Socials */}
                    <div className="flex flex-col justify-center gap-8">

                        {/* Description */}
                        <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                            I'm always excited to take on new challenges and collaborate on
                            innovative projects. Whether you need a web app, a redesign, or
                            technical consultation — I’d love to help.
                        </p>

                        {/* Socials */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                Connect with me
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { label: "Email", href: "mailto:vcode.dev18@gmail.com", img: "/email.png" },
                                    { label: "GitHub", href: "https://github.com/Vaibhu18", img: "/github.png" },
                                    { label: "LinkedIn", href: "https://linkedin.com/in/vcode", img: "/linkedin.png" },
                                ].map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 px-3 py-2 rounded-xl
                                        bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                                        shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <img src={item.img} alt="" className="w-11 h-11 rounded-lg" />
                                        <span className="font-medium text-gray-700 dark:text-gray-300">
                                            {item.label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Direct Contact */}
                        <div className="bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20
                        rounded-2xl p-5 border border-blue-200 dark:border-blue-800 shadow-inner">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
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
            </div>

            {/* Bottom divider */}
            <div className="mt-5 h-px bg-linear-to-r from-transparent via-gray-300/50 dark:via-gray-700/40 to-transparent" />
        </section>
    );
};

export default GetInTouch;
