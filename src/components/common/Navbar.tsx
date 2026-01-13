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
      <div className="flex justify-between items-center h-[12vw] sm:h-[10vw] md:h-[8vw] lg:h-[4vw] bg-[#420064] text-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl px-[5vw] sm:px-[4vw] md:px-[3vw] lg:px-[2vw]">
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
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm -z-10"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="md:hidden absolute top-[14vw] sm:top-[12vw] left-1/2 -translate-x-1/2 w-[90vw] bg-linear-to-br from-[#5a0a87] to-[#420064] rounded-[4vw] sm:rounded-[3vw] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden border border-[#7B3FAD]/30"
            >
              <div className="p-[4vw] sm:p-[3vw]">
                <div className="flex items-center justify-between mb-[4vw] sm:mb-[3vw] pb-[3vw] sm:pb-[2vw] border-b border-white/10">
                  <span className="text-white/60 text-[3.5vw] sm:text-[2.5vw] font-medium">
                    Navigation
                  </span>
                </div>

                <ul className="flex flex-col gap-[1vw]">
                  {navLinks.map((link, index) => {
                    const isActive = path === link.href;
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`group relative block px-[5vw] py-[3.5vw] sm:px-[4vw] sm:py-[2.5vw] text-[4.5vw] sm:text-[3.5vw] rounded-[2.5vw] sm:rounded-[2vw] transition-all duration-300 overflow-hidden ${
                            isActive
                              ? "bg-[#D6AFFF] text-black font-semibold shadow-lg"
                              : "text-white hover:bg-white/10"
                          }`}
                        >
                          <span className="relative z-10 flex items-center justify-between">
                            {link.name}
                            {isActive && (
                              <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.2 }}
                                className="w-[2vw] h-[2vw] sm:w-[1.5vw] sm:h-[1.5vw] bg-black rounded-full"
                              />
                            )}
                          </span>
                          {!isActive && (
                            <motion.div
                              className="absolute inset-0 bg-linear-to-r from-[#C49EE8]/0 via-[#C49EE8]/10 to-[#C49EE8]/0"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.5 }}
                            />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
