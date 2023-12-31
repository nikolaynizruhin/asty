import Heading from "@/src/components/heading"
import { Project } from "@/src/lib/definitions"
import ProjectImage from "./project-image"

export default function PortraitImages({ project }: { project: Project }) {
  return (
    <>
      {project.images.slice(0, 3).map((image, index) => <ProjectImage key={index} image={image} />)}
      <div className="flex flex-col justify-center md:px-10 lg:px-28 py-10 md:py-0">
        <Heading className="mb-7" isDark>Концепт</Heading>
        <p className="font-light">{project.overview}</p>
      </div>
      {project.images.slice(3).map((image, index) => <ProjectImage key={index} image={image} />)}
    </>
  )
}