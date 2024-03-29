import Icon from "@/components/icon"
import { Detail as DetailType } from "@/lib/definitions"

export default function Detail({ detail }: { detail: DetailType }) {
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
          {detail.value}
        </p>
      </div>
    </div>
  )
}