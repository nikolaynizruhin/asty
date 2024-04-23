export default function Title({ text, className = '' }: { text: string, className: string }) {
  return (
    <h1 className={`flex justify-between text-[12.5vw] font-bold leading-none text-black/[.02] ${className}`}>
      {text.split('').map((character, index) => <span key={index}>{character}</span>)}
    </h1>
  )
}
