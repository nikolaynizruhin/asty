import { Project } from '@/lib/definitions'
import Heading from "@/components/heading"
import ProjectImage from "./project-image";
import { getProjectImages } from "@/lib/projects"

export default function Images({ project }: { project: Project }) {
  return (
    <div className="bg-white py-12 xl:py-20">
      <div className="mx-auto justify-items-center max-w-[550px] px-4 xl:px-16 grid grid-cols-1 md:gap-x-5 xl:gap-x-10 gap-y-4 md:gap-y-10 xl:gap-y-16 text-[#666] md:max-w-full md:grid-cols-2">
        {project.category === 'interior'
          ? <PortraitImages project={project} /> 
          : <LandscapeImages project={project} />}
      </div>
    </div>
  )
}

function LandscapeImages({ project }: { project: Project }) {
  return (
    <>
      {getProjectImages(project).map((image, index) => <ProjectImage key={index} image={image} />)}
    </>
  )
}

function PortraitImages({ project }: { project: Project }) {
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