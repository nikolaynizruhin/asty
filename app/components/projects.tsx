import Image from "next/image"

const projects = [
  {
    name: 'Архітектура',
    image: 'https://yodezeen.com/wp-content/uploads/2020/03/1-1024x682.jpg',
    href: '#'
  },
  {
    name: 'Дизайн інтер’єру',
    image: 'https://yodezeen.com/wp-content/uploads/2020/03/DIAMOND-19-2880x1920-1-1024x683.jpg',
    href: '#'
  },
  {
    name: 'Комерція',
    image: 'https://yodezeen.com/wp-content/uploads/2020/03/cam_01_View09-1024x640.jpg',
    href: '#'
  }
]

export default function Projects() {
  return (
    <div className="mx-auto grid auto-rows-fr grid-cols-1 lg:max-w-none lg:grid-cols-3">
      {projects.map((project, index) => (
        <div key={index} className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-8 py-96">
          <Image
            src={project.image}
            width="480"
            height="823"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.3]"
          />
          <h3 className="text-4xl text-center font-medium leading-10 text-white tracking-wide">
            <a href={project.href}>{project.name}</a>
          </h3>
        </div>
      ))}
    </div>
  )
}