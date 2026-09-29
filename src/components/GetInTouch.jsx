"use client";

import { useState } from "react";
import axios from "axios";
import { AlertCircle, ArrowUpRight, CheckCircle2, Clock, Loader2, Mail, Phone, Send } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import SocialIcon from "./ui/SocialIcon";
import VisitingCard from "./VisitingCard";
import { SITE, SOCIALS } from "@/lib/site";

const CHANNELS = [
  { id: "email", label: "Email", href: `mailto:${SITE.email}`, handle: SITE.email },
  { id: "phone", label: "Phone", href: `tel:${SITE.phone.replace(/\s/g, "")}`, handle: SITE.phone },
  ...SOCIALS.filter((s) => s.id !== "leetcode"),
];

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

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("All fields are required.");
      return;
    }

    if (message.trim().length < 10) {
      setError("Message must be at least 10 characters long.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("/api/email", userData);

      if (!response.data.success) {
        setError(response.data.message || "Failed to deliver message.");
        return;
      }

      setSent(response.data.message || "Message delivered successfully!");
      setUserData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(null), 5000);
    } catch (err) {
      console.error("Contact Form Error:", err.response?.data);
      setError(err.response?.data?.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <SectionHeading
          index="08"
          label="Contact"
          title={
            <>
              Let&apos;s build something <span className="serif-accent text-brand">impactful</span>{" "}
              together.
            </>
          }
          subtitle="Reach out for opportunities, system design, or engineering collaboration."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Visiting card + direct channels */}
          <aside className="reveal flex flex-col gap-6 lg:col-span-5">
            <VisitingCard />

            <ul className="card divide-y divide-border overflow-hidden">
              {CHANNELS.map((c) => {
                const isExternal = c.href.startsWith("http");
                return (
                  <li key={c.id}>
                    <a
                      href={c.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface-2"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-ink">
                        {c.id === "email" ? (
                          <Mail size={17} />
                        ) : c.id === "phone" ? (
                          <Phone size={17} />
                        ) : (
                          <SocialIcon id={c.id} size={17} />
                        )}
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="text-xs text-muted-foreground">{c.label}</span>
                        <span className="truncate font-medium">{c.handle}</span>
                      </span>
                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            <p className="flex items-center gap-2 px-1 text-sm text-muted-foreground">
              <Clock size={15} className="shrink-0" />
              Usually replies within 24 hours.
            </p>
          </aside>

          {/* Form */}
          <form onSubmit={handleSend} noValidate className="reveal card flex flex-col gap-5 p-6 sm:p-8 lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={userData.name}
                  onChange={handleChange}
                  placeholder="Alex Morgan"
                  required
                  className="field"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={userData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  required
                  className="field"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={userData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, idea, or role..."
                required
                className="field resize-y"
              />
            </div>

            <div aria-live="polite">
              {error && (
                <p className="flex items-center gap-2 rounded-xl border border-destructive/25 bg-destructive/10 p-3 text-sm text-destructive">
                  <AlertCircle size={16} className="shrink-0" />
                  {error}
                </p>
              )}
              {sent && (
                <p className="flex items-center gap-2 rounded-xl border border-success/25 bg-success/10 p-3 text-sm text-success">
                  <CheckCircle2 size={16} className="shrink-0" />
                  {sent}
                </p>
              )}
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary h-12 w-full sm:w-auto sm:self-end">
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={15} />
                  Send message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
