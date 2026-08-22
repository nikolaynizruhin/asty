import { Project as ProjectType } from "@/lib/definitions"
import { addMetadata } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export default function Project({ project }: { project: ProjectType }) {
  return (
    <Link href={`/project/${project.slug}`} className="group relative">
      <h2 className="absolute bottom-0 z-10 p-6 text-2xl font-bold text-[#f2f2f2] opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100">
        {project.name}
      </h2>
      <Image
        className="aspect-325/232 w-full object-cover brightness-[.8] transition-all duration-300 ease-in group-hover:brightness-[0.3]"
        src={`/images/projects/${project.slug}/hero.jpg`}
        width="325"
        height="232"
        alt={addMetadata(project.name)}
      />
    </Link>
  )
}
