"use client";
import axios from "axios";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const GetInTouch = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = async (e) => {
    e.preventDefault();

    setError(null);
    setSent(null);

    const { name, email, message } = userData;

    if (!name || !email || !message) {
      setError("All fields are required");
      return;
    }

    if (message.length < 10) {
      setError("Message must be at least 10 characters");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("/api/email", userData);

      if (!response.data.success) {
        setError(response.data.message);
        return;
      }

      setSent(response.data.message);
      setUserData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(null), 3000);
    } catch (error) {
      console.error(error.response?.data);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-300 dark:focus:ring-neutral-700 transition";

  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 bg-white dark:bg-neutral-950">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <form
            onSubmit={handleSend}
            className="flex flex-col gap-4 border p-4 rounded-md"
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-xs font-medium text-neutral-600 dark:text-neutral-400"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={userData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-neutral-600 dark:text-neutral-400"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium text-neutral-600 dark:text-neutral-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={userData.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                required
                className={`${inputClass} resize-none`}
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs tracking-wide">{error}</p>
            )}
            {sent && (
              <p className="text-green-500 text-xs tracking-wide">{sent}</p>
            )}

            <button
              type="submit"
              className="
                mt-1 px-4 py-2 text-xs font-medium rounded-lg
                bg-neutral-900 text-white dark:bg-white dark:text-neutral-900
                hover:opacity-85 active:opacity-75
                transition-opacity duration-150
              "
            >
              {loading ? (
                <>
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 size={15} className=" animate-spin" />
                    <p>Sending Message</p>
                  </div>
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          <div className="flex flex-col gap-6 text-sm text-neutral-600 dark:text-neutral-400">
            <p className="leading-relaxed">
              I build impactful digital experiences and love collaborating with
              driven people. If you need a web application, a redesign, or
              technical expertise, feel free to reach out.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                Connect
              </p>
              <div className="flex gap-2">
                {[
                  {
                    label: "Email",
                    href: "mailto:vcode.dev18@gmail.com",
                    icon: <MdOutlineEmail size={18} />,
                  },
                  {
                    label: "GitHub",
                    href: "https://github.com/Vaibhu18",
                    external: true,
                    icon: <FaGithub size={18} />,
                  },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/vaibhu18",
                    external: true,
                    icon: <FaLinkedin size={18} />,
                  },
                ].map(({ label, href, external, icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-150 flex items-center px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    <span className="mr-1">{icon}</span>
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-500 uppercase tracking-widest mb-1.5">
                Prefer direct contact?
              </p>
              <p className="leading-relaxed">
                Email me at{" "}
                <Link
                  href="mailto:vcode.dev18@gmail.com"
                  className="font-medium text-neutral-800 dark:text-neutral-200 hover:underline underline-offset-2"
                >
                  vcode.dev18@gmail.com
                </Link>{" "}
                — I respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
