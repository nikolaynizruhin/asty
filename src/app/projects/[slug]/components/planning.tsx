import Heading from '@/src/components/heading'
import Image from 'next/image'

export default function Planning() {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 lg:px-16 mt-10 grid max-w-xl grid-cols-1 justify-items-center gap-8 md:max-w-none xl:grid-cols-2">
        <Image
          src="https://yodezeen.com/wp-content/uploads/2023/04/Villa-Madri.png"
          width="640"
          height="495"
          alt=""
        />
        <div className="py-10 xl:px-28 text-base max-w-lg md:max-w-[464px] xl:max-w-full">
          <Heading className="mb-7">Planning</Heading>
          <p className="font-light text-[#666]">
            As often happens in the real estate market of Europe, YODEZEEN
            received an already-built house with existing walls, window
            openings, and facade architecture. Therefore, the task was to
            modernize the planning as much as possible and ergonomically place
            all the owners’ needs.
          </p>
          <p className="font-light text-[#666]">
            The house has a center — an elevator surrounded by a phyto-box. On
            the first floor, there is a living room with a bar and a wine
            zone, a gym, a spa, a cinema, and an exit to the garage. The main
            floor has a kitchen, dining area, two-format living room, office,
            and two guest bedrooms. On the upper floor, the architects have
            placed a master unit with three dressing areas and a big bathroom,
            a kids’ unit, and a bedroom exclusively for the owner’s parents.
          </p>
        </div>
      </div>
    </div>
  )
}
