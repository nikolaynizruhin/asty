import Heading from "@/src/components/heading"
import { Project } from "@/src/lib/definitions"
import ProjectImage from "./project-image"

export default function PortraitImages({ project }: { project: Project }) {
  return (
    <>
      {project.images.slice(0, 3).map((image, index) => <ProjectImage key={index} image={image} />)}
      <div className="flex flex-col justify-center md:px-10 lg:px-28 py-10 md:py-0">
        <Heading className="mb-7" isDark>Концепт</Heading>
        <p className="font-light">
          As often happens in the real estate market of Europe, YODEZEEN
          received an already-built house with existing walls, window
          openings, and facade architecture. Therefore, the task was to
          modernize the planning as much as possible and ergonomically place
          all the owners’ needs.
        </p>
        <p className="font-light">
          The house has a center — an elevator surrounded by a phyto-box. On
          the first floor, there is a living room with a bar and a wine
          zone, a gym, a spa, a cinema, and an exit to the garage. The main
          floor has a kitchen, dining area, two-format living room, office,
          and two guest bedrooms. On the upper floor, the architects have
          placed a master unit with three dressing areas and a big bathroom,
          a kids’ unit, and a bedroom exclusively for the owner’s parents.
        </p>
      </div>
      {project.images.slice(3).map((image, index) => <ProjectImage key={index} image={image} />)}
    </>
  )
}