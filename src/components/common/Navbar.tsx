"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  if (!path) return null;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
  ];

  const rightIcons = [
    { src: "navbar_assets/search_icon.svg", alt: "Search Icon", href: "#" },
    { src: "navbar_assets/network_icon.svg", alt: "Network Icon", href: "#" },
    {
      src: "navbar_assets/dark_mode_icon.svg",
      alt: "Dark Mode Icon",
      href: "#",
    },
  ];

  return (
    <nav className="fixed top-[2vw] sm:top-[1.5vw] lg:top-[1vw] left-1/2 -translate-x-1/2 w-[95vw] z-50">
      <div className="flex justify-between items-center h-[12vw] sm:h-[10vw] md:h-[8vw] lg:h-[4vw] bg-[#420064] text-white rounded-full shadow-2xl backdrop-blur-xl px-[5vw] sm:px-[4vw] md:px-[3vw] lg:px-[2vw]">
        {/* left logo */}
        <div className="flex items-center gap-[2vw] sm:gap-[1.5vw] md:gap-[1vw] lg:gap-[0.5vw]">
          <Image
            src="navbar_assets/lambda_logo.svg"
            alt="Lambda Logo"
            width={20}
            height={20}
            className="w-[5vw] sm:w-[3.5vw] md:w-[2vw] lg:w-[1.2vw] h-auto"
            priority
          />
          <span className="font-semibold text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[0.9vw]">
            Lambda IITH
          </span>
        </div>

        {/* center navigation */}
        <div className="hidden md:flex justify-center items-center h-full">
          <ul className="relative flex justify-around items-center gap-[2vw] md:gap-[1.5vw] lg:gap-[1.2vw]">
            {navLinks.map((link) => {
              const isActive = path === link.href;
              return (
                <li
                  key={link.href}
                  className="relative px-[1.5vw] py-[0.5vw] md:px-[1.2vw] md:py-[0.4vw] lg:px-[0.9vw] lg:py-[0.3vw] flex justify-center items-center"
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-[#D6AFFF] rounded-[2vw] md:rounded-[1.5vw] lg:rounded-[1vw]"
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 20,
                        mass: 0.6,
                      }}
                    />
                  )}
                  <Link
                    href={link.href}
                    className={`relative z-10 transition-colors duration-300 text-[1.8vw] md:text-[1.3vw] lg:text-[1vw] ${
                      isActive ? "text-black" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* right icons */}
        <div className="flex items-center gap-[4vw] sm:gap-[3vw] md:gap-[2vw] lg:gap-[1.5vw]">
          {/* Mobile menu button */}
          {rightIcons.map((icon) => (
            <Link
              key={icon.alt}
              href={icon.href}
              className="flex items-center justify-center"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={20}
                height={20}
                className="w-[5vw] sm:w-[3.5vw] md:w-[2vw] lg:w-[1.3vw] h-auto"
                priority
              />
            </Link>
          ))}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-[1vw] w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw]"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-[5vw] sm:w-[3.5vw] h-[0.5vw] sm:h-[0.4vw] bg-white rounded-full transition-transform duration-300 ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-[1.5vw] sm:translate-y-[1.1vw]"
                  : ""
              }`}
            />
            <span
              className={`block w-[5vw] sm:w-[3.5vw] h-[0.5vw] sm:h-[0.4vw] bg-white rounded-full transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-[5vw] sm:w-[3.5vw] h-[0.5vw] sm:h-[0.4vw] bg-white rounded-full transition-transform duration-300 ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-[1.5vw] sm:-translate-y-[1.1vw]"
                  : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[14vw] sm:top-[12vw] left-1/2 -translate-x-1/2 w-[90vw] bg-[#420064] rounded-[3vw] shadow-2xl backdrop-blur-xl overflow-hidden"
          >
            <ul className="flex flex-col py-[3vw] sm:py-[2vw]">
              {navLinks.map((link) => {
                const isActive = path === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-[6vw] py-[3vw] sm:px-[5vw] sm:py-[2.5vw] text-[4vw] sm:text-[3vw] transition-colors duration-300 ${
                        isActive
                          ? "bg-[#D6AFFF] text-black font-semibold"
                          : "text-white hover:bg-[#5a0a87]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
