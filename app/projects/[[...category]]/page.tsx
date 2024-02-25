import Header from '@/components/header'
import Footer from '@/components/footer'
import Contact from '@/components/projects/contact'
import ProjectList from '@/components/projects/projects'
import { Category } from '@/lib/definitions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Проєкти',
}

export default function Projects({ params }: { params: { category?: Category[] }}) {
  return (
    <>
      <Header isDark />
      <ProjectList category={params?.category?.[0]} />
      <Contact />
      <Footer />
    </>
  )
}