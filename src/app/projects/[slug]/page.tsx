import fs from "fs";
import path from "path";
import Link from "next/link";
import { Geist } from "next/font/google";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

import projectData from "@/data/projectData.json";

const geist = Geist({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams_one() {
  return projectData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projectData.projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div
        className={`min-h-screen w-screen bg-linear-to-b from-[#050505] via-[#0b0212] to-[#050505]
        text-white flex items-center justify-center ${geist.className}`}
      >
        <div className="text-center">
          <h1 className="text-6xl font-black mb-4">404</h1>
          <p className="text-slate-400 mb-8">Project not found</p>
          <Link href="/projects" className="text-[#9433EC] hover:underline">
            ← Back to all projects
          </Link>
        </div>
      </div>
    );
  }

  // Read markdown file from /public
  const filePath = path.join(
    process.cwd(),
    "public",
    project.markdown.replace(/^\/+/, "")
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
          {project.technologies.map((tag: string, idx: number) => (
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
          {project.name}
          <span className="text-[#9433EC]">.</span>
        </h1>

        {/* Project Link Box */}
        {project.link && (
          <div className="mb-8 inline-block">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white/20 rounded-lg text-slate-300 text-sm font-medium
              hover:border-[#9433EC] hover:text-[#9433EC] hover:bg-[#9433EC]/5
              transition-all duration-200"
            >
              View Project →
            </a>
          </div>
        )}

        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-white/10">
          {/* <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
            <img
              src="/blog_assets/avatar.png"
              alt="Author"
              className="w-full h-full object-cover"
            />
          </div> */}
          <div>
            <div className="text-sm font-semibold text-slate-200">
              {project.author}
            </div>
            <div className="text-xs text-slate-500">
              {new Date(project.date).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}{" "}
              · {project.readTime}
            </div>
          </div>
        </div>

        {/* Markdown Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
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
              code: ({ inline, ...props }: any) =>
                inline ? (
                  <code
                    className="bg-white/10 px-2 py-1 rounded text-sm font-mono text-[#9433EC]"
                    {...props}
                  />
                ) : (
                  <code {...props} />
                ),
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
