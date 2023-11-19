import Image from 'next/image'

export default function Images() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-full px-6 lg:px-16">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-sm tracking-wide font-light leading-6 text-[#666] lg:max-w-none lg:grid-cols-2">
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
            <div className="flex flex-col justify-center px-28">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-3xl tracking-wide mb-7">
                Concept
              </h2>
              <p>
                As often happens in the real estate market of Europe, YODEZEEN
                received an already-built house with existing walls, window
                openings, and facade architecture. Therefore, the task was to
                modernize the planning as much as possible and ergonomically place
                all the owners’ needs.
              </p>
              <p>
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
      </div>
    </div>
  )
}