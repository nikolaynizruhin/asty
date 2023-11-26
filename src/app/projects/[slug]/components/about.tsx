import Icon from "@/src/components/icon"
import Title from "@/src/components/title"
import Detail from "./detail"

const details = [
  {
    icon: "geo-alt",
    title: "Location",
    description: "Madrid, Spain"
  },
  {
    icon: "houses",
    title: "Square meters",
    description: "13,993 ft² / 1,300m²"
  },
  {
    icon: "calendar3",
    title: "Date",
    description: "In progress"
  },
  {
    icon: "people",
    title: "Team",
    description: "Artur Sharf"
  }
]

export default function About() {
  return (
    <div className="bg-white py-12 md:py-48 xl:py-64">
      <Title text="ABOUT" className="-mb-40 mx-[9vw] hidden md:flex" />
      <div className="mx-auto max-w-lg xl:max-w-4xl px-4 mt-10 grid grid-cols-1 gap-3 xl:gap-8 tracking-wide xl:grid-cols-2">
        <div>
          <h2 className="mb-10 xl:mb-9 text-3xl font-semibold text-gray-900 md:text-4xl max-w-[300px]">
            Brief
          </h2>
          <p className="text-base font-light leading-6 text-[#666]">
            ASTY created this design project for a young family. The customer
            and his wife love and adore Spain, and they also consider their
            home a place with a warm atmosphere for leisure time. That is why
            the interior is mostly in beige, milky, and light brown shades,
            filled with everything necessary for maintaining physical fitness
            and relaxation.
          </p>
        </div>
        <div className="flex flex-col pt-10 xl:pl-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 xl:grid-cols-1">
            {details.map((detail, index) => <Detail key={index} {...detail} />)}
          </div>
          <div className="text-base font-light leading-6 text-[#666] flex items-center mt-16 xl:mt-24">
            Share:
            <Icon name="facebook" width={12} height={12} className="ml-7 mr-6" />
            <Icon name="instagram" width={12} height={12} />
          </div>
        </div>
      </div>
    </div>
  )
}
