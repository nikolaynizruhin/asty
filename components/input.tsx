import Errors from "./errors"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  type?: string
  errors?: string[]
  labelClasses?: string
}

export default function Input({
  name,
  label,
  type = "text",
  errors,
  labelClasses,
  ...props
}: InputProps) {
  return (
    <div>
      <div className="group flex items-center">
        <label
          htmlFor={name}
          className={`mr-3 text-sm font-bold text-[#828282] group-focus-within:text-white xl:text-lg ${labelClasses}`}
        >
          {label}
        </label>
        <div className={`relative flex-1 ${type === "file" ? "hidden" : ""}`}>
          <input
            type={type}
            name={name}
            id={name}
            className="peer block w-full border-0 bg-inherit py-0 text-sm text-[#828282] focus:ring-0 xl:text-lg"
            {...props}
          />
          <div
            className={`absolute inset-x-0 bottom-0 border-t border-[#828282] peer-focus:border-t-2 peer-focus:border-white ${type === "file" ? "hidden" : ""}`}
            aria-hidden="true"
          />
        </div>
      </div>
      <Errors errors={errors} className="text-right" />
    </div>
  )
}
