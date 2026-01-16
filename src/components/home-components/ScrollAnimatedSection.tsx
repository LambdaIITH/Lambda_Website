"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

export default function ScrollAnimatedSection({
    children,
}: {
    children: ReactNode;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // fire once, stop observing
                }
            },
            {
                threshold: 0,
                rootMargin: "0px 0px -40% 0px",
            }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out
        ${isVisible ? "animate-in" : "opacity-0 translate-y-8"}
      `}
        >
            {children}
        </div>
    );
}
