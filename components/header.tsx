"use client"

import { Dialog, DialogPanel } from "@headlessui/react"
import { useState } from "react"
import Icon from "./icon"
import Link from "next/link"
import Logo from "./logo"
import SocialIcons from "./social-icons"
import { Navigation } from "@/lib/definitions"
import app from "@/config/app"
import company from "@/config/company"
import { removeWhitespaces } from "@/lib/utils"

const navigation: Navigation[] = [
  { name: "Проєкти", href: "/projects" },
  { name: "Про нас", href: "/#about" },
  { name: "Кар’єра", href: "/#career" },
  { name: "Контакти", href: "/contact" },
]

export default function Header({ isDark = false }: { isDark?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const close = () => setMobileMenuOpen(false)
  const open = () => setMobileMenuOpen(true)

  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <nav
        className="mx-auto flex max-w-137.5 items-center justify-between px-4 py-4 md:max-w-none md:px-8 lg:py-8 xl:px-16"
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
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${isDark ? "text-[#333]" : "text-[#f2f2f2]"}`}
            onClick={open}
          >
            <span className="sr-only">Open main menu</span>
            <Icon name="list" width={30} height={30} />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-16">
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-sm font-bold whitespace-nowrap ${isDark ? "text-[#333]" : "text-white"}`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={"tel:" + removeWhitespaces(company.phone)}
            className={`flex gap-2 text-sm font-bold whitespace-nowrap ${isDark ? "text-[#333]" : "text-white"}`}
          >
            <Icon name="phone" width={18} height={18} />
            {company.phone}
          </Link>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
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
                <Link
                  key={index}
                  href={item.href}
                  onClick={close}
                  className="block px-3 py-2 text-center text-2xl font-normal text-[#f2f2f2] hover:underline"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={"tel:" + removeWhitespaces(company.phone)}
                className="block px-3 py-2 text-center text-2xl font-normal text-[#f2f2f2] hover:underline"
              >
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
