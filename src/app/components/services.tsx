import Icon from "@/src/components/icon"

const services = [
  {
    name: 'Будівельно-монтажні роботи',
    description: 'Знайомство і обговорення ваших очікувань і наших можливостей. Знайомство і обговорення ваших очікувань і наших можливостей. Знайомство і обговорення ваших очікувань і наших можливостей.',
    icon: 'house',
  },
  {
    name: 'Архітектурно-дизайнерське проектування',
    description: 'Розрахунок вартості проєкту, обговорення деталей, укладення договору, авансовий платіж. Розрахунок вартості проєкту, обговорення деталей, укладення договору, авансовий платіж.',
    icon: 'book',
  },
  {
    name: 'Авторський супровід дизайн проєктів',
    description: 'Заміри простору і розробка концепту з планувальним рішенням. Заміри простору і розробка концепту з планувальним рішенням. Заміри простору і розробка концепту з планувальним рішенням.',
    icon: 'vector-pen',
  },
  {
    name: 'Комплексний ремонт та повна комплектація',
    description: 'Обмін референсами та інспіраціями. Розробка moodboard. Обмін референсами та інспіраціями. Розробка moodboard. Обмін референсами та інспіраціями. Розробка moodboard',
    icon: 'calculator',
  }
]

export default function Services() {
  return (
    <div className="bg-[#1a1a1a] py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="pl-[50%]">
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl max-w-xs">
            Наші послуги
          </h2>
          <p className="mt-7 md:mt-10 xl:mt-6 text-base font-light text-[#666]">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-20 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-36 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col relative">
                <div className="hidden md:block absolute text-white opacity-[0.03] -left-14 -top-4">
                  <Icon name={service.icon} width={80} height={80} />
                </div>
                <dt className="flex items-center gap-x-3 text-sm font-bold text-white">
                  <Icon name={service.icon} width={32} height={32} className="flex-none" />
                  {service.name}
                </dt>
                <dd className="mt-6 text-base font-light text-[#666]">
                  {service.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}