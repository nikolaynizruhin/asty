import Link from "next/link";
import SocialIcons from "./social-icons";

export default function Footer({ isDark = false }: { isDark?: boolean }) {
  return (
    <footer className={`font-light ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="max-w-[550px] mx-auto md:max-w-none px-4 md:px-8 xl:px-16 lg:pb-9 pb-11">
        <Link href="/privacy" className={`text-[10px] tracking-widest ${isDark ? 'text-white opacity-[0.32]' : 'text-[#888]'} mr-[20px]`}>
          Правові застереження
        </Link>
        <Link href="/privacy" className={`text-[10px] tracking-widest ${isDark ? 'text-white opacity-[0.32]' : 'text-[#888]'}`}>
          Політика конфіденційності
        </Link>
        <div className="md:flex md:items-center md:justify-between text-[#888]">
          <p className="text-[10px] font-light tracking-widest">
            © { new Date().getFullYear() } ASTY, INC. ALL RIGHTS RESERVED.
          </p>
          <SocialIcons className="flex space-x-6 mt-3 md:mt-0" />
        </div>
      </div>
    </footer>
  )
}
