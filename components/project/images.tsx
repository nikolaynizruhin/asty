import { Project } from "@/lib/definitions"
import Heading from "@/components/heading"
import ProjectImage from "./project-image"
import { getProjectImages } from "@/lib/projects"

export default function Images({ project }: { project: Project }) {
  return (
    <div className="bg-white pt-3 pb-12 md:pt-0 xl:pb-20">
      <div className="mx-auto grid max-w-137.5 grid-cols-1 justify-items-center gap-y-4 px-4 text-[#666] md:max-w-full md:grid-cols-2 md:gap-x-5 md:gap-y-10 xl:gap-x-10 xl:gap-y-16 xl:px-16">
        {project.category === "interior" ? (
          <PortraitImages project={project} />
        ) : (
          <LandscapeImages project={project} />
        )}
      </div>
    </div>
  )
}

function LandscapeImages({ project }: { project: Project }) {
  return (
    <>
      {getProjectImages(project).map((image, index) => (
        <ProjectImage key={index} image={image} />
      ))}
    </>
  )
}

function PortraitImages({ project }: { project: Project }) {
  const images = getProjectImages(project)

  return (
    <>
      {images.slice(0, 3).map((image, index) => (
        <ProjectImage key={index} image={image} />
      ))}
      <div className="flex flex-col justify-center py-10 md:px-10 md:py-0 lg:px-28">
        <Heading className="mb-7" isDark>
          Опис
        </Heading>
        <p className="font-light">{project.overview}</p>
      </div>
      {images.slice(3).map((image, index) => (
        <ProjectImage key={index} image={image} />
      ))}
    </>
  )
}
