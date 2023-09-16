const steps = [
  {
    index: 1,
    name: 'Знайомство',
    description: 'Знайомство і обговорення ваших очікувань і наших можливостей'
  },
  {
    index: 2,
    name: 'Підписання договору',
    description: 'Розрахунок вартості проєкту, обговорення деталей, укладення договору, авансовий платіж'
  },
  {
    index: 3,
    name: 'Планувальне рішення',
    description: 'Заміри простору і розробка концепту з планувальним рішенням'
  },
  {
    index: 4,
    name: 'Візуалізації',
    description: 'Обмін референсами та інспіраціями. Розробка moodboard'
  },
  {
    index: 5,
    name: 'Робоча документація',
    description: 'Пакет креслень, вибір матеріалів, обговорення бюджету і підписання договору на ремонт'
  },
  {
    index: 6,
    name: 'Ремонтні роботи',
    description: 'Запуск ремонту. Протягом робочого процесу ви задіяні тільки для читання звітності за минулі періоди і плани на майбутнє'
  },
  {
    index: 7,
    name: 'Авторський супровід',
    description: 'Ми контролюємо всі етапи виконання ремонтних робіт, а ви займаєтесь своїми справами'
  },
  {
    index: 8,
    name: 'Передача робіт',
    description: 'Обговорення коментарів'
  },
  {
    index: 9,
    name: 'Новосілля',
    description: 'Щасливий день для Вас! Ми передаємо сервісні книжки та всю робочу документацію'
  }
]

export default function Steps() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="pl-[50%]">
          <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-3xl max-w-xs tracking-wide">
            Як ми працюємо
          </h2>
          <p className="mt-6 text-sm tracking-wide font-light leading-6 text-[#666]">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-20 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-36 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map(step => (
              <div key={step.index} className="flex flex-col relative">
                <div className="absolute font-bold text-[180px] text-black opacity-[0.02] -left-24 -top-24 -z-10">
                  {step.index}
                </div>
                <dt className="flex items-center gap-x-3 text-sm font-medium leading-4 text-gray-900">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-8 h-8 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                    />
                  </svg>
                  # {step.index}
                  <br />
                  {step.name}
                </dt>
                <dd className="mt-6 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto text-sm tracking-wide font-light leading-6 text-[#666]">
                    {step.description}
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