import Footer from '@/src/components/footer'
import Hero from '@/src/app/components/hero'
import About from '@/src/app/components/about'
import Projects from '@/src/app/components/projects'
import Steps from '@/src/app/components/steps'
import Career from '@/src/app/components/career'
import Contact from '@/src/app/components/contact'
import Services from '@/src/app/components/services'

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
