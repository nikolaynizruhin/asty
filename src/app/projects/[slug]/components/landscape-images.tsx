import { Project } from "@/src/lib/definitions";
import ProjectImage from "./project-image";

export default function LandscapeImages({ project }: { project: Project }) {
  return (
    <>
      {project.images.map((image, index) => <ProjectImage key={index} image={image} />)}
    </>
  )
}
