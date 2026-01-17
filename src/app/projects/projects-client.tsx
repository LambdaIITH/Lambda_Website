"use client";

import { useState, useMemo } from "react";
import { Montserrat } from "next/font/google";

// REAL ICONS FROM REACT-ICONS
import {
  SiAstro,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiSolid,
  SiReact,
  SiSvelte,
  SiVuedotjs,
} from "react-icons/si";

import { TbBrandSvelte } from "react-icons/tb";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: "Ongoing" | "Complete";
  techs: string[];
  github?: string;
  content: string;
}

interface ProjectsPageClientProps {
  projects: Project[];
  allTechs: string[];
  statuses: string[];
}

// Mapping tech → icon component
const TechIcons: Record<string, any> = {
  Astro: SiAstro,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Tailwind: SiTailwindcss,
  SolidJS: SiSolid,
  React: SiReact,
  Svelte: SiSvelte,
  Sveltekit: TbBrandSvelte,
  Vue: SiVuedotjs,
};

export default function ProjectsPageClient({
  projects,
  allTechs,
  statuses,
}: ProjectsPageClientProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState(statuses[0] || "Ongoing");

  // Filter projects based on tech filters and status
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (project.status !== statusFilter) return false;
      if (activeFilters.length === 0) return true;
      return activeFilters.every((f) => project.techs.includes(f));
    });
  }, [projects, activeFilters, statusFilter]);

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  return (
    <main
      className={`min-h-screen w-screen bg-[#16001F] text-white flex flex-col items-center ${montserrat.className}`}
    >
      {/* HEADER */}
      <section className="text-center mt-[100px] mb-[80px] w-[1200px]">
        <h1 className="text-[40px] font-extrabold bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-[18px]">
          Projects
        </h1>
        <p className="text-[17px] text-gray-300">
          Cool stuff we've built—innovative, bold, and kinda awesome. 🚀
        </p>
      </section>

      {/* FILTERS */}
      <section className="flex w-[54.5vw] ml-[8vw] mb-[54px] justify-start">
        <div className="flex flex-wrap gap-[16px]">
          {allTechs.map((tech) => {
            const IconComponent = TechIcons[tech];
            return (
              <button
                key={tech}
                onClick={() => toggleFilter(tech)}
                className={`px-[26px] py-[9px] rounded-full font-medium text-[16px] flex items-center gap-2 transition-all ${
                  activeFilters.includes(tech)
                    ? "bg-[#953FB9] text-white hover:bg-[#8539A7]"
                    : "bg-[#953FB9]/30 text-purple-200 hover:bg-[#953FB9]/40"
                }`}
              >
                {IconComponent && <IconComponent className="text-lg" />}
                {tech}
                {activeFilters.includes(tech) && <span>×</span>}
              </button>
            );
          })}
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section className="w-[1200px] mb-[72px]">
        <div className="flex gap-[58px] items-start">
          <div className="flex flex-col gap-[20px]">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`text-[20px] font-semibold transition-colors ${
                  statusFilter === status
                    ? "text-white"
                    : "text-purple-400 hover:text-purple-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[42px]">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#28013C] rounded-[1.2rem] border border-[#6226A2] shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition-all p-[27px] flex flex-col justify-between aspect-square group hover:bg-[#8539A7] cursor-pointer"
                >
                  <div className="group-hover:hidden">
                    <p className="text-purple-300 text-[16px] mb-[5px] font-medium">
                      {project.subtitle}
                    </p>
                    <h3 className="text-[28px] font-bold mb-[14px]">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex flex-col justify-between gap-4 flex-1">
                    <div className="hidden group-hover:block text-[22px] text-gray-300 max-h-[60px] overflow-hidden">
                      {project.description}
                    </div>

                    <div className="group-hover:hidden flex items-center gap-3 flex-wrap">
                      {project.techs.map((tech, idx) => {
                        const IconComponent = TechIcons[tech];
                        return (
                          <div
                            key={idx}
                            className={`p-2 rounded-lg transition-colors ${
                              activeFilters.includes(tech)
                                ? "bg-[#953FB9] text-white"
                                : "bg-[#953FB9]/30 hover:bg-[#953FB9]/50"
                            }`}
                            title={tech}
                          >
                            {IconComponent && (
                              <IconComponent className="text-xl" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden group-hover:flex items-center gap-2 text-[16px] font-medium px-[26px] py-[9px] rounded-full text-white hover:text-gray-200 transition-colors self-end"
                      >
                        <span>View Project</span>
                        <span className="text-lg">→</span>
                      </a>
                    ) : (
                      <button className="hidden group-hover:flex items-center gap-2 text-[16px] font-medium px-[26px] py-[9px] rounded-full text-white hover:text-gray-200 transition-colors self-end cursor-default">
                        <span>View Project</span>
                        <span className="text-lg">→</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE VW/VH RESPONSIVE OVERRIDES */}
      <style jsx>{`
        @media (max-width: 768px) {
          main {
            padding: 4vw;
          }

          section.text-center {
            width: 90vw !important;
            margin-top: 10vh;
            margin-bottom: 6vh;
          }

          section.text-center h1 {
            font-size: 8vw !important;
            margin-bottom: 2vh !important;
          }

          section.text-center p {
            font-size: 4vw !important;
          }

          section:nth-of-type(2) {
            width: 90vw !important;
            margin-bottom: 5vh !important;
            flex-wrap: wrap;
            gap: 3vw !important;
          }

          section:nth-of-type(2) button {
            font-size: 3.2vw !important;
            padding: 2vw 4vw !important;
            border-radius: 8vw !important;
          }

          section:nth-of-type(3) {
            width: 90vw !important;
            margin-bottom: 8vh !important;
          }

          section:nth-of-type(3) > div {
            flex-direction: column;
            gap: 4vh !important;
          }

          section:nth-of-type(3) button {
            font-size: 4vw !important;
          }

          section:nth-of-type(3) .grid {
            grid-template-columns: 1fr !important;
            gap: 5vw !important;
          }

          section:nth-of-type(3) .grid > div {
            padding: 4vw !important;
            border-radius: 4vw !important;
            height: auto !important;
            aspect-ratio: unset !important;
          }

          section:nth-of-type(3) h3 {
            font-size: 5vw !important;
          }

          section:nth-of-type(3) p {
            font-size: 3.5vw !important;
          }
        }
      `}</style>
    </main>
  );
}
