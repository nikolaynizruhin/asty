import Icon from "@/components/icon"

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
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="pl-[50%]">
          <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-3xl max-w-xs tracking-wide">
            Наші послуги
          </h2>
          <p className="mt-6 text-sm tracking-wide font-light leading-6 text-[#666]">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-20 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-36 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col relative">
                <dt className="flex items-center gap-x-3 text-sm font-medium leading-4 text-gray-900">
                  <Icon name={service.icon} width={32} height={32} className="flex-none" />
                  <br />
                  {service.name}
                </dt>
                <dd className="mt-6 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto text-sm tracking-wide font-light leading-6 text-[#666]">
                    {service.description}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}