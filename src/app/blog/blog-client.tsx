"use client";

import { useState, useMemo } from "react";
import { Montserrat } from "next/font/google";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
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
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  // Filter posts based on selected tags
  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) {
      return posts;
    }
    return posts.filter((post) =>
      selectedTags.some((tag) => post.tags.includes(tag)),
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

  const copyToClipboard = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <main
      className={`min-h-screen w-full bg-[#16001F] text-white flex flex-col items-center ${montserrat.className}`}
    >
      {/* Title */}
      <section className="text-center mt-[100px] mb-10">
        <h2 className="text-[40px] font-extrabold bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-[54px] ">
          Blog
        </h2>
        <p className="text-[22px] text-gray-300 mb-[90px]">
          Sharing our thoughts and experiences on topics we love
        </p>
      </section>

      {/* Tags */}
      <section className="flex flex-wrap justify-center gap-3.5 mb-[126px] w-6xl">
        {allTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-[29px] py-[9px] rounded-full font-medium text-[17px] transition-all ${
                isSelected
                  ? "bg-[#953FB9] text-white hover:bg-[#8539A7]"
                  : "bg-[#953FB9]/30 text-purple-200 hover:bg-[#953FB9]/40"
              }`}
            >
              {tag}
              {isSelected && <span className="ml-[7px] inline-block">×</span>}
            </button>
          );
        })}
      </section>

      {/* Sort and Count */}
      <section className="flex justify-between items-center w-[1200px] mb-9">
        <p className="text-[17px] bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold">
          Showing {filteredPosts.length} of {posts.length} Posts
        </p>
        <button
          onClick={() => setSortLatestFirst((prev) => !prev)}
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
            <div className="flex justify-between items-start gap-5">
              <div className="flex-1">
                <p className="text-[16px] text-purple-300 mb-[9px]">
                  {post.date}
                </p>
                <h2 className="text-[33px] font-bold mb-[15px]">
                  {post.title}
                </h2>
                {post.desc && (
                  <p className="text-[16px] text-gray-300 mb-[15px]">
                    {post.desc}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-[7px] bg-[#953FB9]/50 text-purple-100 rounded-full text-[14px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center text-[41px] text-purple-300 group-hover:text-purple-100 transition-colors shrink-0 mt-2.5">
                →
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Blog Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-5"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-[#28013C] rounded-[2vw] border border-[#6226A2] max-w-[900px] w-full max-h-[80vh] overflow-y-auto p-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="float-right text-[30px] text-gray-400 hover:text-white transition-colors mb-5"
            >
              ×
            </button>
            <p className="text-[14px] text-purple-300 mb-[15px]">
              {selectedPost.date}
            </p>
            <h1 className="text-[40px] font-bold mb-5 text-white">
              {selectedPost.title}
            </h1>
            {selectedPost.tags && selectedPost.tags.length > 0 && (
              <div className="flex flex-wrap gap-2.5 mb-[30px]">
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-[15px] py-[5px] bg-[#953FB9]/30 text-purple-200 rounded-full text-[13px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {selectedPost.desc && (
              <p className="text-[16px] text-gray-300 mb-[30px] leading-relaxed">
                {selectedPost.desc}
              </p>
            )}
            <div className="prose prose-invert prose-headings:text-white prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-4 prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-3 prose-h2:mt-6 prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-2 prose-h3:mt-4 prose-p:text-gray-300 prose-p:mb-4 prose-code:text-purple-300 prose-pre:bg-[#1a0028] prose-pre:border prose-pre:border-[#6226A2] prose-a:text-purple-400 prose-a:underline prose-strong:text-white prose-ul:text-gray-300 prose-ol:text-gray-300 max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || "");
                    const codeString = String(children).replace(/\n$/, "");

                    return !inline && match ? (
                      <div className="relative group my-4">
                        <div className="flex items-center justify-between bg-[#1a0028] border border-[#6226A2] rounded-t-lg px-4 py-2">
                          <span className="text-sm text-purple-300 font-mono">
                            {match[1]}
                          </span>
                          <button
                            onClick={() => copyToClipboard(codeString)}
                            className="flex items-center gap-2 px-3 py-1 text-sm text-gray-300 hover:text-white bg-[#953FB9]/30 hover:bg-[#953FB9]/50 rounded transition-all"
                          >
                            {copiedCode === codeString ? (
                              <>
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                Copied!
                              </>
                            ) : (
                              <>
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>
                                Copy
                              </>
                            )}
                          </button>
                        </div>
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          customStyle={{
                            margin: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            borderBottomLeftRadius: "0.5rem",
                            borderBottomRightRadius: "0.5rem",
                            background: "#1a0028",
                            border: "1px solid #6226A2",
                            borderTop: "none",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                          }}
                          codeTagProps={{
                            style: {
                              scrollbarWidth: "none",
                              msOverflowStyle: "none",
                            },
                          }}
                          {...props}
                        >
                          {codeString}
                        </SyntaxHighlighter>
                      </div>
                    ) : (
                      <code
                        className="bg-[#953FB9]/20 px-1.5 py-0.5 rounded text-purple-300"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {selectedPost.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE RESPONSIVE OVERRIDES USING VW/VH ONLY */}
      <style jsx>{`
        :global(.prose pre) {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        :global(.prose pre::-webkit-scrollbar) {
          display: none;
        }

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
