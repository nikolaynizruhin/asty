import Title from "@/components/title"

export default function About() {
  return (
    <div className="bg-white py-14 sm:py-48">
      <Title text="ПРО НАС" className="-mb-[8vw] 2xl:-mb-[10vw] mx-[9vw] hidden md:flex" />
      <div className="mx-auto max-w-lg xl:max-w-4xl px-4">
        <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:leading-10 md:text-4xl max-w-[250px] tracking-wide">
          We design every project as a one-off
        </h2>
        <div className="mt-7 md:mt-10 xl:mt-5 grid grid-cols-1 gap-3 xl:gap-8 text-sm xl:text-base xl:tracking-wide font-extralight text-[#666] xl:grid-cols-2">
          <p>
            ASTY – архітектурно-дизайнерське бюро, яке працює в сфері дизайну інтер’єру та архітектури по всьому світі.  Ми - команда, яка спроєктує та реалізує дизайнерський ремонт вашої мрії. Після десяти років на ринку ми зрозуміли, що не хочемо більше наслідувати тренди, ми хочемо їх задавати та створювати. Створювати з любовʼю, адже кожний квадратний метр має значення. Ми пройшли довгий та тернистий шлях і зараз ми робимо те, що ми дуже любимо, ми створюємо простір, простір в якому хочеться жити.
          </p>
          <p>
            Кожен наш проєкт - це індивідуальна історія, вписана між стін. Ми відносимось до інтер’єру як до мистецтва і саме тому нас визнають експертами на міжнародному рівні. Кожен наш об’єкт має власну історію, концепцію та душу. Ми хочемо, щоб створені нами архітектура міст та дизайн інтерʼєрів були тим, чим наші нащадки будуть пишатись. Ми досліджуємо, проєктуємо та реалізовуємо дизайн, спрямований на комфорт та естетику. І якщо ви знайшли нас, то ви на крок ближчі до простору вашої мрії.
          </p>
        </div>
        <div className="mt-12 md:mt-14 flex">
          <a href="#" className="border border-black bg-white py-3 px-10 md:px-8 xl:px-16 xl:py-4 text-[11px] text-xs tracking-wider font-medium text-black hover:text-white hover:bg-black">
            ДІЗНАТИСЯ БІЛЬШЕ
          </a>
        </div>
      </div>
    </div>
  )
}