import Container from "@/components/container"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Heading from "@/components/heading"

export default function Content({ children, title }: { title: string, children: React.ReactNode }) {
  return (
    <>
      <Header isDark />
      <div className="bg-white py-24 md:py-28 xl:py-56">
        <Container>
          <Heading as="h1" className="max-w-[250px]" isDark>{title}</Heading>
          <div className="mt-7 md:mt-10 xl:mt-5 text-sm xl:text-base font-light text-[#666]">
            {children}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  )
}