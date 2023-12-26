import Container from "@/src/components/container"
import Heading from "@/src/components/heading"
import Title from "@/src/components/title"

export default function About() {
  return (
    <div id="about" className="bg-white py-14 sm:py-48">
      <Title text="ПРО НАС" className="-mb-[8vw] 2xl:-mb-[10vw] mx-[9vw] hidden md:flex" />
      <Container>
        <Heading className="max-w-[250px]" isDark>Симбіоз творчості та прагматичності</Heading>
        <div className="mt-7 md:mt-10 xl:mt-5 grid grid-cols-1 gap-3 xl:gap-8 text-sm xl:text-base font-light text-[#666] xl:grid-cols-2">
          <p>
            ASTY – архітектурно-дизайнерське бюро, яке працює в сфері дизайну інтер’єру та архітектури по всьому світі.  Ми - команда, яка спроєктує та реалізує дизайнерський ремонт вашої мрії. Після десяти років на ринку ми зрозуміли, що не хочемо більше наслідувати тренди, ми хочемо їх задавати та створювати. Створювати з любовʼю, адже кожний квадратний метр має значення. Ми пройшли довгий та тернистий шлях і зараз ми робимо те, що ми дуже любимо, ми створюємо простір, простір в якому хочеться жити.
          </p>
          <p>
            Кожен наш проєкт - це індивідуальна історія, вписана між стін. Ми відносимось до інтер’єру як до мистецтва і саме тому нас визнають експертами на міжнародному рівні. Кожен наш об’єкт має власну історію, концепцію та душу. Ми хочемо, щоб створені нами архітектура міст та дизайн інтерʼєрів були тим, чим наші нащадки будуть пишатись. Ми досліджуємо, проєктуємо та реалізовуємо дизайн, спрямований на комфорт та естетику. І якщо ви знайшли нас, то ви на крок ближчі до простору вашої мрії.
          </p>
        </div>
      </Container>
    </div>
  )
}