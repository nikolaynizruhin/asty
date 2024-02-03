import Container from "@/src/components/container"
import Heading from "@/src/components/heading"
import MediaObject from "./media-object"

const steps = [
  {
    id: 1,
    name: 'Знайомство',
    description: 'Знайомство і обговорення ваших очікувань і наших можливостей',
    icon: 'people',
  },
  {
    id: 2,
    name: 'Підписання договору',
    description: 'Розрахунок вартості проєкту, обговорення деталей, укладення договору, авансовий платіж',
    icon: 'pen',
  },
  {
    id: 3,
    name: 'Планувальне рішення та візуалізації',
    description: 'Заміри простору і розробка концепту з планувальним рішенням. Обмін референсами та інспіраціями',
    icon: 'file-earmark-easel',
  },
  {
    id: 4,
    name: 'Робоча документація',
    description: 'Пакет креслень, вибір матеріалів, обговорення бюджету і підписання договору на ремонт',
    icon: 'journal-check',
  },
  {
    id: 5,
    name: 'Ремонтні роботи та авторський супровід',
    description: 'Запуск ремонту. Ми контролюємо всі етапи виконання ремонтних робіт, а ви займаєтесь своїми справами',
    icon: 'tools',
  },
  {
    id: 6,
    name: 'Новосілля',
    description: 'Щасливий день для Вас! Ми передаємо сервісні книжки та всю робочу документацію. Ви можете заселятись у свою оселю',
    icon: 'house-check',
  }
]

export default function Steps() {
  return (
    <div className="py-7 md:py-28 xl:py-48">
      <Container>
        <div className="xl:pl-[50%]">
          <Heading isDark>Як ми працюємо</Heading>
          <p className="mt-7 md:mt-10 xl:mt-6 text-base font-light text-[#666]">
            Ми любимо сприймати ваше бачення, створюючи елегантний, оригінальний і розумний спосіб втілення ваших задумів у життя.
          </p>
        </div>
        <div className="mx-auto mt-12 md:mt-16 max-w-2xl sm:mt-20 lg:mt-20 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 md:grid-cols-2 gap-x-20 xl:gap-x-32 gap-y-6 md:gap-y-16 xl:gap-y-32 lg:max-w-none xl:grid-cols-3">
            {steps.map(step => <MediaObject
              id={step.id}
              key={step.id}
              name={step.name}
              icon={step.icon}
              description={step.description}
              isDark
            />)}
          </dl>
        </div>
      </Container>
    </div>
  )
}
