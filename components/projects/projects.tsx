import Title from '@/components/title'
import Link from 'next/link'
import { Category, Filter, Project } from '@/lib/definitions'
import { getProjectsByCategory } from '@/lib/projects'
import ProjectComponent from './project'

const filters: Filter[] = [
  { name: 'Всі', href: '/projects', isActive: (category?: Category) => !category },
  { name: 'Архітектура', href: '/projects/architecture', isActive: (category?: Category) => category === 'architecture' },
  { name: 'Інтерʼєр', href: '/projects/interior', isActive: (category?: Category) => category === 'interior' },
  { name: 'Комерція', href: '/projects/commerce', isActive: (category?: Category) => category === 'commerce'},
]

export default function Projects({ category }: { category?: Category }) {
  const projects: Project[] = getProjectsByCategory(category)

  return (
    <div className="bg-white pt-24 xl:pt-56 px-4 md:px-8 xl:px-16 max-w-[550px] mx-auto md:max-w-none">
      <Title text="ПРОЄКТИ" className="px-[3vw] hidden xl:flex" />
      <div className="text-xs text-[#828282] mt-11">
        {filters.map((filter, index) => <Filter key={index} filter={filter} category={category} isLast={index === filters.length - 1} />)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-[2px] mt-8">
        {projects.map(project => <ProjectComponent key={project.id} project={project} />)}
      </div>
    </div>
  )
}

function Filter({ filter, category, isLast }: { filter: Filter, category?: Category, isLast: boolean }) {
  return (
    <Link href={filter.href} scroll={false} className={`${filter.isActive(category) ? 'text-[#121212]' : '' } ${isLast ? '' : 'mr-5 md:mr-12 xl:mr-24 pr-4'} xl:uppercase font-semibold`}>
      {filter.name}
    </Link>
  )
}
