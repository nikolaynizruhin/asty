import Header from '@/components/header'
import Footer from '@/components/footer'
import Contact from '@/components/projects/contact'
import ProjectList from '@/components/projects/projects'
import { Category } from '@/lib/definitions'
import { Metadata } from 'next'

export function generateMetadata({ params }: { params: { category?: Category[] }}): Metadata {
  const category = params?.category?.[0]

  switch (category) {
    case 'architecture':
      return {
        title: 'Архітектурні проекти та рішення',
        description: "Архітектурні проекти та рішення ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY",
      }
    case 'interior':
      return {
        title: "Дизайн-проекти інтер'єру",
        description: "Дизайн-проекти інтер'єру ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY",
      }
    case 'commerce':
      return {
        title: "Проєкти дизайну для комерційних приміщень",
        description: "Дизайн-проекти інтер'єру та архітектурні рішення для комерційних приміщень ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY",
      }
    default:
      return {
        title: 'Проєкти',
        description: "Дизайн-проекти інтер'єру, архітектурні проекти, рішення з комплектації та меблювання ➣ Дивитись проекти архітектурно-дизайнерського бюро ASTY",
      };
  }
}

export default function Projects({ params }: { params: { category?: Category[] }}) {
  return (
    <>
      <Header isDark />
      <ProjectList category={params?.category?.[0]} />
      <Contact />
      <Footer />
    </>
  )
}