import BlogCard from "@/components/home-components/BlogCard";
import ProjectCard from "@/components/home-components/ProjectCard";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="overflow-x-hidden pt-10 font-display">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 hero-glow">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
          </div>
          <div className="max-w-5xl px-2 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold mb-8 uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              IIT Hyderabad's Premier Dev Community
            </div>
           <h1 className="text-6xl md:text-[7rem] font-bold leading-[1.1] tracking-tighter mb-8">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">Dream.
                        Develop. Do.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Engineering excellence through collaboration. We build impactful products, contribute to open source, and push the boundaries of technology at IIT Hyderabad.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 px-12 md:px-32 lg:px-64 bg-background-light dark:bg-[#0d0d0d]">
          <div className="max-w-full mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Engineering the <br />
                  <span className="text-primary">Next Generation</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Lambda isn't just a club; it's an incubator for world-class developers. We focus on real-world engineering challenges, from distributed systems to cutting-edge web technologies.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <span className="material-symbols-outlined">terminal</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Modern Tech Stacks</h4>
                      <p className="text-slate-500 text-sm">Rust, Go, React, and beyond. We stay ahead of the curve.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <span className="material-symbols-outlined">groups</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Collaborative Spirit</h4>
                      <p className="text-slate-500 text-sm">Peer reviews, pair programming, and intense hack sessions.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full aspect-video bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden terminal-shadow flex flex-col">
                  <div className="h-10 bg-[#2d2d2d] flex items-center px-4 gap-2 border-b border-white/5">
                    <div className="size-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="size-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="size-3 rounded-full bg-[#27c93f]"></div>
                    <div className="ml-4 text-xs text-white/40 font-mono">lambda-mission.js</div>
                  </div>
                  <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
                    <div className="flex gap-4">
                      <span className="text-white/20 select-none">01</span>
                      <span className="text-purple-400">const</span> <span className="text-blue-400">Lambda</span> = {'{'}
                    </div>
                    <div className="flex gap-4">
                      <span className="text-white/20 select-none">02</span>
                      <span className="ml-4 text-white">mission:</span> <span className="text-green-400">"Innovate and Build"</span>,
                    </div>
                    <div className="flex gap-4">
                      <span className="text-white/20 select-none">03</span>
                      <span className="ml-4 text-white">location:</span> <span className="text-green-400">"IIT Hyderabad"</span>,
                    </div>
                    <div className="flex gap-4">
                      <span className="text-white/20 select-none">04</span>
                      <span className="ml-4 text-white">members:</span> [<span className="text-green-400">"Passionate"</span>, <span className="text-green-400">"Talented"</span>],
                    </div>
                    <div className="flex gap-4">
                      <span className="text-white/20 select-none">05</span>
                      <span className="text-white">{'};'}</span>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <span className="text-white/20 select-none">06</span>
                      <span className="text-purple-400">function</span> <span className="text-blue-400">joinCommunity</span>() {'{'}
                    </div>
                    <div className="flex gap-4">
                      <span className="text-white/20 select-none">07</span>
                      <span className="ml-4 text-purple-400">if</span> (user.isCurious) {'{'}
                    </div>
                    <div className="flex gap-4">
                      <span className="text-white/20 select-none">08</span>
                      <span className="ml-8 text-primary">return</span> <span className="text-white">Lambda.apply();</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-white/20 select-none">09</span>
                      <span className="ml-4 text-white">{'}'}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-white/20 select-none">10</span>
                      <span className="text-white">{'}'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 px-6 bg-background-dark">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-500 mb-16">High-impact engineering from the student community.</p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <ProjectCard
                category="storage"
                title="Dashboard"
                desc="An app made for IIT Hyderabad community to access many campus information and resources."
                tags={["Astro", "TypeScript","TailwindCSS","SolidJS"]}
              />
              <ProjectCard
                category="web"
                title="KRC"
                desc="An app made for the library to book rooms and manage reservations efficiently."
                tags={["TyepScript", "Flutter","Go","Dart"]}
              />
              <ProjectCard
                category="security"
                title="Main Gate Scanner"
                desc="A facial recognition scanner for campus security and automated entry management."
                tags={["Vue", "JavaScript","TailwindCSS"]}
              />  
            </div>
            <Link href="/projects" className="px-8 py-3 border border-primary/50 text-primary rounded-lg font-bold hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(148,51,236,0.4)] transition-all cursor-pointer transform hover:scale-105">
              View More Projects
            </Link>
          </div>
        </section>

        {/* Latest Blogs */}
        <section className="py-24 px-6 bg-background-dark border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div className="text-left">
                <h2 className="text-4xl font-bold mb-4">Latest Blogs</h2>
                <p className="text-slate-500">Insights, tutorials, and deep-dives from our members.</p>
              </div>
              <Link href="/blog" className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-bold text-sm transition-all cursor-pointer transform hover:scale-105 hover:border-primary/30">
                View More Blogs
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <BlogCard
                category="Article"
                readDuration="5"
                title="DuckDB: The Hidden Gem Powering the New Era of Local Data Analytics"
                desc="A practical introduction to DuckDB, the SQLite for analytics"
              />
              <BlogCard
                category="Engineering"
                readDuration="6"
                title="DNS Basics - The Internet's Phone Book"
                desc="Learn DNS basics with memes + examples and hands-on commands"
              />  
              <BlogCard
                category="Security"
                readDuration="7"
                title="SSH Advanced: Tunneling, Port Forwarding, and Pro Tips"
                desc="Master secure SSH tunnels and port forwarding to safely expose, access, and debug remote services like a pro."
              />
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-4xl bg-[#0d0d0d] border border-white/10 overflow-hidden p-12 lg:p-20">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/10 to-transparent pointer-events-none"></div>
              <div className="absolute -top-24 -right-24 size-96 bg-primary/20 rounded-full blur-[100px]"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    Let's <span className="text-primary">Collaborate</span>
                  </h2>
                  <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                    Are you a student looking to build? Or a partner interested in hosting a workshop? We're always open to new ideas and ambitious projects.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(148,51,236,0.5)] transition-all cursor-pointer transform hover:scale-105">
                      Get in Touch
                    </button>
                    <button className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all cursor-pointer transform hover:scale-105 hover:border-primary/30">
                      View Upcoming Events
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <span className="material-symbols-outlined text-primary text-3xl mb-4">handshake</span>
                    <h4 className="font-bold mb-2">Partnerships</h4>
                    <p className="text-slate-500 text-xs">Industry collaborations and sponsored hackathons.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <span className="material-symbols-outlined text-primary text-3xl mb-4">school</span>
                    <h4 className="font-bold mb-2">Workshops</h4>
                    <p className="text-slate-500 text-xs">Technical sessions led by community experts.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <span className="material-symbols-outlined text-primary text-3xl mb-4">terminal</span>
                    <h4 className="font-bold mb-2">OSS Support</h4>
                    <p className="text-slate-500 text-xs">Maintenance and feature builds for open source.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <span className="material-symbols-outlined text-primary text-3xl mb-4">groups</span>
                    <h4 className="font-bold mb-2">Community</h4>
                    <p className="text-slate-500 text-xs">Connecting developers across IIT Hyderabad.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
