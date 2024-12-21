import { Metadata } from 'next'
import Footer from '@/components/footer'
import Hero from '@/components/home/hero'
import About from '@/components/home/about'
import Categories from '@/components/home/categories'
import Steps from '@/components/home/steps'
import Career from '@/components/home/career'
import Contact from '@/components/contact'
import Services from '@/components/home/services'
import { addRobots } from '@/lib/utils'
import app from '@/config/app'
import StructuredData from '@/components/home/structured-data'

export async function generateMetadata(props: { searchParams: Promise<object> }): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const metadata: Metadata = {
    title: "Студія дизайну інтерʼєру ASTY",
    description: "ASTY – архітектурно-дизайнерське бюро, яке працює в сфері дизайну інтер’єру та архітектури по всьому світі ➣ Коли кожний квадратний метр має значення",
    alternates: {
      canonical: app.url,
    },
  }

  return addRobots(metadata, searchParams)
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
      <Contact className='py-20 xl:py-32' />
      <Footer isDark />
      <StructuredData />
    </>
  )
}
