import Image from "next/image"

export default function Projects() {
  return (
    <div className="mx-auto grid auto-rows-fr grid-cols-1 lg:max-w-none lg:grid-cols-3">
      <div className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-8 py-96">
        <Image
          src="https://yodezeen.com/wp-content/uploads/2020/03/1-1024x682.jpg"
          width="480"
          height="823"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.3]"
        />
        <h3 className="text-4xl text-center font-medium leading-10 text-white tracking-wide">
          <a href="#">Commercial</a>
        </h3>
        <h5 className="text-center text-white font-extralight tracking-[.5em] text-xs">
          INTERIOR DESIGN
        </h5>
      </div>
      <div className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-8 py-96">
        <Image
          src="https://yodezeen.com/wp-content/uploads/2020/03/DIAMOND-19-2880x1920-1-1024x683.jpg"
          width="480"
          height="823"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.3]"
        />
        <h3 className="text-4xl text-center font-medium leading-10 text-white tracking-wide">
          <a href="#">Residental</a>
        </h3>
        <h5 className="text-center text-white font-extralight tracking-[.5em] text-xs">
          INTERIOR DESIGN
        </h5>
      </div>
      <div className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-8 py-96">
        <Image
          src="https://yodezeen.com/wp-content/uploads/2020/03/cam_01_View09-1024x640.jpg"
          width="480"
          height="823"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.3]"
        />
        <h3 className="text-4xl text-center font-medium leading-10 text-white tracking-wide">
          <a href="#">Architecture</a>
        </h3>
        <h5 className="text-center text-white font-extralight tracking-[.5em] text-xs">
          INTERIOR DESIGN
        </h5>
      </div>
    </div>
  )
}