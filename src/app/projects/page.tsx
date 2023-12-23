import Header from '@/src/components/header'
import Footer from '@/src/components/footer'
import Contact from '@/src/app/projects/components/contact'
import ProjectList from '@/src/app/projects/components/projects'
import { Category } from '@/src/lib/definitions'

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