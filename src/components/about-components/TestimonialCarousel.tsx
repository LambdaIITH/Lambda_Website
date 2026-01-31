"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [isPaused, setIsPaused] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [shouldScroll, setShouldScroll] = useState<boolean | null>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Always duplicate testimonials for measurement, but only animate if needed
  const displayTestimonials = [...testimonials, ...testimonials];

  // Measure actual DOM and determine if scrolling is needed
  useEffect(() => {
    const measureAndDecide = () => {
      if (!trackRef.current || !containerRef.current) return;
      
      const containerWidth = containerRef.current.offsetWidth;
      // Total width of all duplicated items
      const fullTrackWidth = trackRef.current.scrollWidth;
      // Width of original items (half of duplicated)
      const originalWidth = fullTrackWidth / 2;
      
      const needsScroll = originalWidth > containerWidth;
      
      setShouldScroll(needsScroll);
      setTrackWidth(originalWidth);
      setIsReady(true);
    };

    // Use requestAnimationFrame to ensure DOM is painted
    const raf = requestAnimationFrame(() => {
      measureAndDecide();
    });

    window.addEventListener("resize", measureAndDecide);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measureAndDecide);
    };
  }, [testimonials.length]);

  // Handle pause on hover/click
  const handlePause = () => {
    if (shouldScroll) {
      setIsPaused(true);
    }
  };

  // Handle resume on mouse leave
  const handleResume = () => {
    setIsPaused(false);
    setActiveCard(null);
  };

  // Handle card click for mobile
  const handleCardClick = (index: number) => {
    if (!shouldScroll) return;
    
    if (activeCard === index) {
      setIsPaused(false);
      setActiveCard(null);
    } else {
      setIsPaused(true);
      setActiveCard(index);
    }
  };

  // Animation duration - 3 seconds per card
  const animationDuration = testimonials.length * 3;

  // Determine which items to actually show
  const itemsToRender = (shouldScroll === false) ? testimonials : displayTestimonials;

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Gradient masks for smooth edges - only show if scrolling */}
      {shouldScroll && (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        </>
      )}

      {/* Scrolling Track */}
      <div
        ref={trackRef}
        className={`flex py-4 ${shouldScroll === false ? "justify-center gap-6 flex-wrap" : ""} ${isPaused ? "testimonial-paused" : ""}`}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        style={{
          opacity: isReady ? 1 : 0,
          transition: "opacity 0.3s ease",
          ...(shouldScroll && trackWidth > 0 ? {
            animation: `testimonial-scroll ${animationDuration}s linear infinite`,
            ["--track-width" as string]: `${trackWidth}px`,
          } : {}),
        }}
      >
        {itemsToRender.map((testimonial, idx) => (
          <div
            key={`${testimonial.name}-${idx}`}
            className={`shrink-0 ${shouldScroll !== false ? "w-[85vw] md:w-[45vw] lg:w-[30vw]" : "w-full md:w-[45%] lg:w-[30%]"} px-3 md:px-4 transition-transform duration-500 ease-out ${
              activeCard === idx ? "scale-105 z-20" : ""
            }`}
            onClick={() => handleCardClick(idx)}
          >
            <TestimonialCard
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              avatar={testimonial.avatar}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
