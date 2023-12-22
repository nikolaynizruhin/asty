import Title from '@/src/components/title'
import Image from 'next/image'
import Link from 'next/link'
import projects from '@/src/lib/data'

export default function Projects() {
  return (
    <div className="bg-white pt-24 xl:pt-56 px-4 md:px-8 xl:px-16 max-w-[550px] mx-auto md:max-w-none">
      <Title text="ПРОЄКТИ" className="px-[3vw] hidden xl:flex" />
      <div className="text-xs text-[#828282] mt-11">
        <button className="text-[#121212] mr-5 md:mr-12 xl:mr-24 pr-4 xl:uppercase font-semibold">All</button>
        <button className="mr-5 md:mr-12 xl:mr-24 pr-4 xl:uppercase font-semibold">Architecture</button>
        <button className="mr-5 md:mr-12 xl:mr-24 pr-4 xl:uppercase font-semibold">Residental</button>
        <button className="xl:uppercase font-semibold">Commercial</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-[2px] mt-8">
        {projects.map((project, index) => (
          <Link key={index} href={`/projects/${project.slug}`} className='group relative'>
            <h2 className='text-[rgb(242,242,242)] p-6 text-2xl font-bold absolute bottom-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300'>{project.title}</h2>
            <Image
              className="object-cover aspect-[325/232] w-full brightness-[.8] group-hover:brightness-[0.3] transition-all duration-300"
              src={`/images/projects/${project.slug}/hero.jpg`}
              width="325"
              height="232"
              alt=""
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
