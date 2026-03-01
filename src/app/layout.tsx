import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ConsoleArt from "@/components/common/ConsoleArt";
import { IntroProvider } from "./context/introContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <IntroProvider>
          <ConsoleArt />
          <Navbar />
          {children}
          <Footer />
        </IntroProvider>
      </body>
    </html>
  );
}
