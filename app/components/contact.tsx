import Button from "@/components/button";

const contacts = [
  {
    index: 1,
    name: 'General Inquiries',
    href: '#',
    text: 'info@asty.com.ua',
  },
  {
    index: 2,
    name: 'Phone',
    href: '#',
    text: '+38 063 123 4567',
  },
  {
    index: 3,
    name: 'Address',
    href: '#',
    text: 'Kyiv, Zoloti Vorota, 12',
  }
]

export default function Contact() {
  return (
    <div className="bg-[#1a1a1a] py-20 xl:py-32">
      <div className="mx-auto max-w-lg xl:max-w-4xl px-4">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-[26px] font-semibold text-white md:text-[34px] max-w-[250px] tracking-wide mb-12 xl:mb-14">
            Get in touch with us
          </h2>
          <div className="flex justify-between">
            {contacts.map(contact => (
              <div key={contact.index} className="w-1/3">
                <h4 className="text-[#666] font-light text-sm">{contact.name}:</h4>
                <a href={contact.href} className="text-white font-light text-sm">
                  {contact.text}
                </a>
              </div>
            ))}
          </div>
          <p className="text-[#666] font-light max-w-[350px] mt-11 xl:mt-16">
            We are ready to lead you into the exciting world of architecture and
            interior design.
          </p>
          <div className="mt-8 xl:mt-14 flex">
            <Button href="#" isDark>
              SEND REQUEST
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}