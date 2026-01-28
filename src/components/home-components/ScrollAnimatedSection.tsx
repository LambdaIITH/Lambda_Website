// components/ScrollAnimatedSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useIntro } from "@/app/context/introContext";

export default function ScrollAnimatedSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { introFinished } = useIntro();

  useEffect(() => {
    if (!introFinished) return; // 🚫 BLOCK animations

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [introFinished]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}
