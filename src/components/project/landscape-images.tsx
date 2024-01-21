import { Project } from "@/src/lib/definitions";
import ProjectImage from "./project-image";
import { getProjectImages } from "@/src/lib/projects";

export default function LandscapeImages({ project }: { project: Project }) {
  const images = getProjectImages(project);

  return (
    <>
      {images.map((image, index) => <ProjectImage key={index} image={image} />)}
    </>
  )
}
