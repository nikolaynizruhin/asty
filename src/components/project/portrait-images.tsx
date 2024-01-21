import Heading from "@/src/components/heading"
import { Project } from "@/src/lib/definitions"
import ProjectImage from "./project-image"
import { getProjectImages } from "@/src/lib/projects"

export default function PortraitImages({ project }: { project: Project }) {
  const images = getProjectImages(project)

  return (
    <>
      {images.slice(0, 3).map((image, index) => <ProjectImage key={index} image={image} />)}
      <div className="flex flex-col justify-center md:px-10 lg:px-28 py-10 md:py-0">
        <Heading className="mb-7" isDark>Концепт</Heading>
        <p className="font-light">{project.overview}</p>
      </div>
      {images.slice(3).map((image, index) => <ProjectImage key={index} image={image} />)}
    </>
  )
}