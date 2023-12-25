import { Category, Project } from "./definitions";
import projects from "./projects";

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getProjectsByCategory(category?: Category): Project[] {
  return category
    ? projects.filter(project => project.category === category)
    : projects;
}

export function getNextProject(project: Project): Project | undefined {
  const lastProject = projects.at(-1);

  return project === lastProject
    ? projects.at(0)
    : projects.at(project.id);
}

export function getPreviousProject(project: Project): Project | undefined {
  const firstProject = projects.at(0);

  return project === firstProject
    ? projects.at(-1)
    : projects.at(project.id - 2);
}