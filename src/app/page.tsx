"use client";

import { useState } from "react";
import { useIntro } from "@/app/context/introContext";
import IntroOverlay from "@/components/home-components/IntroOverlay";

import BlogCard from "@/components/home-components/BlogCard";
import ProjectCard from "@/components/home-components/ProjectCard";
import ScrollAnimatedSection from "@/components/home-components/ScrollAnimatedSection";
import Link from "next/link";
import blogData from "@/data/blogData.json";
import projectData from "@/data/projectData.json";

type BlogPost = {
  id: string;
  title: string;
  date: string;
  publishedDate: number;
  desc: string;
  readTime: string;
  slug: string;
};

type ProjectPost = {
  slug: string;
  name: string;
  technologies: string[];
  desc: string;
  link: string;
  date: string;
  readTime: string;
};

export default function HomePage() {
  const { introFinished } = useIntro();

  /* ---------- FORMAT BLOG DATA ---------- */
  const blogs: BlogPost[] = blogData.blogs
    .map((b: any) => ({
      id: b.slug,
      title: b.title,
      date: new Date(b.published_date).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }),
      publishedDate: new Date(b.published_date).getTime(),
      desc: b.shortDescription,
      readTime: b.readTime,
      slug: b.slug,
    }))
    .sort((a, b) => b.publishedDate - a.publishedDate);

  /* ---------- FORMAT PROJECT DATA ---------- */
  const projects: ProjectPost[] = projectData.projects.map((p: any) => ({
    slug: p.slug,
    name: p.name,
    technologies: p.technologies,
    desc: p.description,
    link: p.link,
    date: p.date,
    readTime: p.readTime,
  }));

  /* ---------- GET TOP 3 ITEMS ---------- */
  const topProjects = projects.slice(0, 3);
  const topBlogs = blogs.slice(0, 3);

  return (
    <>
      {!introFinished && <IntroOverlay />}
      <main
        className={`transition-opacity duration-700 pt-10 overflow-x-hidden`}
      >        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 hero-glow bg-background-dark">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] ${introFinished ? "animate-morph-blob" : "opacity-0"}`}></div>
            <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] ${introFinished ? "animate-morph-blob" : "opacity-0"}`} style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="max-w-5xl px-2 text-center z-10">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold mb-8 uppercase tracking-widest ${introFinished?'animate-bounce-in':'opacity-0'}`}>
              <span className="relative flex h-2 w-2">
                <span className={`${introFinished?'animate-ping':'opacity-0'} absolute inline-flex h-full w-full rounded-full bg-primary opacity-75`}></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              IIT Hyderabad's Premier Dev Community
            </div>
            <h1 className={`text-6xl md:text-[7rem] font-bold leading-[1.1] tracking-tighter mb-8 ${introFinished?'animate-text-reveal':'opacity-0'}`} style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400 animate-gradient-shift">Dream.
                Develop. Do.</span>
            </h1>
            <p className={`text-lg md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed ${introFinished?'animate-blur-fade-in':'opacity-0'}`} style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
              Engineering excellence through collaboration. We build impactful products, contribute to open source, and push the boundaries of technology at IIT Hyderabad.
            </p>
          </div>
          {/* bottom transition overlay */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-linear-to-b from-transparent to-[#0d0d0d]"
          />

        </section>

        {/* About Section */}
        <section className="py-24 px-6 md:px-12 lg:px-32 xl:px-64 bg-background-light dark:bg-[#0d0d0d] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(148,51,236,0.15),transparent_70%)] pointer-events-none animate-pulse-slow" />
          <div className="max-w-full mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <ScrollAnimatedSection>
                <div className="animate-blur-fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-shimmer">
                    Engineering the <br />
                    <span className="text-primary animate-gradient-shift">Next Generation</span>
                  </h2>
                  <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
                    Lambda isn't just a club; it's an incubator for world-class developers. We focus on real-world engineering challenges, from distributed systems to cutting-edge web technologies.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                      <div className="p-3 bg-primary/10 rounded-lg text-primary transition-all duration-300 hover:scale-110 hover:rotate-3 hover:bg-primary/20">
                        <span className="material-symbols-outlined">terminal</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-base md:text-lg">Modern Tech Stacks</h4>
                        <p className="text-slate-500 text-sm">Rust, Go, React, and beyond. We stay ahead of the curve.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 animate-slide-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
                      <div className="p-3 bg-primary/10 rounded-lg text-primary transition-all duration-300 hover:scale-110 hover:rotate-3 hover:bg-primary/20">
                        <span className="material-symbols-outlined">groups</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-base md:text-lg">Collaborative Spirit</h4>
                        <p className="text-slate-500 text-sm">Peer reviews, pair programming, and intense hack sessions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimatedSection>
              <ScrollAnimatedSection>
                <div className="relative">
                  <div className="absolute -inset-8  bg-primary/20 rounded-full blur-[80px] opacity-60 animate-glow-pulse" />
                  < div className="w-full lg:w-[125%] bg-[#1e1e1e] rounded-xl border border-primary/20 overflow-hidden flex flex-col relative z-10 shadow-[20px_20px_80px_rgba(148,51,236,0.35)] hover:shadow-[25px_25px_100px_rgba(148,51,236,0.5)] transition-all duration-500 card-3d">
                    <div className="h-8 md:h-10 bg-[#2d2d2d] flex items-center px-3 md:px-4 gap-2 border-b border-white/5">
                      <div className="size-2 md:size-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="size-2 md:size-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="size-2 md:size-3 rounded-full bg-[#27c93f]"></div>
                      <div className="ml-2 md:ml-4 text-[10px] md:text-xs text-white/40 font-mono">lambda-mission.js</div>
                    </div>
                    <div className="p-3 md:p-6 font-mono text-[10px] md:text-sm leading-relaxed overflow-hidden ">
                      <div className="flex gap-2 md:gap-4 code-line-1">
                        <span className="text-white/20 select-none">01</span>
                        <span className="text-purple-400">const</span> <span className="text-blue-400 animate-shimmer">Lambda</span> = {'{'}
                      </div>
                      <div className="flex gap-2 md:gap-4 code-line-2">
                        <span className="text-white/20 select-none">02</span>
                        <span className="ml-2 md:ml-4 text-white">mission:</span> <span className="text-green-400 animate-shimmer">"Innovate"</span>,
                      </div>
                      <div className="flex gap-2 md:gap-4 code-line-3">
                        <span className="text-white/20 select-none">03</span>
                        <span className="ml-2 md:ml-4 text-white">location:</span> <span className="text-green-400 animate-shimmer">"IITH"</span>,
                      </div>
                      <div className="flex gap-2 md:gap-4 code-line-4">
                        <span className="text-white/20 select-none">04</span>
                        <span className="ml-2 md:ml-4 text-white">members:</span> [<span className="text-green-400 animate-shimmer">"Passionate"</span>],
                      </div>
                      <div className="flex gap-2 md:gap-4 code-line-5">
                        <span className="text-white/20 select-none">05</span>
                        <span className="text-white">{'};'}</span>
                      </div>
                      <div className="flex gap-2 md:gap-4 mt-2 md:mt-4 code-line-6">
                        <span className="text-white/20 select-none">06</span>
                        <span className="text-purple-400">function</span> <span className="text-blue-400 animate-shimmer">join</span>() {'{'}
                      </div>
                      <div className="flex gap-2 md:gap-4 code-line-7">
                        <span className="text-white/20 select-none">07</span>
                        <span className="ml-2 md:ml-4 text-purple-400">if</span> (curious) {'{'}
                      </div>
                      <div className="flex gap-2 md:gap-4 code-line-8">
                        <span className="text-white/20 select-none">08</span>
                        <span className="ml-4 md:ml-8 text-primary animate-shimmer">return</span> <span className="text-white">apply();</span>
                      </div>
                      <div className="flex gap-2 md:gap-4 code-line-9">
                        <span className="text-white/20 select-none">09</span>
                        <span className="ml-2 md:ml-4 text-white">{'}'}</span>
                      </div>
                      <div className="flex gap-2 md:gap-4 code-line-10">
                        <span className="text-white/20 select-none">10</span>
                        <span className="text-white">{'}'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimatedSection>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 px-6 bg-background-dark">

          <div className="max-w-7xl mx-auto text-center">
            <ScrollAnimatedSection>
              <h2 className="text-4xl font-bold mb-4 animate-blur-fade-in">Featured Projects</h2>
              <p className="text-slate-500 mb-16 animate-blur-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>High-impact engineering from the student community.</p>
            </ScrollAnimatedSection>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {topProjects.map((project, index) => (
                <ScrollAnimatedSection key={project.slug}>
                  <div className={`project-card-${index + 1}`}>
                    <ProjectCard
                      category={["storage", "web", "security"][index] || "storage"}
                      title={project.name}
                      desc={project.desc}
                      tags={project.technologies}
                      link={project.link}
                    />
                  </div>
                </ScrollAnimatedSection>
              ))}
            </div>
            <ScrollAnimatedSection>
              <Link href="/projects" className="inline-block px-8 py-3 border border-primary/50 text-primary rounded-lg font-bold hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(148,51,236,0.4)] transition-all cursor-pointer transform hover:scale-105 magnetic-hover">
                View More Projects
              </Link>
            </ScrollAnimatedSection>
          </div>
        </section>

        {/* Latest Blogs */}
        <section className="py-24 px-6 bg-background-dark border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimatedSection>
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 animate-blur-fade-in">
                <div className="text-left">
                  <h2 className="text-4xl font-bold mb-4">Latest Blogs</h2>
                  <p className="text-slate-500">Insights, tutorials, and deep-dives from our members.</p>
                </div>
                <Link href="/blog" className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-bold text-sm transition-all cursor-pointer transform hover:scale-105 hover:border-primary/30">
                  View More Blogs
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {topBlogs.map((blog, index) => (
                  <ScrollAnimatedSection key={blog.id}>
                    <div className={`blog-card-${index + 1}`}>
                      <BlogCard
                        category={["Article", "Engineering", "Security"][index] || "Article"}
                        readDuration={blog.readTime.split(' ')[0]}
                        title={blog.title}
                        desc={blog.desc}
                        redirect={blog.slug}
                      />
                    </div>
                  </ScrollAnimatedSection>
                ))}
              </div>
            </ScrollAnimatedSection>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimatedSection>
              <div className="relative rounded-4xl bg-[#0d0d0d] border border-white/10 overflow-hidden p-12 lg:p-20 animate-scale-rotate">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/10 to-transparent pointer-events-none"></div>
                <div className="absolute -top-24 -right-24 size-96 bg-primary/20 rounded-full blur-[100px] animate-morph-blob"></div>
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                  <div className="animate-blur-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                      Let's <span className="text-primary">Collaborate</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                      Are you a student looking to build? Or a partner interested in hosting a workshop? We're always open to new ideas and ambitious projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(148,51,236,0.5)] transition-all cursor-pointer transform hover:scale-105 magnetic-hover">
                        Get in Touch
                      </button>
                      <button className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all cursor-pointer transform hover:scale-105 hover:border-primary/30 magnetic-hover">
                        View Upcoming Events
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 magnetic-hover animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                      <span className="material-symbols-outlined text-primary text-3xl mb-4 block">handshake</span>
                      <h4 className="font-bold mb-2">Partnerships</h4>
                      <p className="text-slate-500 text-xs">Industry collaborations and sponsored hackathons.</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 magnetic-hover animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                      <span className="material-symbols-outlined text-primary text-3xl mb-4 block">school</span>
                      <h4 className="font-bold mb-2">Workshops</h4>
                      <p className="text-slate-500 text-xs">Technical sessions led by community experts.</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 magnetic-hover animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                      <span className="material-symbols-outlined text-primary text-3xl mb-4 block">terminal</span>
                      <h4 className="font-bold mb-2">OSS Support</h4>
                      <p className="text-slate-500 text-xs">Maintenance and feature builds for open source.</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 magnetic-hover animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                      <span className="material-symbols-outlined text-primary text-3xl mb-4 block">groups</span>
                      <h4 className="font-bold mb-2">Community</h4>
                      <p className="text-slate-500 text-xs">Connecting developers across IIT Hyderabad.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>
        </section>
      </main>
    </>
  );
}
