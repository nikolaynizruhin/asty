import app from '@/config/app';
import { default as projectList } from '@/lib/fixtures';
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const projects = projectList.map(project => ({
    url: `${app.url}/project/${project.slug}`,
    lastModified: project.updatedAt,
  }))

  const categories = ['architecture', 'interior', 'commerce'].map(category => ({
    url: `${app.url}/projects/${category}`,
    lastModified: '2024-03-05',
  }))

  return [
    {
      url: app.url,
      lastModified: '2024-03-05',
    },
    {
      url: `${app.url}/contact`,
      lastModified: '2024-03-05',
    },
    {
      url: `${app.url}/projects`,
      lastModified: '2024-03-05',
    },
    ...categories,
    ...projects,
  ];
}
