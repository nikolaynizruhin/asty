import Footer from '@/src/components/footer'
import Hero from '@/src/app/projects/[slug]/components/hero'
import About from '@/src/app/projects/[slug]/components/about'
import Planning from '@/src/app/projects/[slug]/components/planning'
import Images from '@/src/app/projects/[slug]/components/images'
import Pagination from '@/src/app/projects/[slug]/components/pagination'
import { notFound } from 'next/navigation'
import projects from '@/src/lib/data'

export default function Project({ params }: { params: { slug: string } }) {
  const project = projects.find(project => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Hero project={project} />
      <About project={project} />
      {/* <Planning /> */}
      <Images project={project} />
      <Pagination />
      <Footer isDark />
    </>
  )
}