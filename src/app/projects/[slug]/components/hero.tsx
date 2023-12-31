import Container from "@/src/components/container"
import Header from "@/src/components/header"
import { Project } from "@/src/lib/definitions"
import Image from 'next/image'

export default function Hero({ project }: { project: Project }) {
  return (
    <div className="bg-gray-900">
      <Header />
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src={`/images/projects/${project.slug}/hero.jpg`}
          alt=""
          width="1440"
          height="748"
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.3]"
        />
        <Container className="pb-96 pt-60 sm:pb-44 sm:pt-36 xl:pb-96 xl:pt-60">
          <h1 className="text-4xl md:text-5xl font-bold text-white xl:text-7xl">
            {project.name}
          </h1>
          <p className="mt-4 md:mt-6 font-light text-sm xl:text-base text-white">
            {project.description}
          </p>
        </Container>
      </div>
    </div>
  )
}
