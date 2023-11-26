import Image from 'next/image'

export default function Images() {
  return (
    <div className="bg-white py-12 xl:py-20">
      <div className="mx-auto justify-items-center max-w-[550px] px-4 xl:px-16 grid grid-cols-1 gap-x-5 xl:gap-x-10 gap-y-4 md:gap-y-10 xl:gap-y-16 text-[#666] md:max-w-full md:grid-cols-2">
        <Image
          src="https://yodezeen.com/wp-content/uploads/2023/04/Untitled-2-05.jpg"
          width="640"
          height="905"
          alt=""
        />
        <Image
          src="https://yodezeen.com/wp-content/uploads/2023/04/Untitled-211111111-02.jpg"
          width="640"
          height="905"
          alt=""
        />
        <Image
          src="https://yodezeen.com/wp-content/uploads/2023/04/55555.jpg"
          width="640"
          height="905"
          alt=""
        />
        <div className="flex flex-col justify-center lg:px-28 py-10 md:py-0">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl mb-7">
            Concept
          </h2>
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
          src="https://yodezeen.com/wp-content/uploads/2023/04/%D0%BD%D0%BE%D1%80%D0%BC-02.jpg"
          width="640"
          height="905"
          alt=""
        />
        <Image
          src="https://yodezeen.com/wp-content/uploads/2023/04/%D0%BD%D0%BE%D1%80%D0%BC-01.jpg"
          width="640"
          height="905"
          alt=""
        />
      </div>
    </div>
  )
}
