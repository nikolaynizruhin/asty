import ContactButton from "@/src/components/contact-button"
import Heading from "@/src/components/heading"

const contacts = [
  {
    index: 1,
    name: 'Пошта',
    href: '#',
    text: 'office@asty.com.ua',
  },
  {
    index: 2,
    name: 'Телефон',
    href: 'tel:+380677777474',
    text: '+38 067 777 74 74',
  },
  {
    index: 3,
    name: 'Адреса',
    href: '#',
    text: 'Київ, вул. П.Скоропадського, 39',
  }
]

export default function Contact() {
  return (
    <div id="contact" className="bg-[#1a1a1a] py-20 xl:py-32">
      <div className="mx-auto max-w-lg xl:max-w-4xl px-4">
        <Heading className="max-w-[250px] mb-12 xl:mb-14">Наші контакти</Heading>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8 sm:gap-0 mr-16 sm:mr-0">
          {contacts.map(contact => (
            <div key={contact.index}>
              <h4 className="text-[#666] font-light text-sm">{contact.name}:</h4>
              <a href={contact.href} className="text-white text-sm">
                {contact.text}
              </a>
            </div>
          ))}
        </div>
        <p className="text-[#666] font-light text-base max-w-[350px] mt-11 xl:mt-16">
          Разом ми створемо простір в якому хочеться жити та творити.
        </p>
        <div className="mt-8 xl:mt-14 flex">
          <ContactButton isDark>
            ЗВ’ЯЗАТИСЬ З НАМИ
          </ContactButton>
        </div>
      </div>
    </div>
  )
}
