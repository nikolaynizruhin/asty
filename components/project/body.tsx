import Container from "@/components/container"
import Header from "@/components/header"
import Hero from "./hero"
import About from "./about"
import Images from "./images"
import Pagination from "./pagination"
import { getProjectBySlug } from "@/lib/projects"
import { notFound } from "next/navigation"

export default async function Body({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const project = getProjectBySlug((await params).slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Hero project={project} />
      <About project={project} />
      <Images project={project} />
      <Pagination project={project} />
    </>
  )
}

export function Fallback() {
  return (
    <div className="bg-gray-900">
      <Header />
      <div className="relative isolate overflow-hidden pt-14">
        <Container className="pt-52 pb-72 md:pt-28 md:pb-32 xl:pt-56 xl:pb-72">
          <div className="h-10 w-3/4 bg-white/10 md:h-12 xl:h-20" />
          <div className="mt-4 h-5 w-1/2 bg-white/10 md:mt-6" />
        </Container>
      </div>
    </div>
  )
}
