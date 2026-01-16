import fs from "fs";
import path from "path";
import Link from "next/link";
import { Geist } from "next/font/google";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

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

export async function generateStaticParams() {
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
        className={`min-h-screen w-screen bg-gradient-to-b from-[#050505] via-[#0b0212] to-[#050505]
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
          href="/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-[#9433EC]
          transition-colors text-sm font-medium group"
        >
          <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">
            west
          </span>
          Back to all projects
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

        {/* Project Link */}
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

        {/* Meta */}
        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-white/10">
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

        {/* Markdown */}
        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
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
              li: ({ ...props }) => <li className="mb-2" {...props} />,
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
                      showLineNumbers
                      wrapLines
                      codeTagProps={{
                        style: {
                          fontFamily:
                            'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                        },
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
