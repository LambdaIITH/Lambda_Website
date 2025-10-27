import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Lambda - IITH",
  description: "Made by Lambda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon_assets/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon_assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon_assets/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="favicon_assets/favicon.ico"
        />
        <link rel="manifest" href="favicon_assets/site.webmanifest" />
      </Head>
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
