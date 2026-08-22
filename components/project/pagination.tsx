import { getNextProject, getPreviousProject } from "@/lib/projects"
import { Project } from "@/lib/definitions"
import Link from "next/link"

export default function Pagination({ project }: { project: Project }) {
  return (
    <div className="bg-[#1a1a1a]">
      <div className="mx-auto flex max-w-[550px] justify-between px-4 pt-14 pb-14 text-sm text-white md:max-w-none md:px-8 md:font-bold xl:px-16 xl:pb-28 xl:text-lg">
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
