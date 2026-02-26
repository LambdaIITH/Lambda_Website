"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "./Container";

type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]

async function fetchStatus(): Promise<string> {
  try {
    const response = await fetch(
      "https://api.pulsetic.com/public/status/status.iith.dev",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: null }),
        // prevent caching if you want live status
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    const monitors = data?.monitors;

    if (monitors && monitors.length > 0) {
      const allMonitorsUp = monitors.every(
        (monitor: { status: string }) => monitor.status === "online"
      );

      return allMonitorsUp
        ? "All systems operational"
        : "Some systems are down";
    } else {
      return "No monitors found.";
    }
  } catch (error) {
    console.error("Error fetching status:", error);
    return "Error retrieving status.";
  }
}

export default function Footer() {
  const [status, setStatus] = useState("Loading status...");

  useEffect(() => {
    fetchStatus().then(setStatus);
  }, []);

  let statusColor = "";
  if (status === "All systems operational") {
    statusColor = "bg-green-500";
  } else if (status === "Some systems are down") {
    statusColor = "bg-yellow-500";
  } else {
    statusColor = "bg-red-500";
  }
  
  const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "web@iith.dev",
    HREF: "mailto:web@iith.dev",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "LambdaIITH",
    HREF: "https://github.com/LambdaIITH",
  },
  {
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "lambdaiith",
    HREF: "https://instagram.com/lambdaiith",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "lambda-iith-hyderabad",
    HREF: "https://www.linkedin.com/company/lambda-iit-hyderabad",
  },
];

  return (
    <footer className="relative bg-white dark:bg-black">
      <div className="animate">
        {/* Back to top */}
        <section className="py-5">
          <Container size="md">
            <div className="flex items-center justify-center sm:justify-end">
              <button
                id="back-to-top"
                aria-label="Back to top of page"
                className="group flex w-fit p-1.5 gap-1.5 text-sm items-center border rounded hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-current group-hover:stroke-black group-hover:dark:stroke-white rotate-90"
                >
                  <line
                    x1="19"
                    y1="12"
                    x2="5"
                    y2="12"
                    className="scale-x-0 group-hover:scale-x-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
                  />
                  <polyline
                    points="12 19 5 12 12 5"
                    className="translate-x-1 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
                  />
                </svg>
                <div className="w-full group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out">
                  Back to top
                </div>
              </button>
            </div>
          </Container>
        </section>

        {/* Status */}
        <section className="py-5 overflow-hidden whitespace-nowrap border-t border-black/10 dark:border-white/25">
          <Container size="md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col items-center sm:items-start">
                <a
                  href="/"
                  className="flex gap-1 items-center w-fit font-semibold text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"
                >
                  <Image
                    src="/footer_assets/lambda_footer_logo.png"
                    alt="Lambda IITH Logo"
                    width={32}
                    height={32}
                  />
                  <span>{"Lambda IITH"}</span>
                </a>
              </div>

              <a href="https://status.iith.dev" target="_blank">
                <div className="flex gap-2 justify-center sm:justify-end items-center">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300" />
                    <span
                      className={`relative inline-flex rounded-full h-3 w-3 ${statusColor}`}
                    />
                  </span>
                  {status}
                </div>
              </a>
            </div>
          </Container>
        </section>

        {/* Legal + Social */}
        <section className="py-5 overflow-hidden whitespace-nowrap border-t border-black/10 dark:border-white/25">
          <Container size="md">
            <div className="h-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="order-2 sm:order-1 flex flex-col items-center justify-center sm:items-start">
                <div className="legal">
                  <a
                    href="/legal/terms"
                    className="text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"
                  >
                    Terms
                  </a>{" "}
                  |{" "}
                  <a
                    href="/legal/privacy"
                    className="text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"
                  >
                    Privacy
                  </a>{" "}
                  |{" "}
                  <a
                    href="/contact-us"
                    className="text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="text-sm mt-2">
                  &copy; {new Date().getFullYear()} | All rights reserved
                </div>
              </div>

              <div className="order-1 sm:order-2 flex justify-center sm:justify-end">
                <div className="flex flex-wrap gap-1 items-center justify-center">
                  {SOCIALS.map((SOCIAL: any) => (
                    <a
                      key={SOCIAL.NAME}
                      href={SOCIAL.HREF}
                      target="_blank"
                      aria-label={`Lambda IITH on ${SOCIAL.NAME}`}
                      className="group size-10 rounded-full p-2 items-center justify-center hover:bg-black/5 dark:hover:bg-white/20 blend"
                    >
                      <svg className="size-full fill-current group-hover:fill-black group-hover:dark:fill-white blend">
                        <use href={`/footer_assets/social.svg#${SOCIAL.ICON}`} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </footer>
  );
}