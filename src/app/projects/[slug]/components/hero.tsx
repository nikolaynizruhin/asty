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
        <div className="mx-auto max-w-lg xl:max-w-4xl px-4 pb-96 pt-60 sm:pb-44 sm:pt-36 xl:pb-96 xl:pt-60">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white xl:text-6xl">
            Passeridae
          </h1>
          <p className="mt-4 md:mt-6 font-light text-sm xl:text-base leading-8 text-white">
            Monochrome interior in the shade of the Spanish sun
          </p>
        </div>
      </div>
    </div>
  )
}
