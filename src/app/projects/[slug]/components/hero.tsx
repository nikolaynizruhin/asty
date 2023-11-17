import Header from "@/src/components/header"
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="bg-gray-900">
      <Header />
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src="https://yodezeen.com/wp-content/uploads/2023/04/mainmainmain-06.jpg"
          alt=""
          width="1440"
          height="748"
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.3]"
        />
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-72">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Passeridae
            </h1>
            <p className="mt-6 font-light text-base leading-8 text-white">
              Monochrome interior in the shade of the Spanish sun
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
