export default function Container({
  children,
  className,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`mx-auto max-w-[550px] px-4 md:max-w-[464px] md:px-0 xl:max-w-[854px] ${className}`}
    >
      {children}
    </div>
  )
}
