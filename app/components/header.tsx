import Image from 'next/image'

export default function Header({ isDark = false }: { isDark?: boolean }) {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-8 lg:px-16"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">ASTY</span>
            <Image src={isDark ? '/logo-dark.svg' : '/logo-light.svg'} alt="Logo" width="797" height="236" className="h-14 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-16 lg:flex-1 lg:justify-end">
          <a href="#" className={`text-xs font-normal leading-6 ${isDark ? 'text-[#333]' : 'text-white'}`}>
            Product
          </a>
          <a href="#" className={`text-xs font-normal leading-6 ${isDark ? 'text-[#333]' : 'text-white'}`}>
            Features
          </a>
          <a href="#" className={`text-xs font-normal leading-6 ${isDark ? 'text-[#333]' : 'text-white'}`}>
            Marketplace
          </a>
          <a href="#" className={`text-xs font-normal leading-6 ${isDark ? 'text-[#333]' : 'text-white'}`}>
            Company
          </a>
          <a href="#" className={`text-xs font-normal leading-6 ${isDark ? 'text-[#333]' : 'text-white'}`}>
            About
          </a>
          <a href="#" className={`text-xs font-normal leading-6 ${isDark ? 'text-[#333]' : 'text-white'}`}>
            Log in
          </a>
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      <div className="lg:hidden" role="dialog" aria-modal="true">
        {/* Background backdrop, show/hide based on slide-over state. */}
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-800 ${isDark ? 'text-[#333]' : 'text-white'}`}
                >
                  Product
                </a>
                <a
                  href="#"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-800 ${isDark ? 'text-[#333]' : 'text-white'}`}
                >
                  Features
                </a>
                <a
                  href="#"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-800 ${isDark ? 'text-[#333]' : 'text-white'}`}
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-800 ${isDark ? 'text-[#333]' : 'text-white'}`}
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-800 ${isDark ? 'text-[#333]' : 'text-white'}`}
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}