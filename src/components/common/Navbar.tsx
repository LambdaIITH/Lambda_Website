"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const path = usePathname();
  if (!path) return null;

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
  ];

  // const rightIcons = [
  //   { src: "/navbar_assets/search_icon.svg", alt: "Search Icon"},
  //   { src: "/navbar_assets/network_icon.svg", alt: "Network Icon", href: "#" },
    // {
    //   src: "/navbar_assets/dark_mode_icon.svg",
    //   alt: "Dark Mode Icon",
    //   href: "#",
    // },
  // ];

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    const elements = document.querySelectorAll(
      "p, span, h1, h2, h3, h4, li"
    );

    for (const el of elements) {
      if (
        el.textContent &&
        el.textContent.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("ring-2", "ring-purple-400");

        setTimeout(() => {
          el.classList.remove("ring-2", "ring-purple-400");
        }, 2000);

        break;
      }
    }
  };

  return (
    <nav>
      {/* main nav container */}
      <div
        className="fixed top-2 left-1/2 -translate-x-1/2
             flex justify-between items-center
             w-[75vw] h-[9vh] min-h-[50px] max-h-[70px]
             bg-linear-to-r from-[rgba(66,0,100,0.75)] to-[rgba(40,0,80,0.75)]
             text-white rounded-3xl z-50
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
              // priority
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
                  className="relative px-[0.9vw] py-[0.3vw] rounded-2xl
                            transition-all duration-300
                            hover:bg-white/20 hover:ring-1 hover:ring-white/30 cursor-pointer"
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white rounded-2xl"
                      transition={{
                        type: "spring",
                        stiffness: 140,
                        damping: 18,
                      }}
                    />
                  )}

                  <Link
                    href={link.href}
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive
                          ? "text-black font-semibold tracking-wider"
                          : "text-white font-medium"

                    }`}
                    style={{
                      fontSize: "clamp(0.8rem, 0.9vw, 1rem)",
                    }}
                  >
                    {link.name}
                  </Link>
                </li>

              );
            })}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
              {/* SEARCH INPUT */}
              <AnimatePresence>
                {searchOpen && (
                  <motion.input
                    autoFocus
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "14rem", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSearch();
                      if (e.key === "Escape") setSearchOpen(false);
                    }}
                    placeholder="Search on page..."
                    className="px-4 py-2 rounded-xl bg-white/20
                    text-white placeholder-white/60 outline-none
                    border border-white/20"
                  />
                )}
              </AnimatePresence>

              {/* SEARCH ICON */}
              <Image
                src="/navbar_assets/search_icon.svg"
                alt="Search"
                width={22}
                height={22}
                className="cursor-pointer"
                onClick={() => setSearchOpen((prev) => !prev)}
              />

              <Image
                src="/navbar_assets/network_icon.svg"
                alt="Network"
                width={22}
                height={22}
                className="cursor-default"
              />


              {/* HAMBURGER (MOBILE) */}
              <button
                className="lg:hidden flex flex-col gap-1"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <span className="w-6 h-0.5 bg-white" />
                <span className="w-6 h-0.5 bg-white" />
                <span className="w-6 h-0.5 bg-white" />
              </button>
            </div>
          </div>
          {/* hamburger (mobile only) */}
          {/* <button
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
          </button> */}
        {/* </div> */}
      {/* </div> */}

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
             top-[calc(6vh+2.5rem)] sm:top-[calc(6vh+3rem)] md:top-[calc(6vh+3.5rem)]
             w-[90vw] sm:w-[80vw] md:w-[60vw]
             text-white rounded-3xl
             flex flex-col items-center p-4 z-40
             bg-linear-to-r from-[rgba(66,0,100,0.75)] to-[rgba(40,0,80,0.75)]
             shadow-[0_8px_32px_rgba(0,0,0,0.37)]
             backdrop-blur-xl border border-[rgba(255,255,255,0.18)]"
          >
            {navLinks.map((link) => {
              const isActive = path === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 w-full text-center rounded-xl transition-all
                    hover:bg-white/20 hover:ring-1 hover:ring-white/30
                    ${isActive ? "bg-white text-black font-bold" : "text-white"}
                  `}

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
