import Heading from '@/src/components/heading'
import { Project } from '@/src/lib/definitions'
import Image from 'next/image'

export default function Images({ project }: { project: Project }) {
  return (
    <div className="bg-white py-12 xl:py-20">
      <div className="mx-auto justify-items-center max-w-[550px] px-4 xl:px-16 grid grid-cols-1 gap-x-5 xl:gap-x-10 gap-y-4 md:gap-y-10 xl:gap-y-16 text-[#666] md:max-w-full md:grid-cols-2">
        <Image
          className='w-full'
          src={`/images/projects/${project.slug}/1.jpg`}
          width="640"
          height="905"
          alt=""
        />
        <Image
          className='w-full'
          src={`/images/projects/${project.slug}/2.jpg`}
          width="640"
          height="905"
          alt=""
        />
        <Image
          className='w-full'
          src={`/images/projects/${project.slug}/3.jpg`}
          width="640"
          height="905"
          alt=""
        />
        <div className="flex flex-col justify-center md:px-10 lg:px-28 py-10 md:py-0">
          <Heading className="mb-7" isDark>Концепт</Heading>
          <p className="font-light">
            As often happens in the real estate market of Europe, YODEZEEN
            received an already-built house with existing walls, window
            openings, and facade architecture. Therefore, the task was to
            modernize the planning as much as possible and ergonomically place
            all the owners’ needs.
          </p>
          <p className="font-light">
            The house has a center — an elevator surrounded by a phyto-box. On
            the first floor, there is a living room with a bar and a wine
            zone, a gym, a spa, a cinema, and an exit to the garage. The main
            floor has a kitchen, dining area, two-format living room, office,
            and two guest bedrooms. On the upper floor, the architects have
            placed a master unit with three dressing areas and a big bathroom,
            a kids’ unit, and a bedroom exclusively for the owner’s parents.
          </p>
        </div>
        <Image
          src={`/images/projects/${project.slug}/4.jpg`}
          width="1304"
          height="934"
          alt=""
          className='col-span-2 w-full'
        />
        <Image
          className='w-full'
          src={`/images/projects/${project.slug}/5.jpg`}
          width="640"
          height="905"
          alt=""
        />
        <Image
          className='w-full'
          src={`/images/projects/${project.slug}/6.jpg`}
          width="640"
          height="905"
          alt=""
        />
        <Image
          src={`/images/projects/${project.slug}/7.jpg`}
          width="1304"
          height="934"
          alt=""
          className='col-span-2 w-full'
        />
        <Image
          className='w-full'
          src={`/images/projects/${project.slug}/8.jpg`}
          width="640"
          height="905"
          alt=""
        />
        <Image
          className='w-full'
          src={`/images/projects/${project.slug}/9.jpg`}
          width="640"
          height="905"
          alt=""
        />
      </div>
    </div>
  )
}
