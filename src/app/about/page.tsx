"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MissionVisionCard from "@/components/about-components/MissionVisionCard";
import TimelineItem from "@/components/about-components/TimelineItem";
import TestimonialCarousel from "@/components/about-components/TestimonialCarousel";
import { Plus_Jakarta_Sans } from "next/font/google";
import Hero from "@/components/about-components/HeroSection";

interface TimelineMilestone {
  phase: string;
  title: string;
  description: string;
  isActive: boolean;
}

const timelineDataByTenure: Record<string, TimelineMilestone[]> = {
  "2024-2025": [
    {
      phase: "Phase 01",
      title: "Foundational Alignments",
      description:
        "Established initial engineering workflows and onboarded technical leads for open-source systems architecture.",
      isActive: true,
    },
    {
      phase: "Phase 02",
      title: "Alpha Systems Deploy",
      description:
        "Began standard infrastructure stabilization across IIT Hyderabad's internally hosted services.",
      isActive: true,
    },
  ],
  "2025-2026": [
    {
      phase: "Phase 01",
      title: "Planning & Recruitment",
      description:
        "Defining the roadmap for the upcoming session and onboarding the next generation of Lambda engineers through a rigorous technical hunt.",
      isActive: true,
    },
    {
      phase: "Phase 02",
      title: "Internal Execution",
      description:
        "Intensive development cycles for our core open-source projects. Focus on systems architecture and codebase stabilization.",
      isActive: true,
    },
    {
      phase: "Phase 03",
      title: "Public Launch & Events",
      description:
        "Deploying major project updates to production and hosting flagship hackathons for the IITH community.",
      isActive: true,
    },
    {
      phase: "Phase 04",
      title: "Evolution & Handover",
      description:
        "Documenting architectural decisions and ensuring a seamless transition for the succeeding batch of developers.",
      isActive: true,
    },
  ],
  "2026-2027": [
    {
      phase: "Phase 01",
      title: "Next-Gen Deep Dives",
      description:
        "Configuring decentralized computing paradigms and advanced neural track structures for active members.",
      isActive: true,
    },
  ],
};

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Web Guild Lead",
    quote:
      "Lambda isn't just a club; it's a launchpad. The peer learning here is unparalleled compared to any classroom setting.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1DITWJS1mca8VEn9eGGrbxG4rBfifn4QJEsiUeV2vL6hhiRAdjTBC9EoGDiz_xuA-lWKwO4lf56HLx1klHTQ9OlsrUaXx-ZkUufRYpx7hxp7cMEKY-fvzVn9Cnm5j0o6w1ZfA3QVMmCHhoKyGUd6TPo5izDl7v_jgQGRfnY91jZU9tLxO7Y0jHbT_wIsrJtpB2SuPHNHjyOXCmlrfYz_gLk9N8BRmgEvHZmGWe5vlzIXU5HLy1jgjZAt3lp3UDdNfQVFVl15co_fC",
  },
  {
    name: "Priya Verma",
    role: "Core Contributor",
    quote:
      "The community pushed me to contribute to Linux kernel in my freshman year. That's the kind of ambition Lambda breeds.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJluAYXSLX1UZnZZMz504N2O0O5BD2cQmRsrCAMiDVLYQ33foj0vb86_t48seE7jqZr3FTP9pKg38A68JSl_x0sYq_g_QKD4_tC-C5_0Ao6z_y7W-JsWy0g36mLD1DFp8ouqGVXGHDExFLZKADi3i26ol7ojJDPqMExuPn-xGvucoQKhIYF-4szu_G49AHdykdldZNfzk5x6nK9OC3r40oQLIC9VUIp4JTZpa5-ZQDiGTQ41r7gnIIAqN7nY1cGbdMMW7D_4tjQNYL",
  },
  {
    name: "Rohan Gupta",
    role: "Alumni '23",
    quote:
      "From late-night debugging to winning international hackathons together, Lambda has been the highlight of my IITH life.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA78XuD-53xyHQ2pggzKQFwlAufhGb5uLOsUv2aBBJwsofWv1qXyfZ7vi8Uj4wgPbE48T51skByQguJN2xHk_Mw7OllAsA3CJGok-uFMe5yOroVhiEi3726GiPy8N0v6Dugn15SABnkSzwR-_mbtbetC3QDeOM4tRj7CJTIX6nf5TRy-O29Zi8X-v_ZlHtx0PCex9u1FTUSQZyVFvSjSv3yhV6CkmjRtFF-9gitmKSmybWmy3xZd4wKifGFoK7WzjbncTTVE6dbOJg4",
  },
];

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function AboutPage() {
  const [activeTenure, setActiveTenure] = useState<string>("2025-2026");
  const currentItems = timelineDataByTenure[activeTenure] || [];
  const [hoveredTenure, setHoveredTenure] = useState<string | null>(null);
  const tenures = [
    { id: "2024-2025", label: "24/25", status: "Archived" },
    { id: "2025-2026", label: "25/26", status: "Active" },
    { id: "2026-2027", label: "26/27", status: "Upcoming" },
  ];

  return (
    <>
      <main
        className={`overflow-x-hidden relative bg-[#06020a] text-white ${plusJakartaSans.className}`}
      >
        {/* Hero Section */}
        <Hero />

        {/* Mission & Vision */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <MissionVisionCard
              icon="explore"
              title="Our Mission"
              description="To cultivate a high-impact developer culture within IIT Hyderabad by bridging the gap between theoretical computer science and real-world engineering excellence."
            />
            <MissionVisionCard
              icon="auto_awesome"
              title="Our Vision"
              description="To become India's leading student-led technical hub, fostering open-source contributions and nurturing the next generation of global tech leaders."
            />
          </div>
        </section>

        {/* Timeline Section */}
        <section className="px-6 lg:px-24 py-32 bg-[#0c0614] border-y border-white/2">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 tracking-tight bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent">
                Tenure Progress
              </h2>
              <p className="text-white/40 font-light italic">
                Tracking our operational roadmap and milestones.
              </p>
            </div>
            {/* Premium Capsule Selector Widget */}
            <div className="flex justify-center mb-20 px-4">
              <div
                className="relative flex items-center gap-1 bg-black/60 border border-primary/80 p-1.5 rounded-xl backdrop-blur-xl shadow-2xl"
                onMouseLeave={() => setHoveredTenure(null)}
              >
                {tenures.map((t) => {
                  const isSelected = activeTenure === t.id;
                  const isHovered = hoveredTenure === t.id;

                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveTenure(t.id)}
                      onMouseEnter={() => setHoveredTenure(t.id)}
                      className="relative flex flex-col items-center justify-center w-28 py-2.5 rounded-lg transition-all duration-300 outline-none z-10 group"
                    >
                      {/* SHARED BOX HIGHLIGHT: Slides smoothly across tabs */}
                      {isSelected && (
                        <motion.div
                          layoutId="glowCapsule"
                          className="absolute inset-0 bg-white/8 border border-white/10 rounded-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}

                      {isHovered && !isSelected && (
                        <motion.div
                          layoutId="glowCapsule"
                          className="absolute inset-0 bg-white/4 border border-white/8 rounded-lg"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}

                      {/* Status Indicator Ping */}
                      <span className="absolute top-1.5 right-2 flex h-1.5 w-1.5">
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                            t.status === "Active"
                              ? "bg-emerald-400"
                              : t.status === "Upcoming"
                                ? "bg-purple-400"
                                : "bg-white/10"
                          }`}
                        />
                        <span
                          className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                            t.status === "Active"
                              ? "bg-emerald-500"
                              : t.status === "Upcoming"
                                ? "bg-purple-500"
                                : "bg-white/20"
                          }`}
                        />
                      </span>

                      <span
                        className={`text-sm font-bold tracking-wide transition-colors duration-200 ${
                          isSelected
                            ? "text-white"
                            : "text-white/40 group-hover:text-white/80"
                        }`}
                      >
                        {t.label}
                      </span>
                      <span
                        className={`text-[8px] tracking-widest uppercase font-semibold mt-0.5 transition-colors duration-200 ${
                          isSelected ? "text-purple-400" : "text-white/20"
                        }`}
                      >
                        {t.status}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Animated Track Canvas */}
            <div className="relative w-full min-h-[450px]">
              <div className="absolute top-0 bottom-0 left-6 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-linear-to-b from-purple-500/30 via-white/10 to-transparent" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTenure}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.12 },
                    },
                    exit: {
                      opacity: 0,
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                  }}
                  className="space-y-24 w-full"
                >
                  {currentItems.map((item, index) => (
                    <TimelineItem
                      key={`${activeTenure}-${index}`}
                      phase={item.phase}
                      title={item.title}
                      description={item.description}
                      isLeft={index % 2 === 0}
                      isActive={item.isActive}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 lg:px-24 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-4">Member Insights</h2>
              <p className="text-white/40 font-light">
                What it means to be a part of the Lambda family.
              </p>
            </div>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>
      </main>
    </>
  );
}
