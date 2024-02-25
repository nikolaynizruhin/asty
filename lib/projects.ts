import fs from "fs";
import { Category, Image, Project, Detail } from "./definitions";
import projects from "./fixtures";

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

export function getProjectDetails(project: Project): Detail[] {
  const style = project.category === 'architecture'
    ? 'Стиль архітектури'
    : 'Стиль дизайну';

  return [
    {
      icon: "geo-alt",
      name: "Локація",
      value: project.location,
    },
    {
      icon: "houses",
      name: "Площа",
      value: project.area,
    },
    {
      icon: "calendar3",
      name: "Термін реалізації",
      value: project.date,
    },
    {
      icon: "vector-pen",
      name: style,
      value: project.style,
    }
  ];
}

export function getProjectImages(project: Project): Image[] {
  return fs.readdirSync(process.cwd() + "/public/images/projects/" + project.slug)
    .filter(image => image.endsWith(".jpg") && image !== "hero.jpg")
    .map((image, index) => {
      const isLandscape = project.category !== 'interior' ||  ['4.jpg', '7.jpg'].includes(image);

      return {
        src: "/images/projects/" + project.slug + "/" + image,
        alt: `${project.name} - фото ${index + 1} | ASTY`,
        width: isLandscape ? 905 : 640,
        height: isLandscape ? 640 : 905,
        isLandscape
      }
    });
}