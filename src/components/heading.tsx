export default function Heading({ children, className = '', isDark = false }: { children: string, className?: string, isDark?: boolean }) {
  return (
    <h2 className={`text-[28px] leading-[33px] font-bold md:text-4xl ${isDark ? 'text-black' : 'text-white'} ${className}`}>
      {children}
    </h2>
  )
}
