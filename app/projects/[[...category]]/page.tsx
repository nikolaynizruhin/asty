import Header from '@/components/header'
import Footer from '@/components/footer'
import Contact from '@/components/projects/contact'
import ProjectList from '@/components/projects/projects'
import { Category } from '@/lib/definitions'
import { Metadata } from 'next'
import { isCategory } from '@/lib/utils'
import { notFound } from 'next/navigation'

export function generateMetadata({ params }: { params: { category?: Category[] }}): Metadata {
  const category = params?.category?.[0]

  switch (category) {
    case 'architecture': {
      let title = 'Архітектурні проекти та рішення'
      let description = "Архітектурні проекти та рішення ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY"

      return {
        title,
        description,
        openGraph: {
          title,
          description,
        }
      }
    }
    case 'interior': {
      let title = "Дизайн-проекти інтер'єру"
      let description = "Дизайн-проекти інтер'єру ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY"

      return {
        title,
        description,
        openGraph: {
          title,
          description
        }
      }
    }
    case 'commerce': {
      let title = "Проєкти дизайну для комерційних приміщень"
      let description = "Дизайн-проекти інтер'єру та архітектурні рішення для комерційних приміщень ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY"

      return {
        title,
        description,
        openGraph: {
          title,
          description,
        }
      }
    }
    default: {
      let title = 'Проєкти'
      let description = "Дизайн-проекти інтер'єру, архітектурні проекти, рішення з комплектації та меблювання ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY"

      return {
        title,
        description,
        openGraph: {
          title,
          description,
        }
      };
    }
  }
}

export default function Projects({ params }: { params: { category?: Category[] }}) {
  const category = params?.category?.[0]

  if (!isCategory(category)) {
    notFound();
  }

  return (
    <>
      <Header isDark />
      <ProjectList category={category} />
      <Contact />
      <Footer />
    </>
  )
}