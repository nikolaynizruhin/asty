import Footer from '@/components/footer'
import Hero from '@/components/project/hero'
import About from '@/components/project/about'
import Images from '@/components/project/images'
import Pagination from '@/components/project/pagination'
import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/projects'
import type { Metadata } from 'next'
import { addRobots, getSentence } from '@/lib/utils'
import app from '@/config/app'

export function generateMetadata({ params, searchParams }: { params: { slug: string }, searchParams: object }): Metadata {
  const project = getProjectBySlug(params.slug)

  const metadata: Metadata = {
    title: project?.title,
    description: getSentence(project?.concept ?? '') + ' ➤ Дивитися фото та опис на сайті архітектурно-дизайнерського бюро ASTY',
    alternates: {
      canonical: `${app.url}/project/${project?.slug}`,
    },
    openGraph: {
      title: project?.title,
      description: getSentence(project?.concept ?? ''),
      url: `${app.url}/project/${project?.slug}`,
      images: [{ url: app.url + "/images/projects/" + project?.slug + "/hero.jpg" }],
    }
  }

  return addRobots(metadata, searchParams)
}

export default function Project({ params }: { params: { slug: string }}) {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    notFound();
  }

  return (
    <>
      <Hero project={project} />
      <About project={project} />
      <Images project={project} />
      <Pagination project={project} />
      <Footer isDark />
    </>
  )
}