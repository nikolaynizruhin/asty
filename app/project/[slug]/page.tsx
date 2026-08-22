import { Suspense } from "react"
import DynamicMarker from "@/components/dynamic-marker"
import Footer from "@/components/footer"
import Body, { Skeleton } from "@/components/project/body"
import { projects } from "@/lib/fixtures"
import { getProjectBySlug } from "@/lib/projects"
import type { Metadata } from "next"
import { addRobots, getSentence } from "@/lib/utils"
import app from "@/config/app"
import Contact from "@/components/contact"
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
  searchParams: Promise<object>
}): Promise<Metadata> {
  const searchParams = await props.searchParams
  const params = await props.params
  const project = getProjectBySlug(params.slug)

  const metadata: Metadata = {
    title: project?.title,
    description:
      getSentence(project?.concept ?? "") +
      " ➤ Дивитися фото та опис на сайті архітектурно-дизайнерського бюро ASTY",
    alternates: {
      canonical: `${app.url}/project/${project?.slug}`,
    },
    openGraph: {
      title: project?.title,
      description: getSentence(project?.concept ?? ""),
      url: `${app.url}/project/${project?.slug}`,
      images: [
        { url: app.url + "/images/projects/" + project?.slug + "/hero.jpg" },
      ],
    },
  }

  return addRobots(metadata, searchParams)
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default function Project(props: { params: Promise<{ slug: string }> }) {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Body params={props.params} />
      </Suspense>
      <Contact className="pb-20 xl:pb-32" />
      <Footer isDark />
      <Suspense>
        <DynamicMarker />
      </Suspense>
    </>
  )
}
