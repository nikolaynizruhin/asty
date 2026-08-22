export default function Errors({
  errors,
  className,
}: {
  errors?: string[]
  className?: string
}) {
  if (!errors) {
    return null
  }

  return (
    <>
      {errors.map((error, index) => (
        <div key={index} className={`mt-[2px] text-xs text-[red] ${className}`}>
          {error}
        </div>
      ))}
    </>
  )
}
