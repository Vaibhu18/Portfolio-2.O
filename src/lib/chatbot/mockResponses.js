/**
 * Modular Mock Response Engine for Vaibhav's Portfolio Assistant.
 * Future-ready: Can be replaced by real AI API (Gemini/OpenAI) calls seamlessly.
 */

export const INITIAL_MESSAGES = [
  {
    id: "welcome-1",
    role: "assistant",
    content: "Hi! I'm Vaibhav's portfolio assistant. 👋",
    timestamp: "Just now",
  },
  {
    id: "welcome-2",
    role: "assistant",
    content:
      "I can help you explore his projects, technical skills, professional experience, education, and ways to get in touch. What would you like to know?",
    timestamp: "Just now",
  },
];

export const SUGGESTED_QUESTIONS = [
  {
    id: "about",
    label: "Tell me about Vaibhav",
    query: "Tell me about Vaibhav",
  },
  {
    id: "skills",
    label: "What are his skills?",
    query: "What are his skills?",
  },
  {
    id: "projects",
    label: "Show me his projects",
    query: "Show me his projects",
  },
  {
    id: "experience",
    label: "What's his experience?",
    query: "What's his experience?",
  },
  {
    id: "education",
    label: "What is his education?",
    query: "What is his education?",
  },
  {
    id: "contact",
    label: "How can I contact him?",
    query: "How can I contact him?",
  },
];

const KNOWLEDGE_RESPONSES = {
  about: `**Vaibhav Shinde (vcode)** is a passionate **Full-Stack Developer** based in Baramati, Maharashtra, India.

He currently works as a **Software Developer at Prix Corporation**, building scalable enterprise systems and modern web applications. He specializes in designing end-to-end architectures, robust REST APIs, high-performance databases, and intuitive, interactive user experiences.`,

  skills: `Vaibhav has a diverse full-stack technical ecosystem:

• **Languages**: C#, JavaScript, TypeScript, Java, C
• **Frontend**: React.js, Next.js, Tailwind CSS, HTML5, CSS3, Three.js
• **Backend**: ASP.NET Core, .NET 8, Node.js, Express.js, Socket.IO, REST APIs
• **Databases**: MongoDB, SQL Server, PostgreSQL, Redis, Entity Framework Core
• **Tools & DevOps**: Git, AWS, Cloudinary, Inngest, Postman`,

  projects: `Here are some of Vaibhav's featured projects:

1. **HireLink**: Real-time video calling interview platform with live code execution (Piston API), Stream API, and Inngest workflows.
2. **Astro Straits**: Fullstack AI astrology assistant powered by Gemini AI API and NextAuth.js.
3. **Veltrix AI Messenger**: Real-time WhatsApp-inspired chat application with Socket.IO, Gemini AI, and Cloudinary media sharing.
4. **Nexora.AI**: Intelligent conversational search engine with multi-turn context retention & Brave Search integration.
5. **Mindful**: AI wellness companion for mood-based journaling & intelligent emotional guidance.
6. **GenPro**: AI-powered platform transforming prompts into complete React applications with live Sandpack previews.

Check out the **Projects** section on the site for live demos and GitHub repositories!`,

  experience: `Vaibhav is currently working as a **Software Developer at Prix Corporation** (April 2026 – Present):

• Developing and maintaining enterprise modules for HR and Payroll systems.
• Architecting robust REST APIs using **C#**, **.NET 8**, and **ASP.NET Core**.
• Designing responsive user interfaces using **TypeScript** and Bootstrap.
• Tuning database performance and query efficiency with **SQL Server** and Entity Framework Core.
• Implementing secure authentication and authorization protocols.`,

  education: `Vaibhav's academic background and training:

1. **Master of Computer Science (M.Sc CS)**: Tuljaram Chaturchand College (TCC), Baramati (2026 – 2028, Enrolled) — Focused on Advanced Algorithms & Distributed Systems.
2. **Bachelor of Computer Science (B.Sc CS)**: Vidya Pratishthan's ASC College, Baramati (2023 – 2026, Graduated) — Core CS, Data Structures & DBMS.
3. **Backend Development Specialization**: FunctionUp, Noida (2022 – 2023) — Intensive Node.js, Express, MongoDB REST APIs & Microservices.`,

  certificates: `Vaibhav holds notable awards and certifications:

• 🥇 **First Rank** – Top Coder Coding Competition (2026 & 2024, Dept of Computer Science)
• 🥈 **Second Rank** – Techno-Spirit 2026 Programming Skill (National Level)
• 🥈 **Second Prize** – Power of C Project Presentation (2024)
• 📜 **Google Data Analytics Capstone** – Google via Coursera
• 📜 **Backend Development Certification** – FunctionUp
• 📜 **Front-End Developer Training** – Skill India / Ascent Softech`,

  contact: `You can reach out to Vaibhav through:

• 📧 **Email**: [vcode.dev18@gmail.com](mailto:vcode.dev18@gmail.com)
• 💼 **LinkedIn**: [linkedin.com/in/vaibhu18](https://www.linkedin.com/in/vaibhu18)
• 🐙 **GitHub**: [github.com/Vaibhu18](https://github.com/Vaibhu18)
• ⚡ **LeetCode**: [leetcode.com/vaibhu18](https://leetcode.com/vaibhu18/)

You can also use the **Command Center & Contact form** on the homepage to send a direct message!`,

  hirelink: `**HireLink** is a real-time video calling interview platform built with **React + Vite**, **Node.js + Express**, **MongoDB**, **Stream Video API**, **Inngest**, and **Piston API** for live online code execution. It features host/candidate role management, synchronized sessions, and Clerk auth.`,

  astrostraits: `**Astro Straits** is an AI astrology platform featuring 'Astro', an intelligent AI astrologer delivering real-time predictions and chart insights using **Next.js**, **Google Gemini AI API**, **NextAuth.js**, and **MongoDB**.`,

  veltrix: `**Veltrix AI Messenger** is a fullstack MERN real-time chat application with **Socket.IO**, **Google Gemini AI** for smart replies, **Cloudinary** for media sharing, and **JWT** authentication.`,

  nexora: `**Nexora.AI** is a conversational AI search engine combining **Gemini API** and **Brave Search** for real-time, context-aware answers with multi-turn understanding.`,

  resume: `You can download Vaibhav's full CV / Resume directly using the **Download CV** button in the Hero section, or request one by emailing him at [vcode.dev18@gmail.com](mailto:vcode.dev18@gmail.com).`,

  opensource: `Vaibhav has contributed to open-source projects including **InteraOne**, improving team UI accessibility with contrast-aware color utilities and enhancing real-time form validation systems.`,
};

