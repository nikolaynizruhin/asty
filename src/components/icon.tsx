export default function Icon({ name, width = 16, height = 16, className = '' }: { name: string, width?: number, height?: number, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} fill="currentColor">
      <use xlinkHref={`/images/bootstrap-icons.svg#${name}`}/>
    </svg>
  )
}
