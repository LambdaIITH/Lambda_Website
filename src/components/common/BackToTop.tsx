"use client";

import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[7vw] right-[3vw] md:bottom-[13vh] md:right-[3vw] bg-[#1E0A2E] border-2 border-white/20 text-white px-[4vw] py-[2vh] sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] rounded-lg hover:bg-[#2D0F47] hover:border-white/40 transition-all flex items-center gap-[2vw] md:gap-[1vw] lg:gap-[0.5vw] text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[0.9vw] font-medium cursor-pointer z-50 shadow-lg ${
        showBackToTop
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[2vh] pointer-events-none"
      }`}
      aria-label="Back to Top"
    >
      Back to Top
      <ChevronUp className="w-[4.5vw] h-[4.5vw] sm:w-[3.5vw] sm:h-[3.5vw] md:w-[2vw] md:h-[2vw] lg:w-[1.2vw] lg:h-[1.2vw]" />
    </button>
  );
}
