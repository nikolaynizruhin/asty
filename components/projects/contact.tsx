import ContactButton from "@/components/contact-button"
import Container from "@/components/container"
import Heading from "@/components/heading"

export default function Contact() {
  return (
    <div className="bg-white pt-12 pb-14 md:pt-36 md:pb-24 xl:pt-52 xl:pb-44">
      <Container>
        <Heading className="max-w-[360px]" isDark>
          Напишіть нам про Ваш проєкт!
        </Heading>
        <p className="mt-10 max-w-[350px] text-sm font-light text-[#666] md:mt-14 xl:mt-10 xl:mb-28 xl:text-base">
          Разом ми створимо простір, в якому хочеться жити та творити.
        </p>
        <div className="mt-8 flex md:mt-14">
          <ContactButton>НАПИСАТИ</ContactButton>
        </div>
      </Container>
    </div>
  )
}
