import Title from "@/components/title"
import Link from "next/link"
import { Suspense } from "react"
import { Category, Filter as FilterType, Project } from "@/lib/definitions"
import { getProjectsByCategory } from "@/lib/projects"
import { isCategory } from "@/lib/utils"
import { notFound } from "next/navigation"
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

export default function Projects({
  params,
}: {
  params: Promise<{ category?: Category[] }>
}) {
  return (
    <div className="mx-auto max-w-137.5 bg-white px-4 pt-24 md:max-w-none md:px-8 xl:px-16 xl:pt-56">
      <Title text="ПРОЄКТИ" className="hidden px-[3vw] xl:flex" />
      <Suspense fallback={<Skeleton />}>
        <ProjectList params={params} />
      </Suspense>
    </div>
  )
}

async function ProjectList({
  params,
}: {
  params: Promise<{ category?: Category[] }>
}) {
  const category = (await params)?.category?.[0]

  if (!isCategory(category)) {
    notFound()
  }

  const projects: Project[] = getProjectsByCategory(category)

  return (
    <>
      <Filters category={category} />
      <Grid>
        {projects.map((project) => (
          <ProjectComponent key={project.id} project={project} />
        ))}
      </Grid>
    </>
  )
}

function Skeleton() {
  return (
    <>
      <Filters />
      <Grid>
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className="aspect-325/232 w-full bg-[#f2f2f2]" />
        ))}
      </Grid>
    </>
  )
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-0.5">
      {children}
    </div>
  )
}

function Filters({ category }: { category?: Category }) {
  return (
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
