"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

export default function Navbar() {
  const path = usePathname();
  if (!path) return null;

  const [menuOpen, setMenuOpen] = useState(false);

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
    <nav className={montserrat.className}>
      {/* main nav container */}
      <div
        className="fixed top-[1.6vh] left-1/2 -translate-x-1/2
             flex justify-between items-center
             w-[95vw] h-[6vh]
             bg-[rgba(66,0,100,0.7)] text-white rounded-full z-50
             shadow-[0_8px_32px_rgba(0,0,0,0.37)]
             backdrop-blur-xl border border-[rgba(255,255,255,0.18)]
             lg:px-[2vw] px-[5vw]"
      >
        {/* left logo */}
        <div className="flex items-center gap-[0.5vw]">
          <Link href="/" className="flex items-center gap-[0.4vw]">
            <Image
              src="navbar_assets/lambda_logo.svg"
              alt="Lambda Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "clamp(15px, 1.2vw, 22px)",
                height: "auto",
              }}
              priority
            />
            <span
              className="font-semibold"
              style={{
                fontSize: "clamp(0.8rem, 0.9vw, 1rem)",
              }}
            >
              Lambda IITH
            </span>
          </Link>
        </div>

        {/* center (desktop only) */}
        <div className="hidden lg:flex justify-center items-center h-full">
          <ul className="relative flex justify-around items-center gap-[1.2vw]">
            {navLinks.map((link) => {
              const isActive = path === link.href;
              return (
                <li
                  key={link.href}
                  className="relative px-[0.9vw] py-[0.3vh] rounded-2xl"
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white rounded-2xl"
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
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive ? "text-black" : ""
                    }`}
                    style={{
                      fontSize: "clamp(1rem, 1.2vw, 1.3rem)",
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* right side */}
        <div className="flex items-center gap-[1.2vh]">
          {/* icons (always visible) */}
          <div className="flex items-center justify-end gap-[3vw] lg:gap-[1.2vw]">
            {rightIcons.map((icon) => (
              <Link
                key={icon.alt}
                href={icon.href}
                className="flex items-center justify-center"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "clamp(16px, 1.3vw, 22px)",
                    height: "auto",
                  }}
                  priority
                />
              </Link>
            ))}
          </div>

          {/* hamburger (mobile only) */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-1"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              className="block w-6 h-0.5 bg-white rounded-full"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-6 h-0.5 bg-white rounded-full"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              className="block w-6 h-0.5 bg-white rounded-full"
            />
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed left-1/2 -translate-x-1/2
             top-[calc(6vh+1.4vw)] sm:top-[calc(6vh+1.6vw)] md:top-[calc(6vh+1.8vw)]
             w-[90vw] sm:w-[80vw] md:w-[60vw]
             text-white rounded-3xl
             flex flex-col items-center p-[1.2vw] z-40
             bg-[rgba(66,0,100,0.7)]
             shadow-[0_8px_32px_rgba(0,0,0,0.37)]
             backdrop-blur-xl border border-[rgba(255,255,255,0.18)]"
          >
            {navLinks.map((link) => {
              const isActive = path === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-[0.6vh] w-full text-center transition-colors text-[1.1vw] ${
                    isActive ? "text-black bg-white/80 rounded-xl" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
