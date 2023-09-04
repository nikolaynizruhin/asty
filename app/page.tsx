import Footer from '@/components/footer'
import Hero from '@/app/components/hero'
import About from '@/app/components/about'
import Projects from '@/app/components/projects'
import Feature from '@/app/components/feature'
import Career from '@/app/components/career'
import Contact from './components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Feature />
      <Career />
      <Contact />
      <Footer isDark />
    </>
  )
}
