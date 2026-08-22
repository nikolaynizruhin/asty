import app from "@/config/app"
import { projects, categories } from "@/lib/fixtures"
import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projects.map((project) => ({
    url: `${app.url}/project/${project.slug}`,
    lastModified: project.updatedAt,
  }))

  const categoryPages = categories.map((category) => ({
    url: `${app.url}/projects/${category}`,
    lastModified: "2024-03-05",
  }))

  return [
    {
      url: app.url,
      lastModified: "2024-03-05",
    },
    {
      url: `${app.url}/contact`,
      lastModified: "2024-03-05",
    },
    {
      url: `${app.url}/projects`,
      lastModified: "2024-03-05",
    },
    ...categoryPages,
    ...projectPages,
  ]
}
