export default function Input({ name, label }: { name: string, label: string }) {
  return (
    <div className="flex items-center group">
      <label htmlFor={name} className="font-bold text-lg text-[#828282] mr-3 group-focus-within:text-white">
        {label}
      </label>
      <div className="relative flex-1">
        <input
          type="text"
          name={name}
          id={name}
          className="peer block w-full border-0 text-[#828282] bg-inherit focus:ring-0 py-0"
        />
        <div
          className="absolute inset-x-0 bottom-0 border-t border-[#828282] peer-focus:border-t-2 peer-focus:border-white"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
