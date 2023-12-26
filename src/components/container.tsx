export default function Container({ children, className }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`mx-auto max-w-[550px] md:max-w-[464px] xl:max-w-[854px] px-4 md:px-0 ${className}`}>
      {children}
    </div>
  )
}
