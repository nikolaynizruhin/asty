import Footer from '@/src/components/footer'
import Hero from '@/src/app/components/hero'
import About from '@/src/app/components/about'
import Categories from '@/src/app/components/categories'
import Steps from '@/src/app/components/steps'
import Career from '@/src/app/components/career'
import Contact from '@/src/app/components/contact'
import Services from '@/src/app/components/services'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Categories />
      <Steps />
      <Services />
      <Career />
      <Contact />
      <Footer isDark />
    </>
  )
}
