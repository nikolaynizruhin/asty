import Icon from "@/src/components/icon"

const steps = [
  {
    index: 1,
    name: 'Знайомство',
    description: 'Знайомство і обговорення ваших очікувань і наших можливостей',
    icon: 'house-check',
  },
  {
    index: 2,
    name: 'Підписання договору',
    description: 'Розрахунок вартості проєкту, обговорення деталей, укладення договору, авансовий платіж',
    icon: 'pen',
  },
  {
    index: 3,
    name: 'Планувальне рішення та візуалізації',
    description: 'Заміри простору і розробка концепту з планувальним рішенням. Обмін референсами та інспіраціями. Розробка moodboard',
    icon: 'file-earmark-easel',
  },
  {
    index: 4,
    name: 'Робоча документація',
    description: 'Пакет креслень, вибір матеріалів, обговорення бюджету і підписання договору на ремонт',
    icon: 'journal-check',
  },
  {
    index: 5,
    name: 'Ремонтні роботи та авторський супровід',
    description: 'Запуск ремонту. Ми контролюємо всі етапи виконання ремонтних робіт, а ви займаєтесь своїми справами',
    icon: 'folder',
  },
  {
    index: 6,
    name: 'Новосілля',
    description: 'Щасливий день для Вас! Ми передаємо сервісні книжки та всю робочу документацію. Ви можете вже заселятись у свою оселю',
    icon: 'bezier',
  }
]

export default function Steps() {
  return (
    <div className="py-7 md:py-28 xl:py-48">
      <div className="mx-auto max-w-lg xl:max-w-4xl px-4">
        <div className="xl:pl-[50%]">
          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl max-w-xs">
            Як ми працюємо
          </h2>
          <p className="mt-7 md:mt-10 xl:mt-6 text-base font-light text-[#666]">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-12 md:mt-16 max-w-2xl sm:mt-20 lg:mt-20 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 md:grid-cols-2 gap-x-20 xl:gap-x-32 gap-y-6 md:gap-y-16 xl:gap-y-32 lg:max-w-none xl:grid-cols-3">
            {steps.map(step => (
              <div key={step.index} className="flex gap-7 md:gap-0 md:flex-col relative">
                <div className="hidden md:block absolute font-bold text-[180px] text-black opacity-[0.02] -left-24 -top-24 -z-10">
                  {step.index}
                </div>
                <dt className="flex md:items-center gap-x-3 text-sm font-bold min-h-[48px] text-gray-900">
                  <Icon name={step.icon} width={32} height={32} className="flex-none h-9 w-9 md:h-8 md:w-8" />
                  <span className="hidden md:inline">
                    # {step.index}
                    <br />
                    {step.name}
                  </span>
                </dt>
                <dd className="md:mt-6 text-base font-light text-[#666]">
                  <p className="md:hidden mb-[10px] text-sm font-bold text-gray-900">
                    #{step.index} {step.name}
                  </p>
                  {step.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}