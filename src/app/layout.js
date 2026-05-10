import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata = {
  metadataBase: new URL("https://itsvcode.vercel.app"),

  title: {
    default: "Vaibhav Shinde – Full Stack Developer",
    template: "%s | Vaibhav Shinde",
  },

  description:
    "Vaibhav Shinde (vcode) is a Full Stack Developer and AI Engineer building scalable web applications using Next.js, Node.js, and MongoDB. Explore projects, certifications, and technical expertise.",

  keywords: [
    "Vaibhav Shinde",
    "vcode",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Node.js Developer",
    "MongoDB",
    "Portfolio",
    "Software Engineer",
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
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${inter.variable} ${space.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-1">{children}</main>
          <Footer />
          <MenuBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
