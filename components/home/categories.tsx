import { CategoryLink } from "@/lib/definitions"
import { addMetadata } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const categories: CategoryLink[] = [
  {
    name: 'Архітектура',
    image: '/images/categories/architecture.jpg',
    href: '/projects/architecture'
  },
  {
    name: 'Дизайн інтер’єру',
    image: '/images/categories/interior.jpg',
    href: '/projects/interior'
  },
  {
    name: 'Комерція',
    image: '/images/categories/commerce.jpg',
    href: '/projects/commerce'
  }
]

export default function Categories() {
  return (
    <div className="mx-auto grid auto-rows-fr grid-cols-1 lg:max-w-none md:grid-cols-3 max-w-xl md:max-w-none">
      {categories.map((category, index) => <Category key={index} category={category} />)}
    </div>
  )
}

function Category({ category }: { category: CategoryLink }) {
  return (
    <Link href={category.href}>
      <div className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-4 py-20 md:py-44 xl:py-96">
        <Image
          src={category.image}
          width="480"
          height="823"
          alt={addMetadata(category.name)}
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.3]"
        />
        <h3 className="text-[28px] leading-[33px] md:text-2xl xl:text-4xl md:text-center font-bold text-white">
          {category.name}
        </h3>
      </div>
    </Link>
  )
}
