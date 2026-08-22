import Title from "@/components/title"
import Link from "next/link"
import { Category, Filter as FilterType, Project } from "@/lib/definitions"
import { getProjectsByCategory } from "@/lib/projects"
import ProjectComponent from "./project"

const filters: FilterType[] = [
  {
    name: "Всі",
    href: "/projects",
    isActive: (category?: Category) => !category,
  },
  {
    name: "Архітектура",
    href: "/projects/architecture",
    isActive: (category?: Category) => category === "architecture",
  },
  {
    name: "Інтерʼєр",
    href: "/projects/interior",
    isActive: (category?: Category) => category === "interior",
  },
  {
    name: "Комерція",
    href: "/projects/commerce",
    isActive: (category?: Category) => category === "commerce",
  },
]

export default function Projects({ category }: { category?: Category }) {
  const projects: Project[] = getProjectsByCategory(category)

  return (
    <div className="mx-auto max-w-[550px] bg-white px-4 pt-24 md:max-w-none md:px-8 xl:px-16 xl:pt-56">
      <Title text="ПРОЄКТИ" className="hidden px-[3vw] xl:flex" />
      <div className="mt-11 text-xs text-[#828282]">
        {filters.map((filter, index) => (
          <Filter
            key={index}
            filter={filter}
            category={category}
            isLast={index === filters.length - 1}
          />
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-[2px]">
        {projects.map((project) => (
          <ProjectComponent key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

function Filter({
  filter,
  category,
  isLast,
}: {
  filter: FilterType
  category?: Category
  isLast: boolean
}) {
  return (
    <Link
      href={filter.href}
      scroll={false}
      className={`${filter.isActive(category) ? "text-[#121212]" : ""} ${isLast ? "" : "mr-5 pr-4 md:mr-12 xl:mr-24"} font-semibold xl:uppercase`}
    >
      {filter.name}
    </Link>
  )
}
