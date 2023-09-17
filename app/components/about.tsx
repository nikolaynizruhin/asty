import Title from "@/components/title"

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Title text="ПРО НАС" className="-mb-28 mx-[9vw]" />
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-3xl max-w-[250px] tracking-wide">
            We design every project as a one-off
          </h2>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-sm tracking-wide font-light leading-6 text-[#666] lg:max-w-none lg:grid-cols-2">
            <div>
              ASTY – архітектурно-дизайнерське бюро, яке працює в сфері дизайну інтер’єру та архітектури по всьому світі.  Ми - команда, яка спроєктує та реалізує дизайнерський ремонт вашої мрії. Після десяти років на ринку ми зрозуміли, що не хочемо більше наслідувати тренди, ми хочемо їх задавати та створювати. Створювати з любовʼю, адже кожний квадратний метр має значення. Ми пройшли довгий та тернистий шлях і зараз ми робимо те, що ми дуже любимо, ми створюємо простір, простір в якому хочеться жити.
            </div>
            <div>
              Кожен наш проєкт - це індивідуальна історія, вписана між стін. Ми відносимось до інтер’єру як до мистецтва і саме тому нас визнають експертами на міжнародному рівні. Кожен наш об’єкт має власну історію, концепцію та душу. Ми хочемо, щоб створені нами архітектура міст та дизайн інтерʼєрів були тим, чим наші нащадки будуть пишатись. Ми досліджуємо, проєктуємо та реалізовуємо дизайн, спрямований на комфорт та естетику. І якщо ви знайшли нас, то ви на крок ближчі до простору вашої мрії.
            </div>
          </div>
          <div className="mt-10 flex">
            <a
              href="#"
              className="border border-black bg-white px-16 py-4 text-xs tracking-wider font-medium text-black hover:text-white hover:bg-black"
            >
              ДІЗНАТИСЯ БІЛЬШЕ
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}