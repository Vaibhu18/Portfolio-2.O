"use client";
import { Download, Mail, MapPin, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ROLES = ["Full-Stack Developer", "UI/UX Enthusiast", "Problem Solver", "Open Source Contributor"];

const Header = () => {
    const [copied, setCopied] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);
    const typingRef = useRef(null);

    // Typewriter effect
    useEffect(() => {
        const current = ROLES[roleIndex];
        const speed = isDeleting ? 40 : 80;

        typingRef.current = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(current.slice(0, displayText.length + 1));
                if (displayText.length + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), 1800);
                }
            } else {
                setDisplayText(current.slice(0, displayText.length - 1));
                if (displayText.length - 1 === 0) {
                    setIsDeleting(false);
                    setRoleIndex((i) => (i + 1) % ROLES.length);
                }
            }
        }, speed);

        return () => {
            if (typingRef.current) clearTimeout(typingRef.current);
        };
    }, [displayText, isDeleting, roleIndex]);

    // Mouse parallax
    const handleMouseMove = (e) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;
        setMousePos({
            x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
            y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
        });
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("vcode.dev18@gmail.com");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative flex justify-center px-4 lg:px-8 overflow-hidden pt-12 pb-8"
        >
            {/* ── Background layer ── */}
            <div className="absolute inset-0 bg-[#050508] dark:bg-[#050508] light:bg-slate-50" />

            {/* Noise grain texture */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "128px",
                }}
            />

            {/* Gradient orbs — parallax */}
            <div
                className="absolute top-[-80px] left-[10%] w-[480px] h-[480px] rounded-full opacity-25 blur-[100px] pointer-events-none"
                style={{
                    background: "radial-gradient(circle, #e11d48, transparent 70%)",
                    transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)`,
                    transition: "transform 0.1s ease-out",
                }}
            />
            <div
                className="absolute top-[60px] right-[5%] w-[340px] h-[340px] rounded-full opacity-20 blur-[90px] pointer-events-none"
                style={{
                    background: "radial-gradient(circle, #3b82f6, transparent 70%)",
                    transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px)`,
                    transition: "transform 0.1s ease-out",
                }}
            />
            <div
                className="absolute bottom-0 left-1/2 w-[600px] h-[200px] -translate-x-1/2 opacity-15 blur-[80px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, #f43f5e, transparent 70%)" }}
            />

            {/* Grid line overlay */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* ── Card ── */}
            <div className="w-full max-w-5xl relative z-10">
                <div
                    className="relative rounded-[2rem] overflow-hidden border border-white/[0.07] shadow-2xl"
                    style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                        backdropFilter: "blur(40px)",
                        WebkitBackdropFilter: "blur(40px)",
                        boxShadow: "0 40px 100px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)",
                    }}
                >
                    {/* Top shimmer border */}
                    <div
                        className="absolute top-0 left-0 right-0 h-px"
                        style={{
                            background: "linear-gradient(90deg, transparent, rgba(244,63,94,0.6) 30%, rgba(59,130,246,0.6) 70%, transparent)",
                        }}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 items-stretch">

                        {/* ── LEFT PANEL ── */}
                        <div className="lg:col-span-2 flex flex-col items-center justify-center gap-8 p-10 lg:p-12 relative">
                            {/* Subtle left panel bg */}
                            <div
                                className="absolute inset-0 opacity-30 pointer-events-none rounded-l-[2rem]"
                                style={{ background: "linear-gradient(160deg, rgba(244,63,94,0.06) 0%, transparent 60%)" }}
                            />

                            {/* Avatar */}
                            <div className="relative group cursor-pointer">
                                {/* Spinning ring */}
                                <div
                                    className="absolute -inset-[3px] rounded-[22px] opacity-80"
                                    style={{
                                        background: "conic-gradient(from 0deg, #e11d48, #3b82f6, #e11d48)",
                                        animation: "spin 4s linear infinite",
                                        borderRadius: "22px",
                                    }}
                                />
                                <style>{`
                                    @keyframes spin { to { transform: rotate(360deg); } }
                                    @keyframes fadeUp {
                                        from { opacity:0; transform:translateY(24px); }
                                        to   { opacity:1; transform:translateY(0); }
                                    }
                                    @keyframes cursor-blink {
                                        0%,100% { opacity:1; } 50% { opacity:0; }
                                    }
                                    .anim-1 { animation: fadeUp 0.6s ease both 0.1s; }
                                    .anim-2 { animation: fadeUp 0.6s ease both 0.25s; }
                                    .anim-3 { animation: fadeUp 0.6s ease both 0.4s; }
                                    .anim-4 { animation: fadeUp 0.6s ease both 0.55s; }
                                    .anim-5 { animation: fadeUp 0.6s ease both 0.7s; }
                                    .cursor { animation: cursor-blink 0.9s step-end infinite; }
                                    .tag-pill {
                                        display: inline-flex; align-items: center; gap: 6px;
                                        font-size: 11px; font-weight: 600; letter-spacing: 0.06em;
                                        padding: 5px 12px; border-radius: 999px;
                                        border: 1px solid rgba(244,63,94,0.3);
                                        background: rgba(244,63,94,0.1);
                                        color: #fb7185;
                                        text-transform: uppercase;
                                    }
                                    .stat-card {
                                        flex: 1;
                                        padding: 12px 10px;
                                        border-radius: 14px;
                                        border: 1px solid rgba(255,255,255,0.07);
                                        background: rgba(255,255,255,0.03);
                                        text-align: center;
                                    }
                                `}</style>
                                <img
                                    src="/profile1.jpg"
                                    alt="Vaibhav Shinde"
                                    className="relative w-36 h-40 sm:w-40 sm:h-44 rounded-[20px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                    style={{ background: "#111" }}
                                />
                                {/* Online dot */}
                                <span className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0a0a10] shadow-lg shadow-emerald-400/50" />
                            </div>

                            {/* Name + role */}
                            <div className="text-center space-y-2 anim-2">
                                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight"
                                    style={{ fontFamily: "'Cal Sans', 'Clash Display', sans-serif" }}>
                                    Vaibhav Nagnath{" "}
                                    <span style={{
                                        background: "linear-gradient(90deg, #f43f5e, #fb923c)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}>
                                        Shinde
                                    </span>
                                </h1>
                                <div className="flex items-center justify-center gap-1.5 text-slate-400 text-sm">
                                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                                    <span>Pune, India</span>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-3 w-full anim-3">
                                {[
                                    { num: "2+", label: "Yrs Exp" },
                                    { num: "20+", label: "Projects" },
                                    { num: "5k+", label: "Commits" },
                                ].map((s) => (
                                    <div key={s.label} className="stat-card">
                                        <p className="text-lg font-black text-white">{s.num}</p>
                                        <p className="text-[10px] text-slate-500 font-medium mt-0.5">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Vertical divider */}
                        <div className="hidden lg:block w-px self-stretch"
                            style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)" }}
                        />

                        {/* ── RIGHT PANEL ── */}
                        <div className="lg:col-span-3 flex flex-col justify-center gap-8 p-10 lg:p-14">

                            {/* Tag */}
                            <div className="tag-pill anim-1 self-start">
                                <Sparkles className="w-3 h-3" />
                                Available for hire
                            </div>

                            {/* Headline */}
                            <div className="space-y-3 anim-2">
                                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-white leading-[1.15] tracking-tight">
                                    Crafting{" "}
                                    <span style={{
                                        background: "linear-gradient(90deg, #f43f5e 0%, #fb923c 50%, #3b82f6 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundSize: "200% auto",
                                        animation: "gradientShift 4s linear infinite",
                                    }}>
                                        Digital Experiences
                                    </span>
                                    <style>{`
                                        @keyframes gradientShift {
                                            0%   { background-position: 0% center; }
                                            100% { background-position: 200% center; }
                                        }
                                    `}</style>
                                    <br />
                                    That Inspire & Empower
                                </h2>

                                {/* Typewriter role */}
                                <div className="flex items-center gap-2 h-7">
                                    <span className="text-base text-slate-400 font-medium">
                                        {displayText}
                                    </span>
                                    <span className="cursor w-[2px] h-5 bg-rose-400 rounded-full inline-block" />
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-[15px] text-slate-400 leading-relaxed max-w-md anim-3">
                                Full-Stack Developer passionate about high-performance web apps,
                                real-time systems, and elegant user experiences that leave a lasting impression.
                            </p>

                            {/* Tech chips */}
                            <div className="flex flex-wrap gap-2 anim-4">
                                {["Next.js", "TypeScript", "Node.js", "Tailwind", "PostgreSQL", "Redis"].map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs font-semibold px-3 py-1.5 rounded-lg text-slate-300"
                                        style={{
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            background: "rgba(255,255,255,0.04)",
                                            letterSpacing: "0.03em",
                                        }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 anim-5">
                                {/* Resume */}
                                <a
                                    href="/vaibhav.pdf"
                                    download
                                    className="group relative flex items-center justify-center gap-2.5 font-bold text-sm px-7 py-3.5 rounded-xl text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                                    style={{
                                        background: "linear-gradient(135deg, #e11d48 0%, #f97316 100%)",
                                        boxShadow: "0 0 0 0 rgba(225,29,72,0.4)",
                                        transition: "box-shadow 0.3s, transform 0.2s",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget).style.boxShadow = "0 8px 30px rgba(225,29,72,0.45)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget ).style.boxShadow = "0 0 0 0 rgba(225,29,72,0.4)";
                                    }}
                                >
                                    {/* Shimmer sweep */}
                                    <span
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                        style={{
                                            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)",
                                            backgroundSize: "200% 100%",
                                            animation: "shimmer 0.6s ease forwards",
                                        }}
                                    />
                                    <style>{`
                                        @keyframes shimmer {
                                            from { background-position: -200% center; }
                                            to   { background-position: 200% center; }
                                        }
                                    `}</style>
                                    <Download className="w-4 h-4 relative z-10" />
                                    <span className="relative z-10">Download Resume</span>
                                </a>

                                {/* Contact */}
                                <button
                                    onClick={handleCopy}
                                    className="relative flex items-center justify-center gap-2.5 font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                                    style={{
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        background: "rgba(255,255,255,0.05)",
                                        color: copied ? "#34d399" : "#e2e8f0",
                                        boxShadow: copied ? "0 0 0 1px #34d399" : "none",
                                    }}
                                >
                                    <Mail className="w-4 h-4" />
                                    {copied ? "Email Copied ✓" : "Contact Me"}
                                    {copied && (
                                        <span
                                            className="absolute inset-0 rounded-xl"
                                            style={{
                                                border: "1px solid #34d399",
                                                background: "rgba(52,211,153,0.06)",
                                                animation: "pulse 1s ease",
                                            }}
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom shimmer */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-px"
                        style={{
                            background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4) 30%, rgba(244,63,94,0.4) 70%, transparent)",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Header;