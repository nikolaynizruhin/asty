'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import { useState } from 'react'
import Icon from './icon'
import Link from 'next/link'
import Logo from './logo'
import SocialIcons from './social-icons'
import { Navigation } from '../lib/definitions'
import app from '@/config/app'
import company from '@/config/company'
import { removeWhitespaces } from '@/lib/utils'

const navigation: Navigation[] = [
  { name: 'Проєкти', href: '/projects' },
  { name: 'Про нас', href: '/#about' },
  { name: 'Кар’єра', href: '/#career' },
  { name: 'Контакти', href: '/contact' },
]

export default function Header({ isDark = false }: { isDark?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const close = () => setMobileMenuOpen(false)
  const open = () => setMobileMenuOpen(true)

  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <nav
        className="flex items-center justify-between px-4 md:px-8 py-4 xl:px-16 lg:py-8 max-w-[550px] mx-auto md:max-w-none"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{app.name}</span>
            <Logo isDark={isDark} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${isDark ? 'test-[#333]' : 'text-[#f2f2f2]'}`}
            onClick={open}
          >
            <span className="sr-only">Open main menu</span>
            <Icon name="list" width={30} height={30} />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-16 lg:flex-1 lg:justify-end">
          {navigation.map((item, index) => (
            <Link key={index} href={item.href} className={`whitespace-nowrap text-sm font-bold ${isDark ? 'text-[#333]' : 'text-white'}`}>
              {item.name}
            </Link>
          ))}
          <Link href={'tel:' + removeWhitespaces(company.phone)} className={`whitespace-nowrap text-sm font-bold flex gap-2 ${isDark ? 'text-[#333]' : 'text-white'}`}>
            <Icon name="phone" width={18} height={18} />
            {company.phone}
          </Link>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-20" />
        <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-[rgba(31,31,31,0.99)] px-4 py-4 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 outline-hidden">
              <span className="sr-only">ASTY</span>
              <Logo />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[#f2f2f2]"
              onClick={close}
            >
              <span className="sr-only">Close menu</span>
              <Icon name="x-lg" width={24} height={24} />
            </button>
          </div>
          <div className="mt-24 flow-root">
            <div className="space-y-2 py-6">
              {navigation.map((item, index) => (
                <Link key={index} href={item.href} onClick={close} className="block px-3 text-center py-2 text-2xl font-normal hover:underline text-[#f2f2f2]">
                  {item.name}
                </Link>
              ))}
              <Link href={'tel:' + removeWhitespaces(company.phone)} className="block px-3 text-center py-2 text-2xl font-normal hover:underline text-[#f2f2f2]">
                {company.phone}
              </Link>
              <SocialIcons className="mt-2 flex justify-center gap-7 px-3 py-6 text-[#f2f2f2]" />
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}