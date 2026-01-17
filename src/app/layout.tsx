import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";
import ConsoleTitle from "@/components/common/ConsoleTitle";
import { ThemeProvider } from "@/contexts/ThemeContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Lambda - IITH",
  description: "Made by Lambda",
  icons: {
    icon: [
      {
        url: "/favicon_assets/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_assets/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      { url: "/favicon_assets/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/favicon_assets/apple-touch-icon.png",
    other: {
      rel: "manifest",
      url: "/favicon_assets/site.webmanifest",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} antialiased flex flex-col min-h-screen
  bg-white text-black
  dark:bg-[#0E0018] dark:text-white
  transition-colors duration-300`}
      >
        <ThemeProvider>
          <ConsoleTitle />
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
