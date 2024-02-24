import { default as projectList } from '@/lib/fixtures';
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const projects = projectList.map(project => ({
    url: `https://asty.vercel.app/projects/${project.slug}`,
    lastModified: project.updatedAt,
  }));

  return [
    {
      url: 'https://asty.vercel.app',
      lastModified: '2024-01-01',
    },
    {
      url: 'https://asty.vercel.app/contact',
      lastModified: '2024-01-01',
    },
    ...projects,
  ];
}
