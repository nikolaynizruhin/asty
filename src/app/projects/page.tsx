import Header from '@/src/components/header'
import Footer from '@/src/components/footer'
import Contact from '@/src/components/projects/contact'
import ProjectList from '@/src/components/projects/projects'
import { Category } from '@/src/lib/definitions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Проєкти',
}

export default function Projects({ searchParams }: { searchParams: { [category: string]: Category }}) {
  const category = searchParams.category ?? null

  return (
    <>
      <Header isDark />
      <ProjectList category={category} />
      <Contact />
      <Footer />
    </>
  )
}