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
        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-white/10">
          <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
            <img
              src="/blog_assets/avatar.png"
              alt="Author"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-200">
              {blog.author}
            </div>
            <div className="text-xs text-slate-500">
              {new Date(blog.published_date).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}{" "}
              · {blog.readTime} min read
            </div>
          </div>
        </div>

        {/* Markdown Content */}
        <div className="prose prose-invert prose-lg max-w-none">
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
              code: ({ inline, className, children, ...props }: any) => {
                const match = /language-(\w+)/.exec(className || "");
                const language = match ? match[1] : "";

                return !inline && language ? (
                  <div className="my-8 overflow-hidden rounded-lg border border-white/10">
                    <SyntaxHighlighter
                      style={tomorrow}
                      language={language}
                      PreTag="div"
                      customStyle={{
                        margin: 0,
                        padding: "1.5rem",
                        fontSize: "0.875rem",
                        lineHeight: "1.7",
                        background: "#1d1f21",
                      }}
                      showLineNumbers={true}
                      wrapLines={true}
                      codeTagProps={{
                        style: {
                          fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                        }
                      }}
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code
                    className="bg-slate-800/50 border border-slate-700/50 px-2 py-0.5 rounded text-sm font-mono text-slate-200"
                    {...props}
                  >
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