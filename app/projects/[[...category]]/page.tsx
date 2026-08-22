import { Suspense } from "react"
import Header from "@/components/header"
import DynamicMarker from "@/components/dynamic-marker"
import Footer from "@/components/footer"
import Contact from "@/components/projects/contact"
import { default as ContactFooter } from "@/components/contact"
import ProjectList from "@/components/projects/projects"
import { categories, Category } from "@/lib/definitions"
import { Metadata } from "next"
import { addRobots } from "@/lib/utils"
import app from "@/config/app"
export async function generateMetadata(props: {
  params: Promise<{ category?: Category[] }>
  searchParams: Promise<object>
}): Promise<Metadata> {
  const searchParams = await props.searchParams
  const params = await props.params
  const category = params?.category?.[0]
  let metadata

  switch (category) {
    case "architecture": {
      const title = "Архітектурні проекти та рішення"
      const description =
        "Архітектурні проекти та рішення ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY"

      metadata = {
        title,
        description,
        alternates: {
          canonical: app.url + "/projects/architecture",
        },
        openGraph: {
          title,
          description,
          images: [{ url: app.url + "/images/categories/architecture.jpg" }],
        },
      }

      break
    }
    case "interior": {
      const title = "Дизайн-проекти інтер'єру"
      const description =
        "Дизайн-проекти інтер'єру ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY"

      metadata = {
        title,
        description,
        alternates: {
          canonical: app.url + "/projects/interior",
        },
        openGraph: {
          title,
          description,
          images: [{ url: app.url + "/images/categories/interior.jpg" }],
        },
      }

      break
    }
    case "commerce": {
      const title = "Проєкти дизайну для комерційних приміщень"
      const description =
        "Дизайн-проекти інтер'єру та архітектурні рішення для комерційних приміщень ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY"

      metadata = {
        title,
        description,
        alternates: {
          canonical: app.url + "/projects/commerce",
        },
        openGraph: {
          title,
          description,
          images: [{ url: app.url + "/images/categories/commerce.jpg" }],
        },
      }

      break
    }
    default: {
      const title = "Проєкти"
      const description =
        "Дизайн-проекти інтер'єру, архітектурні проекти, рішення з комплектації та меблювання ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY"

      metadata = {
        title,
        description,
        alternates: {
          canonical: app.url + "/projects",
        },
        openGraph: {
          title,
          description,
        },
      }
    }
  }

  return addRobots(metadata, searchParams)
}

export function generateStaticParams(): { category: Category[] }[] {
  return [
    { category: [] },
    ...categories.map((category) => ({ category: [category] })),
  ]
}

export default function Projects(props: {
  params: Promise<{ category?: Category[] }>
}) {
  return (
    <>
      <Header isDark />
      <ProjectList params={props.params} />
      <Contact />
      <ContactFooter className="py-20 xl:py-32" />
      <Footer isDark />
      <Suspense>
        <DynamicMarker />
      </Suspense>
    </>
  )
}
