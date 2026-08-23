import { Suspense } from "react"
import Header from "@/components/header"
import DynamicMarker from "@/components/dynamic-marker"
import Footer from "@/components/footer"
import Contact from "@/components/projects/contact"
import { default as ContactFooter } from "@/components/contact"
import ProjectList from "@/components/projects/projects"
import { Category } from "@/lib/definitions"
import { categories } from "@/lib/fixtures"
import { Metadata } from "next"
import { addRobots } from "@/lib/utils"
import app from "@/config/app"

const categoryMetadata: Record<
  Category | "default",
  { title: string; description: string; image?: string }
> = {
  architecture: {
    title: "Архітектурні проекти та рішення",
    description:
      "Архітектурні проекти та рішення ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY",
    image: "architecture.jpg",
  },
  interior: {
    title: "Дизайн-проекти інтер'єру",
    description:
      "Дизайн-проекти інтер'єру ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY",
    image: "interior.jpg",
  },
  commerce: {
    title: "Проєкти дизайну для комерційних приміщень",
    description:
      "Дизайн-проекти інтер'єру та архітектурні рішення для комерційних приміщень ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY",
    image: "commerce.jpg",
  },
  default: {
    title: "Проєкти",
    description:
      "Дизайн-проекти інтер'єру, архітектурні проекти, рішення з комплектації та меблювання ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY",
  },
}

export async function generateMetadata(props: {
  params: Promise<{ category?: Category[] }>
  searchParams: Promise<object>
}): Promise<Metadata> {
  const searchParams = await props.searchParams
  const params = await props.params
  const category = params?.category?.[0]
  const { title, description, image } = categoryMetadata[category ?? "default"]
  const canonical = app.url + (category ? `/projects/${category}` : "/projects")

  const metadata = {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      ...(image && {
        images: [{ url: app.url + "/images/categories/" + image }],
      }),
    },
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
