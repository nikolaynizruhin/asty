import Icon from "@/src/components/icon"
import { Detail } from "@/src/lib/definitions"

export default function Detail({ detail }: { detail: Detail }) {
  return (
    <div className="flex">
      <div className="flex items-center justify-center xl:w-20 mr-9 xl:mr-0">
        <Icon name={detail.icon} />
      </div>
      <div>
        <h4 className="text-[#333] font-bold tracking-wider mb-1 text-sm">
          {detail.name}:
        </h4>
        <p className="text-[#666] tracking-wider text-sm font-light">
          {detail.description}
        </p>
      </div>
    </div>
  )
}