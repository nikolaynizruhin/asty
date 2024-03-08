import Title from "@/components/title";
import Heading from "@/components/heading";
import Container from "@/components/container";

export default function Columns({ id, title, heading, children, button }: { id: string, title: string, heading: string, children: React.ReactNode, button?: React.ReactNode }) {
  return (
    <div id={id} className="bg-white py-14 md:py-32 xl:py-48">
      <Title text={title} className="-mb-[8vw] 2xl:-mb-[10vw] mx-[9vw] hidden md:flex" />
      <Container>
        <Heading className="max-w-[250px]" isDark>{heading}</Heading>
        <div className="mt-7 md:mt-10 xl:mt-5 grid grid-cols-1 gap-3 xl:gap-8 text-sm xl:text-base font-light text-[#666] xl:grid-cols-2">
          {children}
        </div>
        {button}
      </Container>
    </div>
  )
}
