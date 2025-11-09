'use client';

import { useState } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

export default function BlogPage() {
  const [selectedTags, setSelectedTags] = useState(['Make', 'Security']);
  const [sortLatestFirst, setSortLatestFirst] = useState(true);

  const allTags = [
    'API', 'Automation', 'CI/CD', 'CORS', 'DevOps', 'DevTools',
    'DNS', 'Git', 'GitHub', 'GitHub Actions', 'Google Apps Script',
    'Just', 'Linux', 'Make', 'Networking', 'Security'
  ];

  const posts = [
    {
      date: 'Oct 17, 2025',
      title: 'DuckDB: The Hidden Gem Powering the New Era of Local Data Analytics',
      desc: '',
    },
    {
      date: 'Oct 15, 2025',
      title: 'Understanding Modern Web Authentication: A Deep Dive into OAuth 2.0',
      desc: 'A comprehensive guide to implementing secure authentication using OAuth 2.0 in modern web applications...',
    },
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Sort posts
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortLatestFirst ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
  });

  return (
   <main
  className={`min-h-screen w-screen bg-[#16001F] text-white flex flex-col items-center ${montserrat.className}`}
>
      {/* Title */}
      <section className="text-center mt-[5vh] mb-[4vh]">
        <h2 className="text-[4vw] font-extrabold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-[6vh]">
          Blog
        </h2>
        <p className="text-[1.5vw] text-gray-300 mb-[10vh]">
          Sharing our thoughts and experiences on topics we love
        </p>
      </section>

      {/* Tags */}
      <section className="flex flex-wrap justify-center gap-[1vw] mb-[14vh] w-[80vw]">
        {allTags.map(tag => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-[2vw] py-[1vh] rounded-full font-medium text-[1.15vw] transition-all ${
                isSelected
                  ? 'bg-[#953FB9] text-white hover:bg-[#8539A7]'
                  : 'bg-[#953FB9]/30 text-purple-200 hover:bg-[#953FB9]/40'
              }`}
            >
              {tag}
              {isSelected && <span className="ml-[0.5vw] inline-block">×</span>}
            </button>
          );
        })}
      </section>

      {/* Sort and Count */}
     {/* Sort and Count */}
<section className="flex justify-between items-center w-[80vw] mb-[4vh]">
  <p className="text-[1.2vw] text-gray-300">
    Showing {posts.length} of {posts.length} Posts
  </p>
  <button
    onClick={() => setSortLatestFirst(prev => !prev)}
    className="flex items-center gap-[0.5vw] text-[1.2vw] text-gray-300 hover:text-white transition-colors"
  >
    <img
      src={
        sortLatestFirst
          ? "/blog_assets/Sort Buttons.svg"
          : "/blog_assets/Sort Buttons2.svg"
      }
      alt="Sort Button"
      className="h-[3vh] w-auto transition-all duration-200"
    />
  </button>
</section>

      {/* Posts */}
      <section className="flex flex-col gap-[3vh] w-[80vw] mb-[5vh]">
        {sortedPosts.map((post, i) => (
          <article
            key={i}
            className="p-[3vw] bg-[#28013C] rounded-[2vw] border border-[#6226A2] transition-all cursor-pointer hover:scale-[1.01]"
          >
            <p className="text-[1vw] text-purple-300 mb-[1vh]">{post.date}</p>
            <h2 className="text-[2vw] font-bold mb-[1vh]">{post.title}</h2>
            {post.desc && (
              <p className="text-[1vw] text-gray-300">{post.desc}</p>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}