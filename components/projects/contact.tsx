import ContactButton from "@/components/contact-button"
import Container from "@/components/container"
import Heading from "@/components/heading"

export default function Contact() {
  return (
    <div className="bg-white pt-12 pb-14 md:pb-24 md:pt-36 xl:pb-44 xl:pt-52">
      <Container>
        <Heading className="max-w-[360px]" isDark>Напишіть нам про Ваш проєкт!</Heading>
        <p className="text-[#666] font-light max-w-[350px] mt-10 md:mt-14 xl:mt-10 xl:mb-28 text-sm xl:text-base">
          Разом ми створимо простір, в якому хочеться жити та творити.
        </p>
        <div className="mt-8 md:mt-14 flex">
          <ContactButton>
            НАПИСАТИ
          </ContactButton>
        </div>
      </Container>
    </div>
  )
}
