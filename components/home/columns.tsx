import Title from "@/components/title"
import Heading from "@/components/heading"
import Container from "@/components/container"

export default function Columns({
  id,
  title,
  heading,
  children,
  button,
}: {
  id: string
  title: string
  heading: string
  children: React.ReactNode
  button?: React.ReactNode
}) {
  return (
    <div id={id} className="bg-white py-14 md:py-32 xl:py-48">
      <Title
        text={title}
        className="mx-[9vw] -mb-[8vw] hidden md:flex 2xl:-mb-[10vw]"
      />
      <Container>
        <Heading className="max-w-[250px]" isDark>
          {heading}
        </Heading>
        <div className="mt-7 grid grid-cols-1 gap-3 text-sm font-light text-[#666] md:mt-10 xl:mt-5 xl:grid-cols-2 xl:gap-8 xl:text-base">
          {children}
        </div>
        {button}
      </Container>
    </div>
  )
}
