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
    <div className="bg-white py-24 sm:py-56">
      <div className="flex justify-center">
        <h1 className="text-[180px] font-bold tracking-[.3em] leading-none text-black opacity-[0.02] -mr-[.3em]">
          ПРОЄКТИ
        </h1>
      </div>
      <div className="text-xs text-[#828282] px-16 mt-11">
        <button className="text-[#121212] mr-24 pr-4">ALL</button>
        <button className="mr-24 pr-4">ARCHITECTURE</button>
        <button className="mr-24 pr-4">RESIDENTAL</button>
        <button>COMMERCIAL</button>
      </div>
      <div className="grid grid-cols-4 gap-[2px] px-16 mt-5">
        {projects.map((project, index) => (
          <a href={project.href}>
            <Image
              className="object-cover h-[232px] w-full"
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
