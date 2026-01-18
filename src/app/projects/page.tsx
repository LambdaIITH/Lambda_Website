'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Geist } from 'next/font/google';
import projectData from '@/data/projectData.json';

const geist = Geist({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900']
});

type ProjectPost = {
  slug: string,
  name: string,
  contributors: Array<{ name: string; github: string }>;  // ← New
  technologies: string[],
  desc: string,
  link: string,
  date:string,
  // markdown:string,
  readTime: string,
};

export default function ProjectPage() {
  const POSTS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortLatestFirst, setSortLatestFirst] = useState(true);

  /* ---------- FORMAT PROJECT DATA ---------- */
  const posts: ProjectPost[] = projectData.projects.map((b: any) => ({
    slug: b.slug,
    name: b.name,
    contributors: Array.isArray(b.authors) ? b.authors : [b.authors],
    technologies: b.technologies,
    desc: b.description,
    link: b.link,
    date: b.date,
    // markdown: b.markdown,
    readTime: b.readTime,
  }));

  /* ---------- TAG FILTER ---------- */
  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredPosts =
    selectedTags.length === 0
      ? posts
      : posts.filter(post =>
          selectedTags.every(tag => post.technologies.includes(tag))
        );

  /* ---------- SORT ---------- */
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortLatestFirst ? dateB - dateA : dateA - dateB;
  });

  /* ---------- PAGINATION ---------- */
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = sortedPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTags, sortLatestFirst]);

  const derivedTags = Array.from(
    new Set(posts.flatMap(post => post.technologies))
  );

  return (
    <main
      className={`min-h-screen w-screen
      bg-linear-to-b from-[#050505] via-[#0b0212] to-[#050505]
      text-white flex flex-col items-center
      ${geist.className}`}
    >
      <div className="fixed top-0 right-0 w-90 h-90 bg-[#9433EC]/15 rounded-full filter blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
      <div className="fixed bottom-0 left-0 w-90 h-90 bg-[#9433EC]/15 rounded-full filter blur-3xl pointer-events-none translate-x-1/4 translate-y-1/4"></div>

      {/* Title */}
      <section className="text-center md:text-left w-[90vw] md:w-[80vw] mt-20 mb-24">
        <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white">
          Projects <span className="text-[#9433EC]">.</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-light">
          Cool stuff we’ve built—innovative, bold, and kinda awesome.
        </p>
      </section>

      {/* Tags
      <section className="mb-20 w-[90vw] md:w-[80vw] sticky top-18 z-10">
        <div className="flex flex-wrap gap-3 rounded-2xl bg-white/5 backdrop-blur-md p-4 border border-white/10">
          <button
            onClick={() => setSelectedTags([])}
            className="px-5 py-2 rounded-xl bg-[#9433EC] text-white text-sm font-bold cursor-pointer"
          >
            All Topics
          </button>

          {derivedTags.map(tag => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#9433EC] text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </section> */}

      {/* Posts */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-[90vw] md:w-[80vw] mb-24">
        {paginatedPosts.map(post => (
          <article 
            key={post.slug}
            className="rounded-3xl overflow-hidden flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-[#9433EC] hover:shadow-[0_0_30px_rgba(148,51,236,0.3)] h-[300px] cursor-pointer"
            onClick={() => window.open(post.link, '_blank')}
          >
            {/* Content */}
            <div className="p-10 flex flex-col h-full">
              <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-3xl font-bold mb-4 text-white hover:text-[#9433EC] transition-colors leading-tight">
                {post.name}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-4 font-light line-clamp-3">
                {post.desc}
              </p>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                <div className="text-xs font-semibold text-slate-200 flex flex-wrap items-center gap-1">
                  {post.contributors.map((author, idx) => (
                    <span key={idx} className="inline-flex items-center">
                      <a
                        href={`https://github.com/${author.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:text-[#9433EC] transition-colors cursor-pointer"
                      >
                        {author.name}
                      </a>
                      {idx < post.contributors.length - 1 && <span className="mx-1">,</span>}
                    </span>
                  ))}
                </div>

                <span className="text-[#9433EC] gap-2 font-bold material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-12 mb-20">

          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage(p => p - 1)}
              className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold group"
            >
              <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">west</span> Previous
            </button>
          )}

          <div className="flex items-center gap-6">
            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;
              return (
                <span
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`text-sm font-medium cursor-pointer transition-colors ${
                    page === currentPage
                      ? 'font-black text-[#9433EC] border-b-2 border-[#9433EC] pb-1'
                      : 'text-slate-600 hover:text-slate-300'
                  }`}
                >
                  {page.toString().padStart(2, '0')}
                </span>
              );
            })}
          </div>

          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(p => p + 1)}
              className="text-slate-400 hover:text-[#9433EC] transition-colors flex items-center gap-2 text-sm font-bold group"
            >
              Next <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">east</span>
            </button>
          )}
        </div>
      )}
    </main>
  );
}
