"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  phase: string;
  title: string;
  description: string;
  isLeft: boolean;
  isActive?: boolean;
}

export default function TimelineItem({
  phase,
  title,
  description,
  isLeft,
  isActive = true,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);


  useEffect(() => {
    if(!hasMounted)return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const el = itemRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasMounted]);

  if (isLeft) {
    return (
      <div ref={itemRef} className="relative flex items-start flex-col md:flex-row
          md:justify-between w-full">
        {/* Phase Number (desktop left) */}
        <div className="hidden md:block w-5/12 text-right pr-12">
          <h4
            className={`text-3xl font-extrabold ${isActive ? "text-primary/80" : "text-primary/30"
              } ${isVisible && hasMounted ? "timeline-item-left" : "opacity-0"}`}
          >
            {phase}
          </h4>
        </div>

        {/* Timeline Dot */}
        <div className={`absolute top-6 left-4 md:left-1/2 md:-translate-x-1/2 size-4 rounded-full border-4 border-background-dark z-10
            ${isActive ? "bg-primary dot-glow" : "bg-primary/40"}
            ${isVisible&&hasMounted ? "timeline-dot" : "opacity-0"}`}/>

        {/* Content (FULL WIDTH ON MOBILE, HALF ON DESKTOP) */}
        <div className="w-full md:w-5/12 pl-12 md:pl-12">
          {/* Phase (mobile only) */}
          <span className={`md:hidden ${isActive ? "text-primary/80" : "text-primary/30"}  font-bold text-xl mb-2 block`}>
            {phase}
          </span>

          <div className={isVisible&&hasMounted ? "timeline-item-right" : "opacity-0"}>
            <h5 className="text-xl font-semibold mb-3 text-left">
              {title}
            </h5>
            <p className="text-white/50 text-sm leading-relaxed font-light text-left">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={itemRef} className="relative flex items-start flex-col md:flex-row md:justify-between w-full">
      {/* Content (FULL WIDTH ON MOBILE, HALF ON DESKTOP) */}
      <div className="w-full md:w-5/12 pl-12 md:pr-12 md:text-right order-2 md:order-1">
        {/* Phase (mobile only) */}
        <span className={`md:hidden ${isActive ? "text-primary/80" : "text-primary/30"}  font-bold text-xl mb-2 block`}>
          {phase}
        </span>

        <div className={isVisible && hasMounted ? "timeline-item-left" : "opacity-0"}>
          <h5 className="text-xl font-semibold mb-3 md:text-right text-left">
            {title}
          </h5>
          <p className="text-white/50 text-sm leading-relaxed font-light md:text-right text-left">
            {description}
          </p>
        </div>
      </div>

      {/* Timeline Dot */}
      <div className={`absolute top-6 left-4 md:left-1/2 md:-translate-x-1/2 size-4 rounded-full border-4 border-background-dark z-10
          ${isActive ? "bg-primary dot-glow" : "bg-primary/40"}
          ${isVisible && hasMounted ? "timeline-dot" : "opacity-0"}`}/>

      {/* Phase Number (desktop right) */}
      <div className="hidden md:block w-5/12 pl-12 order-3">
        <h4
          className={`text-3xl font-extrabold ${isActive ? "text-primary/80" : "text-primary/30"} 
          ${isVisible && hasMounted ? "timeline-item-right" : "opacity-0"}`}
        >
          {phase}
        </h4>
      </div>
    </div>
  );
}
