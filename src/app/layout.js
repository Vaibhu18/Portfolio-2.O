import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL("https://vaibhavshinde.vercel.app"),
  title: "Vaibhav Shinde – Full Stack Developer & AI Innovator",
  description:
    "I'm Vaibhav Shinde (vcode), a Full Stack Developer and AI enthusiast building intelligent web apps with Next.js, Node.js, and MongoDB. Explore my projects, skills, and journey.",
  keywords: [
    "Vaibhav Shinde",
    "vcode",
    "Full Stack Developer",
    "Next.js Developer",
    "AI Developer",
    "MERN Stack",
    "JavaScript",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Vaibhav Shinde", url: "https://vaibhavshinde.vercel.app" }],
  creator: "Vaibhav Shinde",
  publisher: "Vaibhav Shinde",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vaibhav Shinde – Full Stack Developer & AI Innovator",
    description:
      "Explore the portfolio of Vaibhav Shinde (vcode) — Full Stack Developer, AI Builder, and Creator of smart web experiences.",
    url: "https://vaibhavshinde.vercel.app",
    siteName: "Vaibhav Shinde Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Vaibhav Shinde – Full Stack Developer & AI Innovator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
