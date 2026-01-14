"use client";
import { useState } from "react"
import TeamSection from "@/components/team-components/TeamSection"
import Footer from "@/components/common/Footer"
import BackToTop from "@/components/common/BackToTop"
import { mentors, heads, cores, uiux, heads_last, cores_last, uiux_last } from "./data"

export default function TeamPage() {
  const [teamYear, setTeamYear] = useState<"2024-25" | "2025-26">("2025-26");

  return (
    <>
      <main className="pt-30 pb-32 px-6 grid-background min-h-screen">
        {/* Title Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Our Developers
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white">
            The Lambda Team
          </h1>

          {/* Dropdown */}
          <div className="relative inline-block text-left group">
            <button
              className="glass-dropdown flex items-center gap-4 px-10 py-4 rounded-2xl text-lg font-black text-white border-2 border-primary hover:bg-primary/10 transition-all shadow-[0_0_30px_rgba(148,51,236,0.3)] ring-1 ring-primary/50"
            >

              <span className="tracking-widest">
                {teamYear === "2025-26" ? "2025-2026" : "2024-2025"}
              </span>
              <span className="material-symbols-outlined text-2xl text-primary font-bold">expand_more</span>
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-64 rounded-2xl glass-dropdown overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-2 space-y-1">
                  <button
                    onClick={() => setTeamYear("2025-26")}
                    className={`flex items-center justify-between px-5 py-3 text-sm font-black rounded-xl w-full ${
                      teamYear === "2025-26"
                        ? "text-white bg-primary/40"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    } transition-colors`}
                  >
                    <span>2025-2026</span>
                    {teamYear === "2025-26" && (
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span>
                    )}
                  </button>
                  <button
                    onClick={() => setTeamYear("2024-25")}
                    className={`flex items-center justify-between px-5 py-3 text-sm font-medium rounded-xl w-full ${
                      teamYear === "2024-25"
                        ? "text-white bg-primary/40"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    } transition-colors`}
                  >
                    <span>2024-2025</span>
                    {teamYear === "2024-25" && (
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span>
                    )}
                  </button>
                </div>
              </div>
          </div>
        </div>

        {/* Sections */}
        <div className="max-w-7xl mx-auto space-y-28">
          {/* Mentors */}
          {teamYear === "2025-26" && (
            <section id="mentors">
              <TeamSection title="Mentors" members={mentors} />
            </section>
          )}

          {/* Heads */}
          <section id="heads">
            {teamYear === "2025-26" ? (
              <TeamSection title="Heads" members={heads} />
            ) : (
              <TeamSection title="Heads" members={heads_last} />
            )}
          </section>

          {/* Core Members */}
          <section id="core">
            {teamYear === "2025-26" ? (
              <TeamSection title="Core Members" members={cores} />
            ) : (
              <TeamSection title="Core Members" members={cores_last} />
            )}
          </section>

          {/* UI/UX Team */}
          <section id="uiux">
            {teamYear === "2025-26" ? (
              <TeamSection title="UI/UX Team" members={uiux} />
            ) : (
              <TeamSection title="UI/UX Team" members={uiux_last} />
            )}
          </section>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
