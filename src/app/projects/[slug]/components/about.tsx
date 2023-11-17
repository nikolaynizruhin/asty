import Icon from "@/src/components/icon"
import Title from "@/src/components/title"
import Detail from "./detail"

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Title text="ABOUT" className="-mb-28 mx-[9vw]" />
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 tracking-wide lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="mb-12 text-3xl font-semibold text-gray-900 sm:text-3xl max-w-[300px]">
                Brief
              </h2>
              <p className="text-sm font-light leading-6 text-[#666]">
                ASTY created this design project for a young family. The customer
                and his wife love and adore Spain, and they also consider their
                home a place with a warm atmosphere for leisure time. That is why
                the interior is mostly in beige, milky, and light brown shades,
                filled with everything necessary for maintaining physical fitness
                and relaxation.
              </p>
            </div>
            <div className="flex flex-col gap-7 pt-10 pl-24">
              <Detail icon="geo-alt" title="Location" description="Madrid, Spain" />
              <Detail icon="houses" title="Square meters" description="13,993 ft² / 1,300m²" />
              <Detail icon="calendar3" title="Date" description="In progress" />
              <Detail icon="people" title="Team" description="Artur Sharf" />
              <div className="text-sm font-light leading-6 text-[#666] flex items-center mt-16">
                Share:
                <Icon name="facebook" width={12} height={12} className="ml-7 mr-6" />
                <Icon name="instagram" width={12} height={12} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
