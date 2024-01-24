import Footer from '@/src/components/footer'
import Hero from '@/src/components/project/hero'
import About from '@/src/components/project/about'
import Images from '@/src/components/project/images'
import Pagination from '@/src/components/project/pagination'
import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/src/lib/projects'

export async function generateMetadata({ params }: { params: { slug: string }}) {
  const project = getProjectBySlug(params.slug)

  return {
    title: project?.name,
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