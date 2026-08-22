import ContactButton from "@/components/contact-button"
import Container from "@/components/container"
import Heading from "@/components/heading"
import { Contact as ContactInterface } from "../lib/definitions"
import company from "@/config/company"
import { removeWhitespaces } from "@/lib/utils"

const contacts: ContactInterface[] = [
  {
    index: 1,
    name: "Пошта",
    href: `mailto:${company.email}`,
    target: "_self",
    text: company.email,
  },
  {
    index: 2,
    name: "Телефон",
    href: `tel:${removeWhitespaces(company.phone)}`,
    target: "_self",
    text: company.phone,
  },
  {
    index: 3,
    name: "Адреса",
    href: company.map,
    target: "_blank",
    text: company.address.city + ", " + company.address.street,
  },
]

export default function Contact({
  className,
  asPage = false,
}: {
  className?: string
  asPage?: boolean
}) {
  return (
    <div id="contact" className={`bg-[#1a1a1a] ${className}`}>
      <Container>
        <Heading
          as={asPage ? "h1" : "h2"}
          className="mb-12 max-w-[250px] xl:mb-14"
        >
          Наші контакти
        </Heading>
        <div className="mr-16 grid grid-cols-2 gap-x-4 gap-y-8 sm:mr-0 sm:grid-cols-3 sm:gap-0">
          {contacts.map((contact) => (
            <ContactDetail key={contact.index} contact={contact} />
          ))}
        </div>
        <p className="mt-11 max-w-[350px] text-base font-light text-[#666] xl:mt-16">
          Разом ми створимо простір, в якому хочеться жити та творити.
        </p>
        <div className="mt-8 flex xl:mt-14">
          <ContactButton isDark>ЗВ’ЯЗАТИСЬ З НАМИ</ContactButton>
        </div>
      </Container>
    </div>
  )
}

function ContactDetail({ contact }: { contact: ContactInterface }) {
  return (
    <div>
      <p className="text-sm font-light text-[#666]">{contact.name}:</p>
      <a
        href={contact.href}
        target={contact.target}
        className="text-sm text-white"
      >
        {contact.text}
      </a>
    </div>
  )
}
