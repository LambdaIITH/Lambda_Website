// components/IntroOverlay.tsx
"use client";

import { useEffect } from "react";
import { useIntro } from "@/app/context/introContext";

export default function IntroOverlay() {
    const { setIntroFinished } = useIntro();

    useEffect(() => {
        const t = setTimeout(() => {
            setIntroFinished(true);
        }, 3200); // total intro duration

        return () => clearTimeout(t);
    }, [setIntroFinished]);

    return (
        <div className="fixed w-full overflow-hidden inset-0 z-9999 flex items-center justify-center bg-[#6226A2] md:h-screen">
            <div className="relative w-full h-24 flex items-center justify-center">
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
