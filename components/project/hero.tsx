import Container from "@/components/container"
import Header from "@/components/header"
import { Project } from "@/lib/definitions"
import { addMetadata } from "@/lib/utils"
import Image from 'next/image'

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
        <Container className="pb-72 pt-52 md:pb-32 md:pt-28 xl:pb-72 xl:pt-56">
          <h1 className="text-4xl md:text-5xl font-bold text-white xl:text-7xl text-balance">
            {project.title}
          </h1>
          <p className="mt-4 md:mt-6 font-light text-sm xl:text-base text-white">
            {project.description}
          </p>
        </Container>
      </div>
    </div>
  )
}
