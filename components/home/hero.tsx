import Header from "@/components/header"
import Image from "next/image"
import SocialIcons from "../social-icons"
import { addMetadata } from "@/lib/utils"
import Container from "../container"

export default function Hero() {
  return (
    <div className="bg-gray-900">
      <Header />
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src="/images/hero.jpg"
          alt={addMetadata("Дизайн інтерʼєру та архітектурні рішення від ASTY")}
          width="1440"
          height="768"
          priority={true}
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
        />
        <Container className="py-52 md:py-24 xl:py-52">
          <h1 className="text-4xl font-semibold text-white md:text-5xl xl:text-7xl text-balance">
            Дизайн інтерʼєру та архітектурні рішення від ASTY
          </h1>
          <p className="mt-8 font-light text-sm text-gray-300">
            Коли кожний квадратний метр має значення
          </p>
        </Container>
        <SocialIcons className="flex gap-8 p-4 md:px-8 lg:py-8 xl:px-16 text-white max-w-[550px] mx-auto md:max-w-none" />
      </div>
    </div>
  )
}