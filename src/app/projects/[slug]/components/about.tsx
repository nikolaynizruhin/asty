import Icon from "@/src/components/icon"
import Title from "@/src/components/title"
import Detail from "./detail"

const details = [
  {
    icon: "geo-alt",
    title: "Локація",
    description: "Goodlife Park"
  },
  {
    icon: "houses",
    title: "Площа",
    description: "130 кв.м"
  },
  {
    icon: "calendar3",
    title: "Термін реалізації",
    description: "2024"
  },
  {
    icon: "vector-pen",
    title: "Стиль дизайну",
    description: "Мінімалізм"
  }
]

export default function About() {
  return (
    <div className="bg-white py-12 md:py-48 xl:py-64">
      <Title text="ABOUT" className="-mb-40 mx-[9vw] hidden md:flex" />
      <div className="mx-auto max-w-lg xl:max-w-4xl px-4 mt-10 grid grid-cols-1 gap-3 xl:gap-8 xl:grid-cols-2">
        <div>
          <h2 className="mb-10 xl:mb-9 text-3xl font-bold text-gray-900 md:text-4xl max-w-[300px]">
            Концепт
          </h2>
          <p className="text-base font-light text-[#666]">
            Це один з найулюбленіших проєктів архітектурно-дизайнерського бюро ASTY. Заміський будинок на воді в котеджному містечку. Ми використали для оздоблення спокійну кольорову гаму, дерев’яні меблі та натуральний текстиль, що дають відчуття поєднання з природою. Розташована поряд лаунж зона дає можливість відпочити та розслабитись дивлячись на красиві пейзажі та воду крізь великі панорамні вікна.
            Зверніть увагу на поєднання міксу дерев’яних кухонних фасадів та фартуху з каменю, які виглядають цілісно та гармонійно. А центральне місце в будинку займає камін.
          </p>
        </div>
        <div className="flex flex-col pt-10 xl:pl-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 xl:grid-cols-1">
            {details.map((detail, index) => <Detail key={index} {...detail} />)}
          </div>
          <div className="text-base font-light text-[#666] flex items-center mt-16 xl:mt-24">
            Share:
            <Icon name="facebook" width={12} height={12} className="ml-7 mr-6" />
            <Icon name="instagram" width={12} height={12} />
          </div>
        </div>
      </div>
    </div>
  )
}
