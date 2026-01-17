import { getProjects, getAllTechs, getStatuses } from '@/lib/projects-loader';
import ProjectsPageClient from './projects-client';

export default async function ProjectsPage() {
  const projects = await getProjects();
  const allTechs = getAllTechs(projects);
  const statuses = getStatuses(projects);

  return <ProjectsPageClient projects={projects} allTechs={allTechs} statuses={statuses} />;
}
