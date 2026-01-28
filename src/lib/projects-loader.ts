import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: "Ongoing" | "Complete";
  techs: string[];
  github?: string;
  content: string;
}

export async function getProjects(): Promise<Project[]> {
  const projectsDir = path.join(process.cwd(), "public", "projects");

  // Create projects directory if it doesn't exist
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
    return [];
  }

  const files = fs
    .readdirSync(projectsDir)
    .filter((file) => file.endsWith(".md"));

  const projects: Project[] = files.map((file) => {
    const filePath = path.join(projectsDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      id: file.replace(".md", ""),
      title: data.title || "Untitled",
      subtitle: data.subtitle || "",
      description: data.description || "",
      status: data.status || "Ongoing",
      techs: data.techs || [],
      github: data.github || "",
      content: content,
    };
  });

  return projects;
}

const AVAILABLE_TECHS = [
  "Astro",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "SolidJS",
  "React",
  "Svelte",
  "Sveltekit",
  "Vue",
];

export function getAllTechs(projects: Project[]): string[] {
  // Combine available techs with techs from projects to ensure all are shown
  const techs = new Set<string>(AVAILABLE_TECHS);
  projects.forEach((project) => {
    project.techs.forEach((tech) => techs.add(tech));
  });
  return Array.from(techs).sort();
}

export function getStatuses(projects: Project[]): string[] {
  const statuses = new Set<string>();
  projects.forEach((project) => {
    statuses.add(project.status);
  });
  return Array.from(statuses).sort();
}
