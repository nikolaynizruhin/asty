import Header from '@/src/components/header'
import Footer from '@/src/components/footer'
import Contact from '@/src/app/projects/components/contact'
import ProjectList from '@/src/app/projects/components/projects'

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