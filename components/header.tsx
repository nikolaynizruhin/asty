'use client'

import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { useState } from 'react'

const navigation = [
  { name: 'Проєкти', href: '#' },
  { name: 'Про нас', href: '#' },
  { name: 'Кар’єра', href: '#' },
  { name: 'Контакти', href: '#' },
]

export default function Header({ isDark = false }: { isDark?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between px-5 py-4 lg:px-16 lg:py-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">ASTY</span>
            <Image src={isDark ? '/logo-dark.svg' : '/logo-light.svg'} alt="Logo" width="797" height="236" className="h-10 md:h-12 xl:h-14 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
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
          {navigation.map((item, index) => (
            <a key={index} href={item.href} className={`text-sm font-normal leading-6 ${isDark ? 'text-[#333]' : 'text-white'}`}>
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[rgba(31,31,31,0.99)] px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">ASTY</span>
              <Image src="/logo-light.svg" alt="Logo" width="797" height="236" className="h-10 md:h-12 xl:h-14 w-auto" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
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
                {navigation.map((item, index) => (
                  <a key={index} href={item.href} className={`-mx-3 block px-3 text-center py-2 text-2xl font-medium leading-7 hover:underline ${isDark ? 'text-[#333]' : 'text-white'}`}>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}