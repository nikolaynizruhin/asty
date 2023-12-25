import ContactButton from "@/src/components/contact-button"
import Heading from "@/src/components/heading"

export default function Contact() {
  return (
    <div className="bg-white pt-12 pb-14 md:pb-24 md:pt-36 xl:pb-44 xl:pt-52">
      <div className="mx-auto max-w-[550px] md:max-w-[464px] xl:max-w-4xl px-4 lg:px-8">
        <Heading className="max-w-[360px]">Напишіть нам про Ваш проєкт!</Heading>
        <p className="text-[#666] font-light max-w-[350px] mt-10 md:mt-14 xl:mt-10 xl:mb-28 text-sm xl:text-base">
          Разом ми створемо простір в якому хочеться жити та творити.
        </p>
        <div className="mt-8 md:mt-14 flex">
          <ContactButton>
            НАПИСАТИ
          </ContactButton>
        </div>
      </div>
    </div>
  )
}
