import fs from "fs";
import path from "path";
import Link from "next/link";
import { Geist } from "next/font/google";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

import blogData from "@/data/blogData.json";

const geist = Geist({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogData.blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const blog = blogData.blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div
        className={`min-h-screen w-screen bg-gradient-to-b from-[#050505] via-[#0b0212] to-[#050505]
        text-white flex items-center justify-center ${geist.className}`}
      >
        <div className="text-center">
          <h1 className="text-6xl font-black mb-4">404</h1>
          <p className="text-slate-400 mb-8">Blog not found</p>
          <Link href="/blog" className="text-[#9433EC] hover:underline">
            ← Back to all blogs
          </Link>
        </div>
      </div>
    );
  }

  // Read markdown file from /public
  const filePath = path.join(
    process.cwd(),
    "public",
    blog.markdown.replace(/^\/+/, "")
  );

  const markdownContent = fs.readFileSync(filePath, "utf-8");

  return (
    <main
      className={`min-h-screen w-screen bg-gradient-to-b from-[#050505] via-[#0b0212] to-[#050505]
      text-white ${geist.className}`}
    >
      {/* Back Button */}
      <div className="w-[90vw] md:w-[70vw] mx-auto pt-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-[#9433EC]
          transition-colors text-sm font-medium group"
        >
          <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">
            west
          </span>
          Back to all posts
        </Link>
      </div>

      <article className="w-[90vw] md:w-[70vw] mx-auto py-12 pb-24">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {blog.tags.map((tag: string, idx: number) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-[#9433EC]/10 border border-[#9433EC]/30
              text-[#9433EC] text-[10px] font-bold uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
          {blog.title}
          <span className="text-[#9433EC]">.</span>
        </h1>

        {/* Meta Info */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-6 mb-4">
            {blog.authors.map((author, idx) => (
              <a
                key={idx}
                href={`https://github.com/${author.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 overflow-hidden group-hover:border-[#9433EC] transition-colors">
                  <img
                    src="/blog_assets/avatar.png"
                    alt={author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm font-semibold text-slate-200 group-hover:text-[#9433EC] transition-colors">
                  {author.name}
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-xs text-slate-500">
            {new Date(blog.published_date).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}{" "}
            · {blog.readTime}
          </div>
        </div>

        {/* Markdown Content */}
        <div className="prose prose-invert prose-lg mx-auto max-w-[760px]
        prose-pre:my-8
        prose-pre:p-0
        prose-code:bg-transparent
        prose-code:p-0
        prose-code:border-0">

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[[rehypeRaw, { passThrough: ['element'] }]]}
            components={{
              h1: ({ ...props }) => (
                <h1 className="text-5xl font-black mt-12 mb-6" {...props} />
              ),
              h2: ({ ...props }) => (
                <h2 className="text-4xl font-bold mt-10 mb-5" {...props} />
              ),
              h3: ({ ...props }) => (
                <h3 className="text-2xl font-semibold mt-8 mb-4" {...props} />
              ),
              p: ({ ...props }) => (
                <p className="text-slate-300 leading-relaxed mb-6 font-light" {...props} />
              ),
              ul: ({ ...props }) => (
                <ul className="list-disc ml-6 mb-6 text-slate-300" {...props} />
              ),
              ol: ({ ...props }) => (
                <ol className="list-decimal ml-6 mb-6 text-slate-300" {...props} />
              ),
              li: ({ ...props }) => (
                <li className="mb-2" {...props} />
              ),
              a: ({ ...props }) => (
                <a className="text-[#9433EC] underline font-medium" {...props} />
              ),
              blockquote: ({ ...props }) => (
                <blockquote
                  className="border-l-4 border-[#9433EC] pl-6 italic text-slate-400 my-8"
                  {...props}
                />
              ),
              img: ({ ...props }) => (
                <div className="flex justify-center my-8">
                  <img 
                    className="rounded-lg border border-white/10 max-w-full h-auto" 
                    {...props} 
                  />
                </div>
              ),
              table: ({ ...props }) => (
                <div className="my-8 overflow-x-auto">
                  <table 
                    className="w-full border-collapse border border-white/20 rounded-lg overflow-hidden"
                    {...props} 
                  />
                </div>
              ),
              thead: ({ ...props }) => (
                <thead className="bg-[#9433EC]/20" {...props} />
              ),
              tbody: ({ ...props }) => (
                <tbody {...props} />
              ),
              tr: ({ ...props }) => (
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors" {...props} />
              ),
              th: ({ ...props }) => (
                <th 
                  className="px-6 py-4 text-left text-sm font-bold text-slate-200 border-r border-white/10 last:border-r-0"
                  {...props} 
                />
              ),
              td: ({ ...props }) => (
                <td 
                  className="px-6 py-4 text-sm text-slate-300 border-r border-white/10 last:border-r-0"
                  {...props} 
                />
              ),
              pre: ({ children, ...props }) => {
                return <div className="my-8">{children}</div>;
              },
              code: ({ inline, className, children, ...props }: any) => {
                const match = /language-(\w+)/.exec(className || "");
                const language = match ? match[1] : "";
                const codeContent = String(children).replace(/\n$/, "");
                
                // Check if it's a multi-line code block without language specification
                // (this is what happens with triple backticks but no language)
                const isMultiLineBlock = !inline && codeContent.includes('\n');

                if (!inline && language) {
                  return (
                    <div className="relative rounded-xl border border-white/10 overflow-hidden bg-[#1d1f21] my-8">
                      <SyntaxHighlighter
                        language={language}
                        style={tomorrow}
                        PreTag="div"
                        customStyle={{
                          margin: 0,
                          padding: "1.75rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.75",
                          background: "transparent",
                        }}
                        codeTagProps={{
                          style: {
                            lineHeight: "1.75",
                            fontFamily: "monospace",
                          }
                        }}
                        {...props}
                      >
                        {codeContent}
                      </SyntaxHighlighter>
                    </div>
                  );
                }

                if (isMultiLineBlock) {
                  // Multi-line code block without language (triple backticks, no language)
                  return (
                    <pre className="block bg-slate-800/60 px-4 py-3 rounded-md text-sm font-mono text-slate-200 whitespace-pre-wrap my-4 overflow-x-auto">
                      <code>{codeContent}</code>
                    </pre>
                  );
                }

                if (!inline) {
                  // Single line code block
                  return (
                    <code className="inline-block bg-slate-800/60 px-2 py-0.5 rounded-md text-sm font-mono text-slate-200">
                      {codeContent}
                    </code>
                  );
                }

                // Inline code (single backticks)
                return (
                  <code className="bg-slate-800/60 px-1.5 py-0.5 rounded text-sm font-mono text-slate-200 inline-block">
                    {children}
                  </code>
                );
              },
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}