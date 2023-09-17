export default function Title({ text, className = '' }: { text: string, className: string }) {
  return (
    <h1 className={`flex justify-between text-[180px] font-bold leading-none text-black opacity-[0.02] ${className}`}>
      {text.split('').map(character => <span>{character}</span>)}
    </h1>
  )
}
