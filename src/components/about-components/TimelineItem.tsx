"use client";

import { useEffect, useRef, useState } from "react";

export default function TimelineItem({
  phase,
  title,
  description,
  isLeft,
  isActive = true,
}: {
  phase: string;
  title: string;
  description: string;
  isLeft: boolean;
  isActive?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  if (isLeft) {
    // Left layout: Phase number on left, content on right
    return (
      <div ref={itemRef} className="relative flex items-center justify-between">
        {/* Phase Number - Left Side */}
        <div className="w-5/12 text-right pr-12 hidden md:block">
          <h4
            className={`text-3xl font-extrabold ${
              isActive ? "text-primary/80" : "text-primary/30"
            } ${isVisible ? "timeline-item-left" : "opacity-0"}`}
          >
            {phase}
          </h4>
        </div>

        {/* Timeline Dot */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 size-4 ${
            isActive ? "bg-primary dot-glow" : "bg-primary/40"
          } rounded-full z-10 border-4 border-background-dark ${
            isVisible ? "timeline-dot" : "opacity-0"
          }`}
        />

        {/* Content - Right Side */}
        <div className="w-full md:w-5/12 pl-12 md:pl-12">
          <span className="md:hidden text-primary font-bold text-xl block mb-2">
            {phase}
          </span>
          <div
            className={`${
              isVisible ? "timeline-item-right" : "opacity-0"
            }`}
          >
            <h5 className="text-xl font-semibold mb-3">{title}</h5>
            <p className="text-white/50 text-sm leading-relaxed font-light">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    // Right layout: Content on left, phase number on right
    return (
      <div ref={itemRef} className="relative flex items-center justify-between">
        {/* Content - Left Side */}
        <div className="w-full md:w-5/12 pr-12 text-right order-2 md:order-1">
          <span className="md:hidden text-primary font-bold text-xl block mb-2">
            {phase}
          </span>
          <div
            className={`${
              isVisible ? "timeline-item-left" : "opacity-0"
            }`}
          >
            <h5 className="text-xl font-semibold mb-3">{title}</h5>
            <p className="text-white/50 text-sm leading-relaxed font-light">
              {description}
            </p>
          </div>
        </div>

        {/* Timeline Dot */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 size-4 ${
            isActive ? "bg-primary dot-glow" : "bg-primary/40"
          } rounded-full z-10 border-4 border-background-dark order-1 md:order-2 ${
            isVisible ? "timeline-dot" : "opacity-0"
          }`}
        />

        {/* Phase Number - Right Side */}
        <div className="w-5/12 pl-12 hidden md:block order-3">
          <h4
            className={`text-3xl font-extrabold ${
              isActive ? "text-primary/80" : "text-primary/30"
            } ${isVisible ? "timeline-item-right" : "opacity-0"}`}
          >
            {phase}
          </h4>
        </div>
      </div>
    );
  }
}
