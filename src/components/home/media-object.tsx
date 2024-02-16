import { MediaObject } from "@/src/lib/definitions";
import Icon from "../icon";

export default function MediaObject({ media, isDark = false }: { media: MediaObject, isDark?: boolean }) {
  return (
    <div className="flex gap-7 md:gap-0 md:flex-col relative">
      {media?.id && <div className="hidden md:block absolute font-bold text-[180px] text-black opacity-[0.02] -left-20 -top-24 -z-10">{media.id}</div>}
      <dt className={`flex md:items-center gap-x-3 text-sm font-bold min-h-[48px] ${isDark ? 'text-gray-900' : 'text-white'}`}>
        <Icon name={media.icon} width={32} height={32} className="flex-none" />
        <span className="hidden md:inline">
          {media?.id ? <># {media.id}<br />{media.name}</> : media.name}
        </span>
      </dt>
      <dd className={`md:mt-6 text-base font-light ${isDark ? 'text-[#666]' : 'text-white'}`}>
        <p className={`md:hidden mb-[10px] text-sm font-bold ${isDark ? 'text-gray-900' : 'text-white'}`}>
          {media?.id ? `#${media.id} ${media.name}` : media.name}
        </p>
        {media.description}
      </dd>
    </div>
  )
}