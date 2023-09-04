import Header from '@/components/header'
import Footer from '@/components/footer'
import Contact from '@/app/projects/components/contact'
import ProjectList from '@/app/projects/components/projects'

export default function Projects() {
  return (
    <>
      {/* Header */}
      <Header isDark />
      <ProjectList />
      <Contact />
      <Footer />
    </>
  )
}