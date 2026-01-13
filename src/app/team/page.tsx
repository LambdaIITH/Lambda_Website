"use client";
import { useState } from "react"
import TeamSection from "@/components/team-components/TeamSection"
import Footer from "@/components/common/Footer"
import BackToTop from "@/components/common/BackToTop"
import TeamSidebar from "@/components/team-components/TeamSidebar"
import { mentors, heads, cores, uiux, heads_last, cores_last, uiux_last } from "./data"

export default function TeamPage() {
  const [teamYear, setTeamYear] = useState<"2024-25" | "2025-26">("2025-26");
  const [open, setOpen] = useState(false);

  return (
    <>
      <main className="pt-30 pb-32 px-6 grid-background min-h-screen w-full">

        {/* Title */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-[60px] font-bold tracking-tighter text-[#D2A8FF]">
            Our Team
          </h1>

          <div className="relative inline-block mt-6">
            <button
              onClick={() => setOpen(!open)}
              className="bg-[#5C2DA0] py-2 px-5 rounded-2xl inline-flex items-center gap-3 hover:bg-[#6a38b0] transition"
            >
              <p className="text-white font-medium text-xl">
                {teamYear === "2025-26" ? "Team 2025-26" : "Team 2024-25"}
              </p>
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none"
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              >
                <path d="M16.25 1.25L8.75 9.82L1.25 1.25" stroke="white" strokeWidth="2.5" />
              </svg>
            </button>
          </div>
          {open && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-7 bg-[#5C2DA0] rounded-xl shadow-xl z-50 py-1">
              <button
                onClick={() => { setTeamYear("2025-26"); setOpen(false); }}
                className="w-full px-4 py-2 flex justify-between items-center text-white hover:bg-[#6a38b0]"
              >
                Team 2025-26
                {teamYear === "2025-26" && "✓"}
              </button>

              <button
                onClick={() => { setTeamYear("2024-25"); setOpen(false); }}
                className="w-full px-4 py-2 flex justify-between items-center text-white hover:bg-[#6a38b0]"
              >
                Team 2024-25
                {teamYear === "2024-25" && "✓"}
              </button>
            </div>
          )}

        </div>

        {/* Two column layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-[220px_1fr] gap-12">

          <TeamSidebar />

          {/* Right content */}
          <div className="space-y-28 mr-10">
            <section id="mentors">
              {teamYear !== '2024-25' && (
                <TeamSection title="mentors" members={mentors} />
              )}
            </section>
            <section id="heads">
              {teamYear === '2025-26' ? (
                <TeamSection title="Club Heads" members={heads} />
              ) :
                (
                  <TeamSection title="Club Heads" members={heads_last} />
                )}
            </section>
            <section id="core">
              {teamYear === '2025-26' ? (
                <TeamSection title="Core Members" members={cores} />
              ) :
                (
                  <TeamSection title="Core Members" members={cores_last} />
                )}
            </section>
            <section id="uiux">
              {teamYear === '2025-26' ? (
                <TeamSection title="UI/UX Team" members={uiux} />
              ) :
                (
                  <TeamSection title="UI/UX Team" members={uiux_last} />
                )}
            </section>
          </div>
        </div>
      </main>

      <BackToTop />
    </>
  )
}
