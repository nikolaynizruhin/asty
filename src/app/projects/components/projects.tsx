import Title from '@/src/components/title'
import Image from 'next/image'

const projects = [
  {
    href: '#',
    image: 'https://yodezeen.com/wp-content/uploads/2023/06/View_View010003-1024x751.jpg',
  },
  {
    href: '#',
    image: 'https://yodezeen.com/wp-content/uploads/2023/04/main-02-1024x725.jpg',
  },
  {
    href: '#',
    image: 'https://yodezeen.com/wp-content/uploads/2023/04/mainmainmain-06-1024x724.jpg',
  },
  {
    href: '#',
    image: 'https://yodezeen.com/wp-content/uploads/2023/04/DIAMOND-66-1024x682.jpg',
  },
  {
    href: '#',
    image: 'https://yodezeen.com/wp-content/uploads/2023/04/mainmainmain-06-1024x724.jpg',
  },
  {
    href: '#',
    image: 'https://yodezeen.com/wp-content/uploads/2023/04/DIAMOND-66-1024x682.jpg',
  },
  {
    href: '#',
    image: 'https://yodezeen.com/wp-content/uploads/2023/04/main-02-1024x725.jpg',
  },
  {
    href: '#',
    image: 'https://yodezeen.com/wp-content/uploads/2023/06/View_View010003-1024x751.jpg',
  },
]

export default function Projects() {
  return (
    <div className="bg-white py-24 xl:pt-56 px-4 md:px-8 xl:px-16 max-w-[550px] mx-auto md:max-w-none">
      <Title text="ПРОЄКТИ" className="px-[3vw] hidden xl:flex" />
      <div className="text-xs text-[#828282] mt-11">
        <button className="text-[#121212] mr-5 md:mr-12 xl:mr-24 pr-4 xl:uppercase font-semibold">All</button>
        <button className="mr-5 md:mr-12 xl:mr-24 pr-4 xl:uppercase font-semibold">Architecture</button>
        <button className="mr-5 md:mr-12 xl:mr-24 pr-4 xl:uppercase font-semibold">Residental</button>
        <button className="xl:uppercase font-semibold">Commercial</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-[2px] mt-8">
        {projects.map((project, index) => (
          <a key={index} href={project.href}>
            <Image
              className="object-cover aspect-[325/232] w-full"
              src={project.image}
              width="325"
              height="232"
              alt=""
            />
          </a>
        ))}
      </div>
    </div>
  )
}
