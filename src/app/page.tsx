import Footer from '@/src/components/footer'
import Hero from '@/src/components/home/hero'
import About from '@/src/components/home/about'
import Categories from '@/src/components/home/categories'
import Steps from '@/src/components/home/steps'
import Career from '@/src/components/home/career'
import Contact from '@/src/components/contact'
import Services from '@/src/components/home/services'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Categories />
      <Steps />
      <Services />
      <Career />
      <Contact className='py-20 xl:py-32' />
      <Footer isDark />
    </>
  )
}
