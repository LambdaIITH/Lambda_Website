// components/IntroOverlay.tsx
"use client";

import { useEffect, useState } from "react";
import { useIntro } from "@/app/context/introContext";

export default function IntroOverlay() {
  const { setIntroFinished } = useIntro();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3200);

    const finishTimer = setTimeout(() => {
      setIntroFinished(true);
    }, 3700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [setIntroFinished]);

  return (
    <div
      className={`fixed w-full overflow-hidden inset-0 z-9999 flex items-center justify-center bg-[#3D1A5F] md:h-screen transition-opacity duration-500 ease-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ willChange: fadeOut ? "auto" : "opacity" }}
    >
      <div
        className="relative w-full h-24 flex items-center justify-center"
        style={{ transform: "translateZ(0)" }}
      >
        <span className="absolute animate-intro-word delay-0 text-4xl md:text-5xl max-w-[90vw] text-center font-bold text-white">
          Dream.
        </span>
        <span className="absolute animate-intro-word delay-1 text-4xl md:text-5xl max-w-[90vw] text-center font-bold text-white">
          Develop.
        </span>
        <span className="absolute animate-intro-word delay-2 text-4xl md:text-5xl max-w-[90vw] text-center font-bold text-white">
          Do.
        </span>
      </div>
    </div>
  );
}
