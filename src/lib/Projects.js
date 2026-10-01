export const PROJECTS = [
  {
    id: 1,

    title: "Axentra ERP – Scrap Recycling & Manufacturing Management",

    tagline:
      "A full-stack ERP built for a scrap-recycling and manufacturing unit. It replaces paper registers and spreadsheets for production, stock, billing, party accounts, cash book, wages and expenses, with every bill, payment and stock change committed together as one transaction.",

    features: [
      "Customer and supplier ledger with FIFO bill-wise settlement: payments automatically clear the oldest open bills, and settled entries are locked from editing",
      "Sale and purchase billing for quantity- and weight-based products, with sequential bill numbers (SESB001, SEPB001) issued by an atomic counter",
      "Purchase bills and expenses support Normal and GST billing with CGST/SGST, plus 13 expense categories",
      "Each bill, its stock movement, cash entry and ledger posting commit in one MongoDB transaction, so a failure leaves nothing half-written",
      "Daily production log by shift (Day/Night) feeding a stock ledger, with out-of-stock and low-stock tracking",
      "Scrap cleaning module: cleaning teams with member lists, weight × rate batch entries, and payments tracked against what each team is owed",
      "Attendance (full day, half day, absent) feeding per-day wage payroll, with advances and pending-salary tracking",
      "Account overview, receivables, payables and cash-book transaction pages, with Excel export on the main data tables",
      "Printable PDF invoices generated in the browser, plus a dashboard with KPIs, trends, receivable ageing and alerts for stock, overdue bills and cash mismatches",
      "Bills and payments can only be edited or deleted by their creator within 2 days. Google sign-in and email login use httpOnly-cookie JWTs with refresh-token rotation",
    ],

    highlightTechs: [
      "React 19",
      "Node.js & Express 5",
      "MongoDB (Mongoose, Transactions)",
      "Tailwind CSS v4",
      "AG Grid",
      "Recharts",
      "Zod",
    ],

    status: "Completed",

    link: "https://vcode-erp.vercel.app/",

    github: "https://github.com/Vaibhu18/ERP",

    techs: [
      "⚛️ React 19",
      "⚡ Vite",
      "🟢 Node.js & Express 5",
      "🍃 MongoDB & Mongoose",
      "🎨 Tailwind CSS v4 & shadcn/ui",
      "📊 Recharts",
      "🧾 AG Grid & ExcelJS",
      "📄 React-PDF",
      "🔐 JWT, Passport & Google OAuth",
      "✅ Zod",
    ],

    date: "📅 October 2026",
  },

  {
    id: 2,

    title: "Pahadi Keeda – Trekking Website & Custom CMS",

    tagline:
      "A database-driven trekking website with a built-in admin panel. Treks, destinations, per-trek cost breakdowns, blog posts, navigation and page layouts are all managed from /admin, and changes go live as soon as they are saved.",

    features: [
      "Trek and destination catalog with category, difficulty, duration and price filters, sorting, site-wide search, day-wise itineraries, departure dates with seat counts, a things-to-carry list, trek FAQs and photo galleries",
      "Per-trek expenditure breakdown: cost items grouped by category, per-person and shared per-group costs split across the group size, and optional add-ons kept out of the total",
      "Section-based page builder with 17 section types (hero, featured treks, stats, testimonials, FAQs, image + text, gallery, CTA and more). Pages and sections can be created, reordered and hidden without code",
      "Trip planner dialog that saves the request as an enquiry and opens WhatsApp with the details pre-filled, plus a floating WhatsApp button",
      "Media library on MongoDB GridFS. Uploads are auto-rotated, stripped of metadata, resized to 2400px and converted to WebP with Sharp. An image still in use cannot be deleted",
      "Draft and publish workflow with preview, Markdown blog posts, categorized FAQs, a testimonial slider, announcement and promotional banners, and editable header and footer menus",
      "SEO controls per page (meta tags, share image, canonical URL, noindex), a generated sitemap and robots.txt, and security headers",
      "Enquiry inbox with status tracking (new, contacted, converted, closed). The public form is protected by a honeypot field and a per-IP rate limit of 5 requests per 10 minutes",
      "Admin and Editor roles, bcrypt password hashing and signed HTTP-only session cookies (JWT via Jose, 12-hour expiry) checked against the database on every request. Accounts lock for 15 minutes after 5 failed logins, saves are rejected if someone else edited the same item first, and an activity log records admin actions",
      "Seed and admin-creation scripts and an API integration test suite covering auth, CRUD, pages, enquiries and media",
    ],

    highlightTechs: [
      "Next.js 16 (App Router)",
      "React 19",
      "MongoDB & Mongoose",
      "GridFS & Sharp",
      "Tailwind CSS v4",
      "Zod & React Hook Form",
      "Jose (JWT) & bcrypt",
    ],

    status: "Completed",

    link: "https://pahadikeeda.vercel.app/",

    github: "https://github.com/Vaibhu18/Pahadi-Keeda",

    techs: [
      "▲ Next.js 16",
      "⚛️ React 19",
      "🍃 MongoDB & Mongoose",
      "📁 GridFS & Sharp",
      "🎨 Tailwind CSS v4",
      "🛡️ Jose (JWT) & bcrypt",
      "✅ Zod Validation",
      "📋 React Hook Form",
      "💬 WhatsApp Click-to-Chat",
    ],

    date: "📅 September 2026",
  },

  {
    id: 3,

    title: "HireLink – Video Calling Interview Platform",

    tagline:
      "A real-time browser-based interview platform enabling seamless video interviews, live coding, and synchronized global sessions. Built for modern hiring workflows with scalable and secure architecture.",

    features: [
      "Real-time video calling interview platform for conducting technical and HR interviews",
      "Live one-on-one interview sessions with secure host and participant roles",
      "Global synchronized interview sessions ensuring the same interview experience for all users",
      "Modern authentication and session management for interview hosts and candidates",
      "Background event handling and async workflows powered by Inngest",
      "Real-time communication and activity features integrated using Stream API",
      "Online code execution support during interviews using Piston API",
      "Scalable fullstack architecture with clean separation of frontend and backend",
      "Persistent session and interview data stored securely in MongoDB",
      "Production-ready deployment with both frontend and backend hosted on Render.com",
    ],

    highlightTechs: [
      "React + Vite",
      "Node.js + Express",
      "MongoDB",
      "Stream Video API",
      "Inngest",
      "Piston API",
      "Clerk Auth",
    ],

    status: "Completed",

    link: "https://hirelink-6jav.onrender.com",

    github: "https://github.com/Vaibhu18/HireLink",

    techs: [
      "⚛️ React + Vite",
      "🧠 Node.js + Express",
      "🟢 MongoDB + Mongoose",
      "🎥 Stream Video API",
      "⚙️ Inngest",
      "🧪 Piston API (Code Execution)",
      "🔐 Clerk Authentication",
      "☁️ Render Deployment",
    ],

    date: "📅 December 14, 2025",
  },

  {
    id: 4,

    title: "Veltrix AI Messenger – Real-Time Chat with Gemini AI",

    tagline:
      "A real-time messaging platform combining instant chat, media sharing, and an AI assistant for intelligent, context-aware conversations. Designed with a scalable MERN architecture for modern communication experiences.",

    features: [
      "Real-time messaging app inspired by WhatsApp, powered by Gemini AI for intelligent conversations",
      "Fullstack MERN architecture with React (Vite) frontend and Express.js backend",
      "Secure authentication and user sessions using JWT and Passport.js",
      "One-to-one real-time chat functionality using Socket.IO",
      "AI-powered assistant integrated via Google Gemini API for contextual chat responses",
      "Media uploads with secure Cloudinary integration",
      "Responsive, modern UI built with React, TailwindCSS, and Radix UI components",
      "Zustand-based global state management for seamless user experience",
      "Deployed on Render with persistent MongoDB Atlas database and optimized server setup",
    ],

    highlightTechs: [
      "React (Vite)",
      "Node.js + Express",
      "Socket.IO",
      "MongoDB",
      "Gemini AI",
      "Cloudinary",
    ],

    status: "Completed",

    link: "https://veltrix-messenger.onrender.com",

    github: "https://github.com/Vaibhu18/veltrix-2.0",

    techs: [
      "⚛️ React (Vite)",
      "🟢 Node.js + Express.js",
      "💬 Socket.IO",
      "🗄️ MongoDB + Mongoose",
      "🔐 JWT + Passport.js",
      "🎨 TailwindCSS + Radix UI",
      "☁️ Cloudinary API",
      "🤖 Google Gemini AI",
      "🚀 Render Deployment",
    ],

    date: "📅 October 30, 2025",
  },

  {
    id: 5,
    title: "Nexora.ai – Multi-Model AI Chat Workspace",
    tagline:
      "A bring-your-own-key chat app for Gemini, OpenAI and Claude, with streaming responses, password-locked chats and image/PDF attachments.",

    features: [
      "Bring-your-own-key chat across Gemini, OpenAI and Claude. Keys are added in Settings or at sign-up, and each request goes through one provider layer (Gemini runs gemini-3.5-flash-lite, with fallback to gemini-2.0-flash)",
      "API keys are encrypted at rest with AES-256-GCM (random IV and auth tag per key), hidden from queries by default, and decrypted in memory only when a request needs them",
      "Responses stream token by token as newline-delimited JSON. If the client disconnects mid-answer, the partial reply is saved. Markdown output supports GFM tables, KaTeX math and highlighted code blocks with a copy button",
      "Per-chat locking with a bcrypt-hashed lock password. Unlocking issues a 30-minute HMAC-SHA256 token checked with timingSafeEqual. Locked chats show a masked title and are excluded from search and the image gallery",
      "Attach PNG, JPEG, WebP or PDF files (up to 4 files / 4 MB per message) by picker, drag-and-drop or clipboard paste. File type is checked from magic bytes, not the browser's MIME type. Gemini analyses the files, and earlier attachments are re-sent so follow-up questions still work",
      "Sign in with email and password or Google OAuth through NextAuth.js. Email sign-ups are verified with a hashed 6-digit OTP or a magic link (10-minute expiry, resend cooldown), and inputs are validated with Zod",
      "Chat management: pin chats (limit configurable up to 10), rename, delete, search across titles and message text, AI-generated titles, and a gallery of uploaded images",
      "Responsive UI on Tailwind CSS v4 with shadcn/Radix components, OKLCH colour tokens and light/dark/system themes via next-themes",
    ],

    highlightTechs: [
      "Next.js 16 (App Router)",
      "React 19",
      "Tailwind CSS v4",
      "MongoDB & Mongoose",
      "NextAuth.js",
      "AES-256-GCM",
      "Google GenAI SDK",
      "Zod",
    ],

    status: "Completed",
    link: "https://vcode-nexora.vercel.app/",
    github: "https://github.com/Vaibhu18/nexora.ai-2.0",

    techs: [
      "⚛️ Next.js 16",
      "⚡ React 19",
      "🎨 Tailwind CSS v4",
      "🛡️ NextAuth.js",
      "🟢 MongoDB",
      "🔐 AES-256-GCM",
      "🤖 Gemini, OpenAI & Claude",
      "📐 KaTeX & Markdown",
      "📧 Nodemailer",
    ],

    date: "📅 July 17, 2026",
  },

  {
    id: 6,

    title: "Mindful – AI Health Coach",

    tagline:
      "An AI-powered wellness companion for mood-based journaling, personalized insights, and mental health tracking. Designed to help users reflect, understand emotions, and improve daily well-being through intelligent guidance.",

    features: [
      "AI-powered journaling and wellness tracking system",
      "Mood-based journaling with personalized AI coaching and insights",
      "Conversational AI guidance powered by Gemini API",
      "Secure authentication and user sessions using NextAuth.js",
      "Persistent journal entries and mood data stored in MongoDB",
      "Clean and responsive UI built with Next.js",
    ],

    highlightTechs: ["Next.js", "MongoDB", "NextAuth.js", "Gemini AI"],

    status: "Completed",

    link: "https://vcode-mindful.vercel.app/",

    github: "https://github.com/Vaibhu18/Mindful",

    techs: ["⚛️ Next.js", "🛡️ NextAuth.js", "🟢 MongoDB", "🤖 Gemini API"],

    date: "📅 May 28, 2025",
  },

  {
    id: 7,

    title: "GenPro – AI Productivity Assistant",

    tagline:
      "An AI-powered code generation platform that transforms user prompts into complete React applications with live preview and editable environments. Built to streamline development and accelerate prototyping.",

    features: [
      "Generates complete React applications from natural language prompts",
      "Interactive live preview and code editing environment using Sandpack",
      "Fullstack architecture combining MERN stack with Next.js",
      "Seamless authentication and user sessions powered by Auth.js",
      "AI-driven code generation using Gemini API",
      "Persistent project storage and retrieval for generated applications",
    ],

    highlightTechs: [
      "Next.js",
      "MERN Stack",
      "Gemini API",
      "Sandpack",
      "Auth.js",
    ],

    status: "Completed",

    link: "https://vcode-genpro.vercel.app/",

    github: "https://github.com/Vaibhu18/ThinkAI",

    techs: [
      "⚛️ MERN with Next.js 15",
      "🧩 SandPack",
      "🔐 Auth.js",
      "🤖 Gemini API",
    ],

    date: "📅 May 22, 2025",
  },
];
