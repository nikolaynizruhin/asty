export default function Heading({ children, className = '', isDark = false, as = 'h2' }: { children: string, className?: string, isDark?: boolean, as?: 'h1' | 'h2' }) {
  const Component = as

  return (
    <Component className={`text-[28px] leading-[33px] font-bold md:text-4xl ${isDark ? 'text-black' : 'text-white'} ${className}`}>
      {children}
    </Component>
  )
}
