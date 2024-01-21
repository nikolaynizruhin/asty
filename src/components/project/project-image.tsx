import { Image as ProjectImage } from "@/src/lib/definitions";
import Image from "next/image";

export default function ProjectImage({ image }: { image: ProjectImage}) {
  return (
    <div className={`size-full overflow-hidden ${image.isLandscape ? 'aspect-[3/2] md:col-span-2' : 'aspect-[2/3]'}`}>
      <Image
        className='size-full object-cover object-center'
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
      />
    </div>
  )
}