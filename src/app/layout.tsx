import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";
import CustomCursor from "@/components/common/CustomCursor";
import ConsoleTitle from "@/components/common/ConsoleTitle";

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
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased flex flex-col min-h-screen bg-[#0E0018] text-white`}
      >
        <ConsoleTitle />
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
