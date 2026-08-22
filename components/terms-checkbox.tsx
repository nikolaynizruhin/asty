import Link from "next/link"
import Errors from "./errors"

export default function TermsCheckbox({ errors }: { errors?: string[] }) {
  return (
    <div className="mt-8 mb-6 md:mt-12 xl:mt-20 xl:mb-8">
      <div className="flex items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="h-4 w-4 border-[#828282] bg-transparent text-transparent checked:border-[#828282] checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZD0iTTEzLjg1NCAzLjY0NmEuNS41IDAgMCAxIDAgLjcwOGwtNyA3YS41LjUgMCAwIDEtLjcwOCAwbC0zLjUtMy41YS41LjUgMCAxIDEgLjcwOC0uNzA4TDYuNSAxMC4yOTNsNi42NDYtNi42NDdhLjUuNSAwIDAgMSAuNzA4IDAiLz4KPC9zdmc+')] checked:hover:border-[#828282] focus:ring-0 focus:ring-offset-1"
        />
        <label
          htmlFor="terms"
          className="ml-3 text-sm text-[#828282] xl:text-base"
        >
          Я даю згоду на обробку{" "}
          <Link
            href="/privacy"
            className="underline decoration-1 underline-offset-[6px] hover:text-white"
          >
            персональних даних
          </Link>
        </label>
      </div>
      <Errors errors={errors} className="ml-7" />
    </div>
  )
}
