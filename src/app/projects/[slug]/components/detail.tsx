import Icon from "@/src/components/icon"

export default function Detail({ title, description, icon }: { title: string, description: string, icon: string }) {
  return (
    <div className="flex">
      <Icon name={icon} className="mx-9" />
      <div>
        <h4 className="text-[#333] font-semibold tracking-wider mb-1 leading-4 text-sm">
          {title}:
        </h4>
        <p className="text-[#666] leading-4 tracking-wider text-sm font-light">
          {description}
        </p>
      </div>
    </div>
  )
}