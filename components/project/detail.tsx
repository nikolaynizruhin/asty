import Icon from "@/components/icon"
import { Detail as DetailType } from "@/lib/definitions"

export default function Detail({ detail }: { detail: DetailType }) {
  return (
    <div className="flex">
      <div className="mr-9 flex items-center justify-center xl:mr-0 xl:w-20">
        <Icon name={detail.icon} />
      </div>
      <div>
        <h4 className="mb-1 text-sm font-bold tracking-wider text-[#333]">
          {detail.name}:
        </h4>
        <p className="text-sm font-light tracking-wider text-[#666]">
          {detail.value}
        </p>
      </div>
    </div>
  )
}
