import Footer from '@/components/footer'
import Hero from '@/components/project/hero'
import About from '@/components/project/about'
import Images from '@/components/project/images'
import Pagination from '@/components/project/pagination'
import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/projects'
import type { Metadata } from 'next'

export function generateMetadata({ params }: { params: { slug: string }}): Metadata {
  const project = getProjectBySlug(params.slug)

  return {
    title: project?.name,
    alternates: {
      canonical: `https://asty.vercel.app/project/${project?.slug}`,
    },
  }
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