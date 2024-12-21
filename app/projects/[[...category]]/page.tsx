import Header from '@/components/header'
import Footer from '@/components/footer'
import Contact from '@/components/projects/contact'
import { default as ContactFooter } from '@/components/contact'
import ProjectList from '@/components/projects/projects'
import { Category } from '@/lib/definitions'
import { Metadata } from 'next'
import { addRobots, isCategory } from '@/lib/utils'
import { notFound } from 'next/navigation'
import app from '@/config/app'

export async function generateMetadata(
  props: { params: Promise<{ category?: Category[] }>, searchParams: Promise<object> }
): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const category = params?.category?.[0]
  let metadata;

  switch (category) {
    case 'architecture': {
      const title = 'Архітектурні проекти та рішення'
      const description = "Архітектурні проекти та рішення ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY"

      metadata = {
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

      break
    }
    case 'interior': {
      const title = "Дизайн-проекти інтер'єру"
      const description = "Дизайн-проекти інтер'єру ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY"

      metadata = {
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

      break
    }
    case 'commerce': {
      const title = "Проєкти дизайну для комерційних приміщень"
      const description = "Дизайн-проекти інтер'єру та архітектурні рішення для комерційних приміщень ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY"

      metadata = {
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

      break
    }
    default: {
      const title = 'Проєкти'
      const description = "Дизайн-проекти інтер'єру, архітектурні проекти, рішення з комплектації та меблювання ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY"

      metadata = {
        title,
        description,
        alternates: {
          canonical: app.url + '/projects',
        },
        openGraph: {
          title,
          description,
        }
      }
    }
  }

  return addRobots(metadata, searchParams)
}

export default async function Projects(props: { params: Promise<{ category?: Category[] }>}) {
  const params = await props.params;
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