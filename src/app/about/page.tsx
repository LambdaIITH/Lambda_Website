import MissionVisionCard from "@/components/about-components/MissionVisionCard";
import TimelineItem from "@/components/about-components/TimelineItem";
import TestimonialCard from "@/components/about-components/TestimonialCard";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function AboutPage() {
  return (
    <>
      <main className={`overflow-x-hidden ${plusJakartaSans.className}`}>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 pt-32 pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,51,236,0.1),transparent_50%)]" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.3em] uppercase border border-white/10 rounded-full bg-white/5 text-white/60">
              Premier Developer Club
            </span>
            <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
              About <span className="text-white text-glow">Lambda</span> <br />
              <span className="text-primary">IIT Hyderabad</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              A collective of builders, thinkers, and innovators pushing the boundaries of technology at the heart of IITH.
            </p>
          </div>
        </section>

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
        <section className="px-6 lg:px-24 py-32 bg-[#0c0614]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl font-bold mb-4 tracking-tight">This Tenure's Progress</h2>
              <p className="text-white/40 font-light italic">Tracking our current roadmap and milestones.</p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] timeline-line opacity-30" />
              <div className="space-y-24">
                <TimelineItem
                  phase="Phase 01"
                  title="Planning & Recruitment"
                  description="Defining the roadmap for the upcoming session and onboarding the next generation of Lambda engineers through a rigorous technical hunt."
                  isLeft={true}
                  isActive={true}
                />
                <TimelineItem
                  phase="Phase 02"
                  title="Internal Execution"
                  description="Intensive development cycles for our core open-source projects. Focus on systems architecture and codebase stabilization."
                  isLeft={false}
                  isActive={true}
                />
                <TimelineItem
                  phase="Phase 03"
                  title="Public Launch & Events"
                  description="Deploying major project updates to production and hosting flagship hackathons for the IITH community."
                  isLeft={true}
                  isActive={true}
                />
                <TimelineItem
                  phase="Phase 04"
                  title="Evolution & Handover"
                  description="Documenting architectural decisions and ensuring a seamless transition for the succeeding batch of developers."
                  isLeft={false}
                  isActive={false}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 lg:px-24 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-4">Member Insights</h2>
              <p className="text-white/40 font-light">What it means to be a part of the Lambda family.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Arjun Sharma"
                role="Web Guild Lead"
                quote="Lambda isn't just a club; it's a launchpad. The peer learning here is unparalleled compared to any classroom setting."
                avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuA1DITWJS1mca8VEn9eGGrbxG4rBfifn4QJEsiUeV2vL6hhiRAdjTBC9EoGDiz_xuA-lWKwO4lf56HLx1klHTQ9OlsrUaXx-ZkUufRYpx7hxp7cMEKY-fvzVn9Cnm5j0o6w1ZfA3QVMmCHhoKyGUd6TPo5izDl7v_jgQGRfnY91jZU9tLxO7Y0jHbT_wIsrJtpB2SuPHNHjyOXCmlrfYz_gLk9N8BRmgEvHZmGWe5vlzIXU5HLy1jgjZAt3lp3UDdNfQVFVl15co_fC"
              />
              <TestimonialCard
                name="Priya Verma"
                role="Core Contributor"
                quote="The community pushed me to contribute to Linux kernel in my freshman year. That's the kind of ambition Lambda breeds."
                avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAJluAYXSLX1UZnZZMz504N2O0O5BD2cQmRsrCAMiDVLYQ33foj0vb86_t48seE7jqZr3FTP9pKg38A68JSl_x0sYq_g_QKD4_tC-C5_0Ao6z_y7W-JsWy0g36mLD1DFp8ouqGVXGHDExFLZKADi3i26ol7ojJDPqMExuPn-xGvucoQKhIYF-4szu_G49AHdykdldZNfzk5x6nK9OC3r40oQLIC9VUIp4JTZpa5-ZQDiGTQ41r7gnIIAqN7nY1cGbdMMW7D_4tjQNYL"
              />
              <TestimonialCard
                name="Rohan Gupta"
                role="Alumni '23"
                quote="From late-night debugging to winning international hackathons together, Lambda has been the highlight of my IITH life."
                avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuA78XuD-53xyHQ2pggzKQFwlAufhGb5uLOsUv2aBBJwsofWv1qXyfZ7vi8Uj4wgPbE48T51skByQguJN2xHk_Mw7OllAsA3CJGok-uFMe5yOroVhiEi3726GiPy8N0v6Dugn15SABnkSzwR-_mbtbetC3QDeOM4tRj7CJTIX6nf5TRy-O29Zi8X-v_ZlHtx0PCex9u1FTUSQZyVFvSjSv3yhV6CkmjRtFF-9gitmKSmybWmy3xZd4wKifGFoK7WzjbncTTVE6dbOJg4"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 lg:px-24 py-40">
          <div className="max-w-5xl mx-auto rounded-[3rem] p-12 md:p-24 border border-primary/20 bg-linear-to-b from-primary/10 to-transparent text-center relative overflow-hidden">
            <div className="absolute -top-24 -left-24 size-64 bg-primary/20 blur-[120px] rounded-full" />
            <div className="absolute -bottom-24 -right-24 size-64 bg-primary/20 blur-[120px] rounded-full" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">
                Join the <br /> Community
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-12 font-light">
                We are always looking for passionate builders. Whether you're into low-level systems, high-level apps, or AI research.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto px-12 h-14 bg-primary text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(148,51,236,0.4)] cursor-pointer">
                  Apply Now
                </button>
                <button className="w-full sm:w-auto px-12 h-14 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300 cursor-pointer hover:border-primary/30">
                  Explore Openings
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
