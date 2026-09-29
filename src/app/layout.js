import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/chatbot/Chatbot";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // On-screen keyboard resizes the layout instead of sliding the page under the fixed header
  interactiveWidget: "resizes-content",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata = {
  metadataBase: new URL("https://itsvcode.vercel.app"),

  title: {
    default: "Vaibhav Shinde – Full Stack Developer",
    template: "%s | Vaibhav Shinde",
  },

  description:
    "Vaibhav Shinde (vcode) is a Full Stack Developer building scalable web applications using Next.js, React, C#, .NET, Node.js, and MongoDB. Explore interactive projects, enterprise experience, and technical achievements.",

  keywords: [
    "Vaibhav Shinde",
    "vcode",
    "Full Stack Developer",
    "Software Developer",
    "Next.js Developer",
    "React Developer",
    "DotNet Developer",
    "C# Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "MongoDB",
    "SQL Server",
    "Portfolio",
    "Full Stack Portfolio",
  ],

  authors: [
    {
      name: "Vaibhav Shinde",
      url: "https://itsvcode.vercel.app",
    },
  ],

  creator: "Vaibhav Shinde",
  publisher: "Vaibhav Shinde",
  category: "technology",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/brand/apple-icon.png", sizes: "180x180" },
  },

  openGraph: {
    title: "Vaibhav Shinde – Full Stack Developer",
    description:
      "Building clean, scalable web apps with a focus on performance and developer experience. Explore interactive projects, enterprise experience, and certifications.",
    url: "https://itsvcode.vercel.app",
    siteName: "Vaibhav Shinde Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "vcode.developer — Crafting Modern Software Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Shinde – Full Stack Developer",
    description:
      "Building clean, scalable web apps with a focus on performance and developer experience.",
    creator: "@Vaibhu18",
    images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://itsvcode.vercel.app",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://itsvcode.vercel.app/#person",
        name: "Vaibhav Shinde",
        alternateName: "vcode",
        jobTitle: "Full Stack Developer",
        worksFor: {
          "@type": "Organization",
          name: "Prix Corporation",
        },
        url: "https://itsvcode.vercel.app",
        image: "https://itsvcode.vercel.app/vaibhav.jpeg",
        sameAs: [
          "https://github.com/Vaibhu18",
          "https://www.linkedin.com/in/vaibhu18",
          "https://leetcode.com/vaibhu18/",
        ],
        knowsAbout: [
          "Full Stack Development",
          "React",
          "Next.js",
          "Node.js",
          "C#",
          ".NET Core",
          "MongoDB",
          "SQL Server",
          "Three.js",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://itsvcode.vercel.app/#website",
        url: "https://itsvcode.vercel.app",
        name: "Vaibhav Shinde Portfolio",
        publisher: {
          "@id": "https://itsvcode.vercel.app/#person",
        },
      },
    ],
  };

  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative flex min-h-full flex-col bg-background font-sans text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="relative flex-1">
            {children}
          </main>
          <Footer />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
