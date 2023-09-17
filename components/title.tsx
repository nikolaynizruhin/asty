export default function Title({ text, className = '' }: { text: string, className: string }) {
  return (
    <h1 className={`flex justify-between text-[180px] font-bold leading-none text-black opacity-[0.02] ${className}`}>
      {text.split('').map((character, index) => <span key={index}>{character}</span>)}
    </h1>
  )
}
