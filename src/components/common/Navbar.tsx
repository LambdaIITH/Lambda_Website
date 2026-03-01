"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blogs" },
    { href: "/projects", label: "Projects" },
    { href: "/team", label: "Team" },
  ];

  return (
    <div className="bg-zinc-900">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`max-w-6xl mx-auto transition-all duration-500 ease-out ${
            scrolled ? "px-4 md:px-6" : "px-6 md:px-10"
          }`}
        >
          <div
            className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-4xl transition-all duration-500 ease-out ${
              scrolled
                ? "shadow-lg shadow-black/20"
                : "shadow-md shadow-black/10"
            }`}
          >
            <div className="px-6 md:px-8 py-4 flex justify-between items-center">
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

              {/* Desktop Nav Links */}
              <ul className="hidden md:flex gap-6 lg:gap-10 list-none">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm tracking-wide transition-opacity hover:opacity-70 text-white relative inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white p-2 hover:bg-white/10 transition-all"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-white/10 px-6 pb-4">
                <ul className="flex flex-col gap-1 pt-4">
                  {navLinks.map((link, index) => (
                    <li
                      key={link.href}
                      className={`transform transition-all duration-300 ease-out ${
                        mobileMenuOpen
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-4 opacity-0"
                      }`}
                      style={{
                        transitionDelay: mobileMenuOpen
                          ? `${index * 50}ms`
                          : "0ms",
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-3 text-sm tracking-wide transition-opacity hover:opacity-70 text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li
                    className={`pt-2 transform transition-all duration-300 ease-out ${
                      mobileMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: mobileMenuOpen
                        ? `${navLinks.length * 50}ms`
                        : "0ms",
                    }}
                  >
                    <a
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-center py-3 bg-white/10 border border-white/20 rounded-full text-sm transition-all hover:bg-white/20 hover:border-white/30 text-white"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
