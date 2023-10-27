import Header from "@/components/header"
import Icon from "@/components/icon"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="bg-gray-900">
      <Header />
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src="https://yodezeen.com/wp-content/uploads/2020/03/1.jpg"
          alt=""
          width="1440"
          height="768"
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
        />
        <div className="mx-auto max-w-3xl px-4 py-60 sm:py-48 lg:py-56">
          <div>
            <h1 className="text-4xl font-semibold text-white sm:text-7xl">
              Catch seafood
              <br />
              restaurant
            </h1>
            <p className="mt-8 font-light text-sm text-gray-300">
              View project
            </p>
          </div>
        </div>
        <div className="flex gap-8 p-4 lg:py-12 lg:px-16 text-white">
          <a href="https://www.instagram.com/asty_ua">
            <Icon name="instagram" />
          </a>
          <a href="https://www.facebook.com/asty.ukraine">
            <Icon name="facebook" />
          </a>
        </div>
      </div>
    </div>
  )
}