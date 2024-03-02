import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactSection from '@/components/contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакти',
  description: "На сторінці можна ознайомитись з контактними даними архітектурно-дизайнерського бюро ASTY"
}

export default function Contact() {
  return (
    <>
      <Header />
      <ContactSection className='pb-72 pt-24 md:pt-28 xl:py-80' />
      <Footer isDark />
    </>
  )
}
