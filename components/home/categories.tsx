import { CategoryLink } from "@/lib/definitions"
import { addMetadata } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const categories: CategoryLink[] = [
  {
    name: "Архітектура",
    image: "/images/categories/architecture.jpg",
    href: "/projects/architecture",
  },
  {
    name: "Дизайн інтер’єру",
    image: "/images/categories/interior.jpg",
    href: "/projects/interior",
  },
  {
    name: "Комерція",
    image: "/images/categories/commerce.jpg",
    href: "/projects/commerce",
  },
]

export default function Categories() {
  return (
    <div className="mx-auto grid max-w-xl auto-rows-fr grid-cols-1 md:max-w-none md:grid-cols-3 lg:max-w-none">
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </div>
  )
}

function Category({ category }: { category: CategoryLink }) {
  return (
    <Link href={category.href}>
      <div className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-4 py-20 md:py-44 xl:py-96">
        <Image
          src={category.image}
          width="720"
          height="1280"
          alt={addMetadata(category.name)}
          loading="eager"
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.3]"
        />
        <h3 className="text-[28px] leading-8.25 font-bold text-white md:text-center md:text-2xl xl:text-4xl">
          {category.name}
        </h3>
      </div>
    </Link>
  )
}
