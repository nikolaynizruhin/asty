import Title from '@/src/components/title'
import Image from 'next/image'
import Link from 'next/link'
import { Category, Project } from '@/src/lib/definitions'
import { getProjectsByCategory } from '@/src/lib/data'

export default function Projects({ category }: { category?: Category }) {
  const projects: Project[] = getProjectsByCategory(category)

  return (
    <div className="bg-white pt-24 xl:pt-56 px-4 md:px-8 xl:px-16 max-w-[550px] mx-auto md:max-w-none">
      <Title text="ПРОЄКТИ" className="px-[3vw] hidden xl:flex" />
      <div className="text-xs text-[#828282] mt-11">
        <Link href='/projects' scroll={false} className={`${category ? '' : 'text-[#121212]' } mr-5 md:mr-12 xl:mr-24 pr-4 xl:uppercase font-semibold`}>Всі</Link>
        <Link href='/projects?category=architecture' scroll={false} className={`${category === 'architecture' ? 'text-[#121212]' : '' } mr-5 md:mr-12 xl:mr-24 pr-4 xl:uppercase font-semibold`}>Архітектура</Link>
        <Link href='/projects?category=interior' scroll={false} className={`${category === 'interior' ? 'text-[#121212]' : '' } mr-5 md:mr-12 xl:mr-24 pr-4 xl:uppercase font-semibold`}>Інтерʼєр</Link>
        <Link href='/projects?category=commerce' scroll={false} className={`${category === 'commerce' ? 'text-[#121212]' : '' } xl:uppercase font-semibold`}>Комерція</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-[2px] mt-8">
        {projects.map((project, index) => (
          <Link key={index} href={`/projects/${project.slug}`} className='group relative'>
            <h3 className='text-[#f2f2f2] p-6 text-2xl font-bold absolute bottom-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-300'>{project.name}</h3>
            <Image
              className="object-cover aspect-[325/232] w-full brightness-[.8] group-hover:brightness-[0.3] transition-all ease-in duration-300"
              src={`/images/projects/${project.slug}/hero.jpg`}
              width="325"
              height="232"
              alt={project.name}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
