import app from '@/config/app';
import { default as projectList } from '@/lib/fixtures';
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const projects = projectList.map(project => ({
    url: `${app.url}/projects/${project.slug}`,
    lastModified: project.updatedAt,
  }));

  return [
    {
      url: app.url,
      lastModified: '2024-01-01',
    },
    {
      url: `${app.url}/contact`,
      lastModified: '2024-01-01',
    },
    ...projects,
  ];
}
