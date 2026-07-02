import { projects } from "@/data/projects";
import type { Project } from "@/types";

export function getPublishedProjects(): readonly Project[] {
  return projects.filter((project) => project.status === "published");
}

export function getFeaturedProjects(): readonly Project[] {
  return getPublishedProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getPublishedProjects().find((project) => project.slug === slug);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const publishedProjects = getPublishedProjects();
  const currentIndex = publishedProjects.findIndex((project) => project.slug === currentSlug);

  if (currentIndex < 0 || publishedProjects.length < 2) {
    return undefined;
  }

  return publishedProjects[(currentIndex + 1) % publishedProjects.length];
}

export function formatProjectYear(project: Project) {
  return project.year ? String(project.year) : "Year to be confirmed";
}

export function formatProjectDisciplines(project: Project) {
  return project.disciplines.join(" / ");
}
