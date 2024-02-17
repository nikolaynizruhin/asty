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
      <ContactComponent className='py-24 md:py-28 xl:py-80' />
      <Footer isDark />
    </>
  )
}
