import Icon from "../icon";

export default function MediaObject({ id, icon, name, description, isDark = false }: { id?: number, icon: string, description: string, name: string, isDark?: boolean }) {
  return (
    <div className="flex gap-7 md:gap-0 md:flex-col relative">
      {id && <div className="hidden md:block absolute font-bold text-[180px] text-black opacity-[0.02] -left-20 -top-24 -z-10">{id}</div>}
      <dt className={`flex md:items-center gap-x-3 text-sm font-bold min-h-[48px] ${isDark ? 'text-gray-900' : 'text-white'}`}>
        <Icon name={icon} width={32} height={32} className="flex-none" />
        <span className="hidden md:inline">
          {id ? <span># {id}<br />{name}</span> : name}
        </span>
      </dt>
      <dd className={`md:mt-6 text-base font-light ${isDark ? 'text-[#666]' : 'text-white'}`}>
        <p className={`md:hidden mb-[10px] text-sm font-bold ${isDark ? 'text-gray-900' : 'text-white'}`}>
          {id ? `#${id} ${name}` : name}
        </p>
        {description}
      </dd>
    </div>
  )
}