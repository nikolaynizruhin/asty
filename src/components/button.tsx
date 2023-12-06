'use client'

export default function Button({ children, href, onClick, className, isDark = false }: { href?: string, children: string, className?: string, isDark?: boolean, onClick?: () => void }) {
  const classes = `${isDark ? 'border-white text-white hover:text-black hover:bg-white' : 'border-black text-black hover:text-white hover:bg-black'} border py-3 xl:py-4 text-[11px] text-xs text-center tracking-wider font-semibold w-[200px] xl:w-[260px] ${className}`

  return href ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
