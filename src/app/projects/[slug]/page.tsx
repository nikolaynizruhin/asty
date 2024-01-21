import Footer from '@/src/components/footer'
import Hero from '@/src/app/projects/[slug]/components/hero'
import About from '@/src/app/projects/[slug]/components/about'
import Images from '@/src/app/projects/[slug]/components/images'
import Pagination from '@/src/app/projects/[slug]/components/pagination'
import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/src/lib/projects'

export default function Project({ params }: { params: { slug: string } }) {
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