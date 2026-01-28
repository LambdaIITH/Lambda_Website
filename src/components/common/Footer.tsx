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
            headers: {
              "Content-Type": "application/json",
            },
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
      } catch (err) {
        setStatus("Status unavailable");
        setStatusColor("bg-red-500");
      }
    }

    fetchStatus();
  }, []);


  return (
    <footer>
      <div className="bg-[#28013C] w-full flex flex-col items-center gap-4 px-8 py-6">
        <div className="flex w-[92vw]">
          <div className="mr-auto">
            <Image
              src="footer_assets/lambda_footer_logo.svg"
              alt="Lambda Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "12vw",
                height: "auto",
              }}
              priority
            />
          </div>
          <a
            href="https://status.iith.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-2 text-[0.9vw] hover:opacity-80 transition-opacity"
          >
            <span className="relative flex h-3 w-3">
              <span
                className={`absolute inline-flex h-full w-full rounded-full ${statusColor} opacity-75 animate-ping`}
              />
              <span
                className={`relative inline-flex h-3 w-3 rounded-full ${statusColor}`}
              />
            </span>
            <span>{status}</span>
          </a>
        </div>

        <div className="border-b border-white/60 w-[92vw]"></div>

        <div className="w-[92vw] flex justify-between items-center">
          <div className="text-[0.8vw]">&copy; 2025 | All rights reserved</div>

          <div className="flex text-[0.9vw]">
            <div className="px-[1.5vw]">
              <Link href="#">Terms</Link>
            </div>
            |
            <div className="px-[1.5vw]">
              <Link href="#">Privacy</Link>
            </div>
            |
            <div className="px-[1.5vw]">
              <Link href="#">Contact Us</Link>
            </div>
          </div>

          <div className="flex justify-end items-center gap-[1vw]">
            <a
              href="mailto:lambda@iith.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <Mail className="w-[1.5vw] h-[1.5vw]" />
            </a>

            <a
              href="https://github.com/LambdaIITH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <Github className="w-[1.5vw] h-[1.5vw]" />
            </a>

            <a
              href="https://instagram.com/lambdaiith"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <Instagram className="w-[1.5vw] h-[1.5vw]" />
            </a>

            <a
              href="https://www.linkedin.com/company/lambda-iit-hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <Linkedin className="w-[1.5vw] h-[1.5vw]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
