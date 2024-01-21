import { Project } from '@/src/lib/definitions'
import LandscapeImages from './landscape-images'
import PortraitImages from './portrait-images'

export default function Images({ project }: { project: Project }) {
  return (
    <div className="bg-white py-12 xl:py-20">
      <div className="mx-auto justify-items-center max-w-[550px] px-4 xl:px-16 grid grid-cols-1 md:gap-x-5 xl:gap-x-10 gap-y-4 md:gap-y-10 xl:gap-y-16 text-[#666] md:max-w-full md:grid-cols-2">
        {project.category === 'interior'
          ? <PortraitImages project={project} /> 
          : <LandscapeImages project={project} />}
      </div>
    </div>
  )
}
