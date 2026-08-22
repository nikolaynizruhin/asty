import { MediaObject as MediaOnjectType } from "@/lib/definitions"
import Icon from "../icon"

export default function MediaObject({
  media,
  isDark = false,
}: {
  media: MediaOnjectType
  isDark?: boolean
}) {
  return (
    <div className="relative flex gap-7 md:flex-col md:gap-0">
      {media?.id && (
        <div className="absolute -top-24 -left-20 -z-10 hidden text-[180px] font-bold text-black/[.02] md:block">
          {media.id}
        </div>
      )}
      <dt
        className={`flex min-h-[48px] gap-x-3 text-sm font-bold md:items-center ${isDark ? "text-gray-900" : "text-white"}`}
      >
        <Icon name={media.icon} width={32} height={32} className="flex-none" />
        <span className="hidden md:inline">
          {media?.id ? (
            <>
              # {media.id}
              <br />
              {media.name}
            </>
          ) : (
            media.name
          )}
        </span>
      </dt>
      <dd
        className={`text-base font-light md:mt-6 ${isDark ? "text-[#666]" : "text-white"}`}
      >
        <p
          className={`mb-[10px] text-sm font-bold md:hidden ${isDark ? "text-gray-900" : "text-white"}`}
        >
          {media?.id ? `#${media.id} ${media.name}` : media.name}
        </p>
        {media.description}
      </dd>
    </div>
  )
}
