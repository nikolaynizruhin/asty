import { getNextProject, getPreviousProject } from "@/lib/projects";
import { Project } from "@/lib/definitions";
import Link from "next/link";

export default function Pagination({ project }: { project: Project }) {
  return (
    <div className="bg-[#1a1a1a]">
      <div className="flex text-sm xl:text-lg text-white md:font-bold px-4 md:px-8 xl:px-16 max-w-[550px] mx-auto md:max-w-none justify-between pt-14 pb-14 xl:pb-28">
        <Link href={`/project/${getPreviousProject(project)?.slug}`}>
          Попередній проєкт
        </Link>
        <Link href={`/project/${getNextProject(project)?.slug}`}>
          Наступний проєкт
        </Link>
      </div>
    </div>
  )
}