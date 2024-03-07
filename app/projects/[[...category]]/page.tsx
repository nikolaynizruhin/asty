import Header from '@/components/header'
import Footer from '@/components/footer'
import Contact from '@/components/projects/contact'
import { default as ContactFooter } from '@/components/contact'
import ProjectList from '@/components/projects/projects'
import { Category } from '@/lib/definitions'
import { Metadata } from 'next'
import { isCategory } from '@/lib/utils'
import { notFound } from 'next/navigation'
import app from '@/config/app'

export function generateMetadata({ params }: { params: { category?: Category[] }}): Metadata {
  const category = params?.category?.[0]

  switch (category) {
    case 'architecture': {
      let title = 'Архітектурні проекти та рішення'
      let description = "Архітектурні проекти та рішення ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY"

      return {
        title,
        description,
        alternates: {
          canonical: app.url + '/projects/architecture',
        },
        openGraph: {
          title,
          description,
          images: [{ url: app.url + "/images/categories/architecture.jpg" }],
        }
      }
    }
    case 'interior': {
      let title = "Дизайн-проекти інтер'єру"
      let description = "Дизайн-проекти інтер'єру ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY"

      return {
        title,
        description,
        alternates: {
          canonical: app.url + '/projects/interior',
        },
        openGraph: {
          title,
          description,
          images: [{ url: app.url + "/images/categories/interior.jpg" }],
        }
      }
    }
    case 'commerce': {
      let title = "Проєкти дизайну для комерційних приміщень"
      let description = "Дизайн-проекти інтер'єру та архітектурні рішення для комерційних приміщень ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY"

      return {
        title,
        description,
        alternates: {
          canonical: app.url + '/projects/commerce',
        },
        openGraph: {
          title,
          description,
          images: [{ url: app.url + "/images/categories/commerce.jpg" }],
        }
      }
    }
    default: {
      let title = 'Проєкти'
      let description = "Дизайн-проекти інтер'єру, архітектурні проекти, рішення з комплектації та меблювання ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY"

      return {
        title,
        description,
        alternates: {
          canonical: app.url + '/projects',
        },
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
      <ContactFooter className='py-20 xl:py-32' />
      <Footer isDark />
    </>
  )
}