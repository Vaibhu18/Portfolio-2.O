import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./_components/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Portfolio ( Vaibhav Shinde )",
  description: "Vaibhav Shinde Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} antialiased bg-white dark:bg-black`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
