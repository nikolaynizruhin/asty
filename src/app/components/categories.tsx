import Image from "next/image"

const categories = [
  {
    name: 'Архітектура',
    image: '/images/categories/architecture.jpg',
    href: '#'
  },
  {
    name: 'Дизайн інтер’єру',
    image: '/images/categories/interior.jpg',
    href: '#'
  },
  {
    name: 'Комерція',
    image: '/images/categories/commercial.jpg',
    href: '#'
  }
]

export default function Categories() {
  return (
    <div className="mx-auto grid auto-rows-fr grid-cols-1 lg:max-w-none md:grid-cols-3 max-w-xl md:max-w-none">
      {categories.map((category, index) => (
        <div key={index} className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-4 py-20 md:py-44 xl:py-96">
          <Image
            src={category.image}
            width="480"
            height="823"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.3]"
          />
          <h3 className="text-2xl xl:text-4xl md:text-center font-bold text-white">
            <a href={category.href}>{category.name}</a>
          </h3>
        </div>
      ))}
    </div>
  )
}