/**
 * Intelligent frontend query matcher to resolve natural questions to portfolio information.
 */
export function getAssistantResponse(query) {
  const q = (query || "").toLowerCase().trim();

  if (!q) {
    return "Could you please type a question? I'm happy to tell you about Vaibhav's projects, skills, experience, or education!";
  }

  // Greetings
  if (
    q === "hi" ||
    q === "hello" ||
    q === "hey" ||
    q === "hi there" ||
    q.startsWith("hello") ||
    q.startsWith("hey")
  ) {
    return "Hello! 👋 I'm Vaibhav's portfolio assistant. How can I help you today? You can ask about his projects, skills, work experience, education, or how to contact him.";
  }

  // Specific project matching
  if (q.includes("hirelink")) return KNOWLEDGE_RESPONSES.hirelink;
  if (q.includes("astro") || q.includes("astrology")) return KNOWLEDGE_RESPONSES.astrostraits;
  if (q.includes("veltrix") || q.includes("messenger")) return KNOWLEDGE_RESPONSES.veltrix;
  if (q.includes("nexora") || q.includes("search engine")) return KNOWLEDGE_RESPONSES.nexora;
  if (q.includes("mindful") || q.includes("genpro") || q.includes("thinkai")) {
    return KNOWLEDGE_RESPONSES.projects;
  }

  // Open source
  if (q.includes("open source") || q.includes("pull request") || q.includes("github contribution")) {
    return KNOWLEDGE_RESPONSES.opensource;
  }

  // Resume / CV
  if (q.includes("resume") || q.includes("cv") || q.includes("download cv")) {
    return KNOWLEDGE_RESPONSES.resume;
  }

  // Contact / Email / Hire
  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("reach") ||
    q.includes("hire") ||
    q.includes("linkedin") ||
    q.includes("message")
  ) {
    return KNOWLEDGE_RESPONSES.contact;
  }

  // Skills / Tech stack
  if (
    q.includes("skill") ||
    q.includes("tech") ||
    q.includes("stack") ||
    q.includes("react") ||
    q.includes("next") ||
    q.includes("dotnet") ||
    q.includes(".net") ||
    q.includes("c#") ||
    q.includes("node") ||
    q.includes("database") ||
    q.includes("mongo") ||
    q.includes("sql") ||
    q.includes("programming")
  ) {
    return KNOWLEDGE_RESPONSES.skills;
  }

  // Projects
  if (
    q.includes("project") ||
    q.includes("work") ||
    q.includes("app") ||
    q.includes("portfolio") ||
    q.includes("built") ||
    q.includes("show me")
  ) {
    return KNOWLEDGE_RESPONSES.projects;
  }

  // Experience / Job / Company
  if (
    q.includes("experience") ||
    q.includes("company") ||
    q.includes("prix") ||
    q.includes("job") ||
    q.includes("role") ||
    q.includes("current")
  ) {
    return KNOWLEDGE_RESPONSES.experience;
  }

  // Education / College / Degree / University
  if (
    q.includes("education") ||
    q.includes("degree") ||
    q.includes("college") ||
    q.includes("msc") ||
    q.includes("bsc") ||
    q.includes("study") ||
    q.includes("academic") ||
    q.includes("functionup")
  ) {
    return KNOWLEDGE_RESPONSES.education;
  }

  // Certificates / Awards / Achievements
  if (
    q.includes("certificate") ||
    q.includes("award") ||
    q.includes("achievement") ||
    q.includes("competition") ||
    q.includes("top coder")
  ) {
    return KNOWLEDGE_RESPONSES.certificates;
  }

  // About / Bio / Who is
  if (
    q.includes("about") ||
    q.includes("who is") ||
    q.includes("who are you") ||
    q.includes("vaibhav") ||
    q.includes("introduce") ||
    q.includes("bio")
  ) {
    return KNOWLEDGE_RESPONSES.about;
  }

  // Fallback response with helpful hints
  return `I don't have a specific answer for that yet, but I can tell you all about Vaibhav's:

• **Technical Skills** (React, Next.js, .NET, Node.js, C#, SQL Server)
• **Featured Projects** (HireLink, Astro Straits, Veltrix, Nexora)
• **Work Experience** (Software Developer at Prix Corporation)
• **Education & Certifications** (M.Sc CS, Top Coder 1st Rank)
• **Contact Information** (Email, LinkedIn, GitHub)

Try clicking one of the suggested prompts or ask about any of these topics!`;
}
