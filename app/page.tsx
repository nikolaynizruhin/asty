import { Metadata } from 'next'
import Footer from '@/components/footer'
import Hero from '@/components/home/hero'
import About from '@/components/home/about'
import Categories from '@/components/home/categories'
import Steps from '@/components/home/steps'
import Career from '@/components/home/career'
import Contact from '@/components/contact'
import Services from '@/components/home/services'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://asty.vercel.app',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Categories />
      <Steps />
      <Services />
      <Career />
      <Contact asPage={false} className='py-20 xl:py-32' />
      <Footer isDark />
    </>
  )
}
