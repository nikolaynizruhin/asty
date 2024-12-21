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
import Contact from '@/components/contact'

export async function generateMetadata(
  props: { params: Promise<{ slug: string }>, searchParams: Promise<object> }
): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const params = await props.params;
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

export default async function Project(props: { params: Promise<{ slug: string }>}) {
  const params = await props.params;
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
      <Contact className='pb-20 xl:pb-32' />
      <Footer isDark />
    </>
  )
}