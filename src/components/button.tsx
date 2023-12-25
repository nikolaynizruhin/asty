'use client'

export default function Button({ children, className, isDark = false, ...props }: { children: string, className?: string, isDark?: boolean, [key: string]: any }) {
  const classes = `${isDark 
    ? 'border-white text-white hover:text-black hover:bg-white'
    : 'border-black text-black hover:text-white hover:bg-black'
  } border py-3 xl:py-4 text-[11px] text-xs text-center tracking-wider font-semibold w-[200px] xl:w-[260px] ${className}`

  return <button className={classes} {...props}>{children}</button>
}
