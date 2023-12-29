import { Project } from "@/src/lib/definitions";
import Image from "next/image";

export default function LandscapeImages({ project }: { project: Project }) {
  return (
    <>
      {project.images.map((image, index) => (
        <div key={index} className="size-full overflow-hidden aspect-[3/2] col-span-2">
          <Image
            className='size-full object-cover object-center'
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        </div>
      ))}
    </>
  )
}
