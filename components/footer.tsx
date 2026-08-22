import Link from "next/link"
import SocialIcons from "./social-icons"
import company from "@/config/company"

export default function Footer({ isDark = false }: { isDark?: boolean }) {
  return (
    <footer className={`font-light ${isDark ? "bg-[#1a1a1a]" : "bg-white"}`}>
      <div className="mx-auto max-w-[550px] px-4 pb-11 md:max-w-none md:px-8 lg:pb-9 xl:px-16">
        <Link
          href="/disclaimer"
          className={`text-[10px] tracking-widest ${isDark ? "text-white opacity-[0.32]" : "text-[#888]"} mr-[20px]`}
        >
          Правові застереження
        </Link>
        <Link
          href="/privacy"
          className={`text-[10px] tracking-widest ${isDark ? "text-white opacity-[0.32]" : "text-[#888]"}`}
        >
          Політика конфіденційності
        </Link>
        <div className="text-[#888] md:flex md:items-center md:justify-between">
          <p className="text-[10px] font-light tracking-widest">
            © {company.founded} - {new Date().getFullYear()} {company.name}. ВСІ
            ПРАВА ЗАХИЩЕНО.
          </p>
          <SocialIcons className="mt-3 flex space-x-6 md:mt-0" />
        </div>
      </div>
    </footer>
  )
}
