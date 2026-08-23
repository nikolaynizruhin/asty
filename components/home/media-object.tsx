import { MediaObject as MediaObjectType } from "@/lib/definitions"
import Icon from "@/components/icon"

export default function MediaObject({
  media,
  isDark = false,
}: {
  media: MediaObjectType
  isDark?: boolean
}) {
  return (
    <div className="relative flex gap-7 md:flex-col md:gap-0">
      <dt
        className={`flex min-h-12 gap-x-3 text-sm font-bold md:items-center ${isDark ? "text-gray-900" : "text-white"}`}
      >
        {media?.id && (
          <div
            aria-hidden="true"
            className="absolute -top-24 -left-20 -z-10 hidden text-[180px] font-bold text-black/2 md:block"
          >
            {media.id}
          </div>
        )}
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
          className={`mb-2.5 text-sm font-bold md:hidden ${isDark ? "text-gray-900" : "text-white"}`}
        >
          {media?.id ? `#${media.id} ${media.name}` : media.name}
        </p>
        {media.description}
      </dd>
    </div>
  )
}
