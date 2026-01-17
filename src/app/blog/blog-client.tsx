'use client';

import { useState, useMemo } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

interface BlogPost {
  id: string;
  title: string;
  date: string;
  desc: string;
  tags: string[];
  content: string;
}

interface BlogPageProps {
  posts: BlogPost[];
  allTags: string[];
}

export default function BlogPage({ posts, allTags }: BlogPageProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortLatestFirst, setSortLatestFirst] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Filter posts based on selected tags
  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) {
      return posts;
    }
    return posts.filter(post =>
      selectedTags.some(tag => post.tags.includes(tag))
    );
  }, [posts, selectedTags]);

  const sortedPosts = useMemo(() => {
    const sorted = [...filteredPosts].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortLatestFirst ? dateB - dateA : dateA - dateB;
    });
    return sorted;
  }, [filteredPosts, sortLatestFirst]);

  return (
   <main
  className={`min-h-screen w-screen bg-[#16001F] text-white flex flex-col items-center ${montserrat.className}`}
>
      {/* Title */}
      <section className="text-center mt-[100px] mb-[40px]">
        <h2 className="text-[40px] font-extrabold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-[54px] ">
          Blog
        </h2>
        <p className="text-[22px] text-gray-300 mb-[90px]">
          Sharing our thoughts and experiences on topics we love
        </p>
      </section>

      {/* Tags */}
      <section className="flex flex-wrap justify-center gap-[14px] mb-[126px] w-[1152px]">
        {allTags.map(tag => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-[29px] py-[9px] rounded-full font-medium text-[17px] transition-all ${
                isSelected
                  ? 'bg-[#953FB9] text-white hover:bg-[#8539A7]'
                  : 'bg-[#953FB9]/30 text-purple-200 hover:bg-[#953FB9]/40'
              }`}
            >
              {tag}
              {isSelected && <span className="ml-[7px] inline-block">×</span>}
            </button>
          );
        })}
      </section>

      {/* Sort and Count */}
<section className="flex justify-between items-center w-[1200px] mb-[36px]">
  <p className="text-[17px] bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold">
    Showing {filteredPosts.length} of {posts.length} Posts
  </p>
  <button
    onClick={() => setSortLatestFirst(prev => !prev)}
    className="flex items-center gap-[7px] text-[17px] text-gray-300 hover:text-white transition-colors"
  >
    <img
      src={
        sortLatestFirst
          ? "/blog_assets/Sort Buttons.svg"
          : "/blog_assets/Sort Buttons2.svg"
      }
      alt="Sort Button"
      className="h-[27px] w-auto transition-all duration-200"
    />
  </button>
</section>

      {/* Posts */}
      <section className="flex flex-col gap-[27px] w-[1200px] mb-[45px]">
        {sortedPosts.map((post, i) => (
          <article
            key={i}
            onClick={() => setSelectedPost(post)}
            className="p-[33px] bg-[#28013C] rounded-[2vw] border border-[#6226A2] transition-all cursor-pointer hover:scale-[1.01] relative group"
          >
            <div className="flex justify-between items-start gap-[20px]">
              <div className="flex-1">
                <p className="text-[16px] text-purple-300 mb-[9px]">{post.date}</p>
                <h2 className="text-[33px] font-bold mb-[15px]">{post.title}</h2>
                {post.desc && (
                  <p className="text-[16px] text-gray-300 mb-[15px]">{post.desc}</p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-[10px]">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-[16px] py-[7px] bg-[#953FB9]/50 text-purple-100 rounded-full text-[14px] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center text-[41px] text-purple-300 group-hover:text-purple-100 transition-colors flex-shrink-0 mt-[10px]">
                →
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Blog Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-[20px]" onClick={() => setSelectedPost(null)}>
          <div className="bg-[#28013C] rounded-[2vw] border border-[#6226A2] max-w-[900px] w-full max-h-[80vh] overflow-y-auto p-[40px]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedPost(null)}
              className="float-right text-[30px] text-gray-400 hover:text-white transition-colors mb-[20px]"
            >
              ×
            </button>
            <p className="text-[14px] text-purple-300 mb-[15px]">{selectedPost.date}</p>
            <h1 className="text-[40px] font-bold mb-[20px] text-white">{selectedPost.title}</h1>
            {selectedPost.tags && selectedPost.tags.length > 0 && (
              <div className="flex flex-wrap gap-[10px] mb-[30px]">
                {selectedPost.tags.map(tag => (
                  <span key={tag} className="px-[15px] py-[5px] bg-[#953FB9]/30 text-purple-200 rounded-full text-[13px]">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {selectedPost.desc && (
              <p className="text-[16px] text-gray-300 mb-[30px] leading-relaxed">{selectedPost.desc}</p>
            )}
            <div className="prose prose-invert max-w-none text-gray-300">
              <div className="text-[16px] leading-relaxed whitespace-pre-wrap">
                {selectedPost.content}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE RESPONSIVE OVERRIDES USING VW/VH ONLY */}
      <style jsx>{`
        @media (max-width: 768px) {
          main {
            padding: 4vw;
          }

          section.text-center {
            margin-top: 12vh;
            margin-bottom: 4vh;
          }

          section.text-center h2 {
            font-size: 8vw;
            margin-bottom: 5vh;
          }

          section.text-center p {
            font-size: 4vw;
            margin-bottom: 10vh;
          }

          section:nth-of-type(2) {
            width: 90vw !important;
            gap: 2vw !important;
            margin-bottom: 10vh;
          }

          section:nth-of-type(2) button {
            font-size: 3.5vw !important;
            padding: 2vw 4vw !important;
            border-radius: 10vw !important;
          }

          section:nth-of-type(3) {
            width: 90vw !important;
            margin-bottom: 4vh !important;
          }

          section:nth-of-type(3) p,
          section:nth-of-type(3) button {
            font-size: 3.5vw !important;
          }

          section:nth-of-type(4) {
            width: 90vw !important;
            gap: 3vw !important;
          }

          section:nth-of-type(4) article {
            padding: 4vw !important;
            border-radius: 4vw !important;
            flex-direction: column !important;
          }

          section:nth-of-type(4) article > div {
            flex-direction: column !important;
          }

          section:nth-of-type(4) article h2 {
            font-size: 5vw !important;
          }

          section:nth-of-type(4) article p {
            font-size: 3.5vw !important;
          }

          section:nth-of-type(4) article .flex-shrink-0 {
            display: none !important;
          }
        }
      `}</style>

    </main>
  );
}
