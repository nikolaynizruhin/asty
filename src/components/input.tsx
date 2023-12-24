export default function Input({ name, label, type = 'text', error }: { name: string, label: string, type?: string, error?: string }) {
  return (
    <div>
      <div className="flex items-center group">
        <label htmlFor={name} className="font-bold text-sm xl:text-lg text-[#828282] mr-3 group-focus-within:text-white">
          {label}
        </label>
        <div className="relative flex-1">
          <input
            type={type}
            name={name}
            id={name}
            className="peer block w-full border-0 text-[#828282] bg-inherit focus:ring-0 py-0 text-sm xl:text-lg"
          />
          <div
            className={`absolute inset-x-0 bottom-0 border-t border-[#828282] peer-focus:border-t-2 peer-focus:border-white ${type === 'file' ? 'hidden' : ''}`}
            aria-hidden="true"
          />
        </div>
      </div>
      {error && <div className="text-[red] text-xs text-right mt-[2px]">{error}</div>}
    </div>
  )
}
