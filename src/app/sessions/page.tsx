'use client';

import { useState, useEffect } from 'react';
import sessionData from '@/data/sessionData.json';

type SessionPost = {
  title: string,
  date: string,
  description: string,
  image: string,
};

export default function SessionsPage() {
  const POSTS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortLatestFirst, setSortLatestFirst] = useState(true);

  /* ---------- FORMAT SESSION DATA ---------- */
  const posts: SessionPost[] = sessionData.sessions.map((s: any) => ({
    title: s.title,
    date: s.date,
    description: s.description,
    image: s.image,
  }));

  /* ---------- SORT ---------- */
  const sortedPosts = [...posts].sort((a, b) => {
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
  }, [sortLatestFirst]);

  return (
    <main
      className={`w-screen
      bg-linear-to-b from-[#050505] via-[#0b0212] to-[#050505]
      text-white flex flex-col items-center pt-20 pb-4`}
    >
      <div className="fixed top-0 right-0 w-90 h-90 bg-[#9433EC]/15 rounded-full filter blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
      <div className="fixed bottom-0 left-0 w-90 h-90 bg-[#9433EC]/15 rounded-full filter blur-3xl pointer-events-none translate-x-1/4 translate-y-1/4"></div>

      {/* Title */}
      <section className="text-center md:text-left w-[90vw] md:w-[80vw] mt-20 mb-24">
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white">
          Sessions <span className="text-[#9433EC]">.</span>
        </h2>
        <p className="text-md text-slate-400 max-w-2xl leading-relaxed font-light">
          A look back at the workshops and sessions we`ve run for the club.
        </p>
      </section>

      {/* Posts */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90vw] md:w-[80vw] mb-24">
        {paginatedPosts.map((post, idx) => (
          <div
            key={idx}
            className="rounded-3xl overflow-hidden flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-[#9433EC] hover:shadow-[0_0_30px_rgba(148,51,236,0.3)]"
          >
            {/* Image */}
            <div className="relative w-full aspect-video overflow-hidden bg-white/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-10 flex flex-col flex-1">
              <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-700"></span>
              </div>

              <h3 className="text-xl font-bold mb-4 text-white leading-tight">
                {post.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-4 font-light line-clamp-3">
                {post.description}
              </p>
            </div>
          </div>
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