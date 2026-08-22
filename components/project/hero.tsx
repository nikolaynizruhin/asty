import Container from "@/components/container"
import Header from "@/components/header"
import { Project } from "@/lib/definitions"
import { addMetadata } from "@/lib/utils"
import Image from "next/image"

export default function Hero({ project }: { project: Project }) {
  return (
    <div className="bg-gray-900">
      <Header />
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src={`/images/projects/${project.slug}/hero.jpg`}
          alt={addMetadata(project.title)}
          width="1440"
          height="748"
          priority={true}
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.3]"
        />
        <Container className="pt-52 pb-72 md:pt-28 md:pb-32 xl:pt-56 xl:pb-72">
          <h1 className="text-4xl font-bold text-balance text-white md:text-5xl xl:text-7xl">
            {project.title}
          </h1>
          <p className="mt-4 text-sm font-light text-white md:mt-6 xl:text-base">
            {project.description}
          </p>
        </Container>
      </div>
    </div>
  )
}
