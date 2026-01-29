"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Github, Instagram, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [status, setStatus] = useState("Checking status...");
  const [statusColor, setStatusColor] = useState("bg-gray-400");

  useEffect(() => {
    async function fetchStatus() {
      try {
        const response = await fetch(
          "https://api.pulsetic.com/public/status/status.iith.dev",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password: null }),
          }
        );

        const json = await response.json();
        const monitors = json?.data?.monitors ?? [];

        if (monitors.length === 0) {
          setStatus("No monitors found");
          setStatusColor("bg-red-500");
          return;
        }

        const allUp = monitors.every(
          (m: { status: string }) => m.status === "online"
        );

        if (allUp) {
          setStatus("All systems operational");
          setStatusColor("bg-green-500");
        } else {
          setStatus("Some systems are down");
          setStatusColor("bg-yellow-500");
        }
      } catch {
        setStatus("Status unavailable");
        setStatusColor("bg-red-500");
      }
    }

    fetchStatus();
  }, []);

  return (
    <footer className="bg-[#28013C] w-full">
      {/* Reduced padding on mobile */}
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-8 flex flex-col gap-4 sm:gap-6">

        {/* TOP ROW — ALWAYS ROW */}
        <div className="flex items-center justify-between">
          {/* LEFT: LOGO */}
          <div className="flex items-center gap-2">
            <Image
              src="/navbar_assets/lambda_logo.svg"
              alt="Lambda"
              width={26}
              height={26}
            />
            <span className="text-white font-semibold text-sm sm:text-base">
              Lambda
            </span>
          </div>

          {/* RIGHT: SYSTEM STATUS (STAYS RIGHT) */}
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className={`w-2 h-2 rounded-full ${statusColor}`} />
            <span className="text-white/90 whitespace-nowrap">
              {status}
            </span>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-b border-white/50 w-full"></div>

        {/* BOTTOM ROW — STACK ON MOBILE */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">

          {/* COPYRIGHT */}
          <div className="md:mr-auto text-xs sm:text-sm text-white text-center md:text-left">
            © 2025 | All rights reserved
          </div>

          {/* LINKS */}
          <div className="flex items-center text-xs sm:text-sm text-white">
            <div className="px-2 sm:px-4">
              <Link href="#">Terms</Link>
            </div>
            |
            <div className="px-2 sm:px-4">
              <Link href="#">Privacy</Link>
            </div>
            |
            <div className="px-2 sm:px-4">
              <Link href="#">Contact Us</Link>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="md:ml-auto flex gap-3 sm:gap-5">
            <a
              href="mailto:lambda@iith.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <Mail className="w-4 h-4 sm:w-6 sm:h-6" />
            </a>

            <a
              href="https://github.com/LambdaIITH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <Github className="w-4 h-4 sm:w-6 sm:h-6" />
            </a>

            <a
              href="https://instagram.com/lambdaiith"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <Instagram className="w-4 h-4 sm:w-6 sm:h-6" />
            </a>

            <a
              href="https://www.linkedin.com/company/lambda-iit-hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <Linkedin className="w-4 h-4 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
