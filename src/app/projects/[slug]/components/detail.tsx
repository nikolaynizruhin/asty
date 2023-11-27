import Icon from "@/src/components/icon"

export default function Detail({ title, description, icon }: { title: string, description: string, icon: string }) {
  return (
    <div className="flex">
      <div className="flex items-center justify-center xl:w-20 mr-9 xl:mr-0">
        <Icon name={icon} />
      </div>
      <div>
        <h4 className="text-[#333] font-bold tracking-wider mb-1 text-sm">
          {title}:
        </h4>
        <p className="text-[#666] tracking-wider text-sm font-light">
          {description}
        </p>
      </div>
    </div>
  )
}