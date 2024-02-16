import { Project } from "@/src/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default function Project({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className='group relative'>
      <h3 className='text-[#f2f2f2] p-6 text-2xl font-bold absolute bottom-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-300'>
        {project.name}
      </h3>
      <Image
        className="object-cover aspect-[325/232] w-full brightness-[.8] group-hover:brightness-[0.3] transition-all ease-in duration-300"
        src={`/images/projects/${project.slug}/hero.jpg`}
        width="325"
        height="232"
        alt={project.name}
      />
    </Link>
  )
}