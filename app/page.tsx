import Footer from '@/components/footer'
import Hero from '@/app/components/hero'
import About from '@/app/components/about'
import Projects from '@/app/components/projects'
import Steps from '@/app/components/steps'
import Career from '@/app/components/career'
import Contact from '@/app/components/contact'
import Services from '@/app/components/services'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Steps />
      <Services />
      <Career />
      <Contact />
      <Footer isDark />
    </>
  )
}
