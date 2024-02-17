import Header from '@/src/components/header'
import Footer from '@/src/components/footer'
import ContactComponent from '@/src/components/contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакти',
}

export default function Contact() {
  return (
    <>
      <Header />
      <ContactComponent className='pb-72 pt-24 md:pt-28 xl:py-80' />
      <Footer isDark />
    </>
  )
}
