import Link from "next/link";
import Errors from "./errors";

export default function TermsCheckbox({ errors }: { errors?: string[] }) {
  return (
    <div className="mt-8 md:mt-12 xl:mt-20 mb-6 xl:mb-8">
      <div className="flex items-center">
        <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 bg-transparent text-transparent border-[#828282] focus:ring-0 focus:ring-offset-1 checked:border-[#828282] checked:hover:border-[#828282] checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZD0iTTEzLjg1NCAzLjY0NmEuNS41IDAgMCAxIDAgLjcwOGwtNyA3YS41LjUgMCAwIDEtLjcwOCAwbC0zLjUtMy41YS41LjUgMCAxIDEgLjcwOC0uNzA4TDYuNSAxMC4yOTNsNi42NDYtNi42NDdhLjUuNSAwIDAgMSAuNzA4IDAiLz4KPC9zdmc+')]" />
        <label htmlFor="terms" className="ml-3 text-sm xl:text-base text-[#828282]">
          Я даю згоду на обробку <Link href="/privacy" className="hover:text-white underline underline-offset-[6px] decoration-1">персональних даних</Link>
        </label>
      </div>
      <Errors errors={errors} className="ml-7" />
    </div>
  )
}
