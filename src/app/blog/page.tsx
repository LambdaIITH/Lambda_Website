'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Geist } from 'next/font/google';
import blogData from '@/data/blogData.json';

const geist = Geist({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900']
});

type BlogPost = {
  id: string;          // slug
  title: string;
  author: string;
  tags: string[];
  markdown: string;

  // UI fields
  date: string;
  desc: string;
  readTime: string;
  category: string;
  badges: string[];
  authorImg: string;
};

export default function BlogPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortLatestFirst, setSortLatestFirst] = useState(true);

  /* ---------- FORMAT BLOG DATA ---------- */
  const posts: BlogPost[] = blogData.blogs.map((b: any) => ({
    id: b.slug, // IMPORTANT: slug
    title: b.title,
    author: b.author,
    tags: b.tags,
    markdown: b.markdown,
    date: new Date(b.published_date).toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }),
    desc: b.shortDescription,
    readTime: '5 min read',
    category: 'WEB',
    badges: b.tags,
    authorImg: '/blog_assets/avatar.png'
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
          selectedTags.every(tag => post.tags.includes(tag))
        );

  /* ---------- SORT ---------- */
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortLatestFirst ? dateB - dateA : dateA - dateB;
  });

  const derivedTags = Array.from(
    new Set(posts.flatMap(post => post.tags))
  );

  return (
    <main
      className={`min-h-screen w-screen
      bg-gradient-to-b from-[#050505] via-[#0b0212] to-[#050505]
      text-white flex flex-col items-center
      ${geist.className}`}
    >

      {/* Title */}
      <section className="text-center md:text-left w-[90vw] md:w-[80vw] mt-20 mb-20">
        <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white">
          Insights <span className="text-[#9433EC]">.</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-light">
          Documenting our journey through engineering, research, and collaborative development at IIT Hyderabad.
        </p>
      </section>

      {/* Tags Bar */}
      <section className="mb-8 w-[90vw] md:w-[80vw] sticky top-18 z-10">
        <div className="flex flex-wrap justify-center md:justify-start gap-3 rounded-2xl bg-white/5 backdrop-blur-md p-4 border border-white/10">
          <button
            onClick={() => setSelectedTags([])}
            className="px-5 py-2 rounded-xl bg-[#9433EC] text-white text-sm font-bold"
          >
            All Topics
          </button>


          {derivedTags.map(tag => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
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
      </section>


      {/* Sort*/}
      <section className="flex justify-end items-center w-[90vw] md:w-[80vw] mb-8">
        <button
          onClick={() => setSortLatestFirst(prev => !prev)}
          className="flex items-center gap-2 text-slate-400 hover:text-[#9433EC] transition-colors"
        >
          <img
            src={sortLatestFirst ? "/blog_assets/Sort Buttons.svg" : "/blog_assets/Sort Buttons2.svg"}
            alt="Sort Button"
            className="h-6 w-auto transition-all duration-200"
          />
        </button>
      </section>

      {/* Posts */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[90vw] md:w-[80vw] mb-24">
        {sortedPosts.map((post, i) => (
          <Link 
            key={post.id}
            href={`/blog/${post.id}`} 
            className='block'
          >
            <article
              className="rounded-3xl overflow-hidden flex flex-col cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 transition-transform hover:-translate-y-1 h-[520px]"
            >
            
            {/* Big category + badges */}
            <div className="h-40 relative flex items-center justify-center border-b border-white/10 bg-[#9433EC]/10">
              <span className="text-[#9433EC]/10 text-9xl font-black absolute select-none">{post.category}</span>
              <div className="relative z-10 flex gap-2">
                {post.badges.map((b, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-[#9433EC]/10 border border-[#9433EC]/30 text-[#9433EC] text-[10px] font-bold uppercase tracking-wider">{b}</span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-10 flex flex-col flex-1">
              <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white hover:text-[#9433EC] transition-colors leading-tight cursor-pointer">{post.title}</h3>
              {post.desc && <p className="text-slate-400 text-base leading-relaxed mb-10 font-light line-clamp-3">{post.desc}</p>}

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
                    <img alt="Author" src={post.authorImg} className="w-full h-full object-cover"/>
                  </div>
                  <span className="text-xs font-semibold text-slate-200">{post.author}</span>
                </div>
                {/* <Link 
                  key={post.id}
                  href={`/blog/${post.id}`} 
                  className='block'
                > */}
                <button className="text-[#9433EC] text-sm font-bold flex items-center gap-2 group cursor-pointer">
                  Read Article <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                {/* </Link> */}
              </div>
            </div>
          </article>
          </Link>))}
      </section>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-12 mb-20">
        <button className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold group">
          <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">west</span> Previous
        </button>
        <div className="flex items-center gap-6">
          <span className="text-sm font-black text-[#9433EC] border-b-2 border-[#9433EC] pb-1">01</span>
          <span className="text-sm font-medium text-slate-600 hover:text-slate-300 cursor-pointer transition-colors">02</span>
          <span className="text-sm font-medium text-slate-600 hover:text-slate-300 cursor-pointer transition-colors">03</span>
        </div>
        <button className="text-slate-400 hover:text-[#9433EC] transition-colors flex items-center gap-2 text-sm font-bold group">
          Next <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">east</span>
        </button>
      </div>
    </main>
  );
}