import Header from "@/components/header"
import Image from "next/image"
import SocialIcons from "../social-icons"
import app from "@/config/app"

export default function Hero() {
  return (
    <div className="bg-gray-900">
      <Header />
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src="/images/hero.jpg"
          alt={`Дизайн інтерʼєру та архітектурні рішення від ASTY | ${app.name}`}
          width="1440"
          height="768"
          priority={true}
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
        />
        <div className="mx-auto max-w-3xl px-4 py-60 sm:py-48 lg:py-56">
          <h1 className="text-4xl font-semibold text-white sm:text-7xl text-balance">
            Дизайн інтерʼєру та архітектурні рішення від ASTY
          </h1>
          <p className="mt-8 font-light text-sm text-gray-300">
            Коли кожний квадратний метр має значення
          </p>
        </div>
        <SocialIcons className="flex gap-8 p-4 lg:py-12 lg:px-16 text-white" />
      </div>
    </div>
  )
}