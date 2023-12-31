import Icon from "@/src/components/icon"
import Title from "@/src/components/title"
import Detail from "./detail"
import { Project } from "@/src/lib/definitions"
import Heading from "@/src/components/heading"
import Container from "@/src/components/container"

export default function About({ project }: { project: Project }) {
  return (
    <div className="bg-white py-12 md:py-48 xl:py-64">
      <Title text="ДЕТАЛІ" className="-mb-40 mx-[9vw] hidden md:flex" />
      <Container className="mt-10 grid grid-cols-1 gap-3 xl:gap-8 xl:grid-cols-2">
        <div>
          <Heading className="mb-10 xl:mb-9 max-w-[330px]" isDark>Концепт</Heading>
          <p className="text-base font-light text-[#666]">
            {project.concept}
          </p>
        </div>
        <div className="flex flex-col pt-10 xl:pl-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 xl:grid-cols-1">
            {project.details.map((detail, index) => <Detail key={index} detail={detail} />)}
          </div>
          <div className="text-base font-light text-[#666] flex items-center mt-16 xl:mt-24">
            Share:
            <Icon name="facebook" width={12} height={12} className="ml-7 mr-6" />
            <Icon name="instagram" width={12} height={12} />
          </div>
        </div>
      </Container>
    </div>
  )
}
