export default function Button({ children, href, isDark = false }: { href: string, children: string, isDark?: boolean }) {
  return (
    <a href={href} className={`${isDark ? 'border-white text-white hover:text-black hover:bg-white' : 'border-black text-black hover:text-white hover:bg-black'} border py-3 px-10 md:px-8 xl:px-16 xl:py-4 text-[11px] text-xs tracking-wider font-medium`}>
      {children}
    </a>
  )
}
