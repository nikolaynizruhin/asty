import Container from "@/src/components/container"
import Heading from "@/src/components/heading"
import Icon from "@/src/components/icon"
import Image from "next/image"

const services = [
  {
    name: 'Будівельно-монтажні роботи',
    description: 'Ми керуємо процесом будівництва, ремонтом та виробництвом меблів, щоб гарантувати, що все буде виконано на найвищому рівні. Ми доступні 24/7 та надаємо фото/відео звіти всього будівельного процесу, де ви можете спостерігати за кожним кроком нашої команди.',
    icon: 'house',
  },
  {
    name: 'Архітектурно-дизайнерське проєктування',
    description: 'Розробка архітектурних проєктів відбувається з урахуванням особливостей ділянки та відповідно до будівельних норм та стандартів. Важливою складовою всьго процесу проєктування є ваше бачення та бажання.',
    icon: 'file-earmark-easel',
  },
  {
    name: 'Авторський супровід дизайн проєктів',
    description: "Ми слідкуємо за тим, щоб весь процес ремонту був без ускладнень і не потребував вашої участі. Всі поточні питання, які виникають вирішує локально наш дизайнер на об'єкті і слідкує за правильним підбором матеріалів і вибором зразків.",
    icon: 'vector-pen',
  },
  {
    name: 'Комплексний ремонт та повна комплектація',
    description: "У робочому просторі стежимо за аналогією дизайн-проєкту та контролюємо відповідність кольоровій гаммі. Налагоджена система управління всіма етапами дає можливість дотримуватись термінів і виконання робіт без перешкод.",
    icon: 'calculator',
  }
]

export default function Services() {
  return (
    <div className="bg-[#1a1a1a]">
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src="/images/services.jpg"
          alt=""
          width="1440"
          height="768"
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[0.25]"
        />
        <Container className="py-7 md:py-28 xl:py-48">
          <div className="xl:w-1/2">
            <Heading>Наші послуги</Heading>
            <p className="mt-7 md:mt-10 xl:mt-6 text-base font-light text-white">
              Ми ретельно продумуємо всі технічні аспекти проєкту прононуючи сучасні та функціональні рішення, які ми можемо реалізувати з нашими партнерами.
            </p>
          </div>
          <div className="mx-auto mt-12 md:mt-16 max-w-2xl sm:mt-20 lg:mt-20 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-20 xl:gap-x-32 gap-y-6 md:gap-y-16 xl:gap-y-32 lg:max-w-none md:grid-cols-2">
              {services.map((service, index) => (
                <div key={index} className="flex gap-7 md:gap-0 md:flex-col relative">
                  <dt className="flex md:items-center gap-x-3 text-sm font-bold min-h-[48px] text-white">
                    <Icon name={service.icon} width={32} height={32} className="flex-none" />
                    <span className="hidden md:inline">
                      {service.name}
                    </span>
                  </dt>
                  <dd className="md:mt-6 text-base font-light text-white">
                    <p className="md:hidden mb-[10px] text-sm font-bold text-white">
                      {service.name}
                    </p>
                    {service.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </div>
    </div>
  )
}