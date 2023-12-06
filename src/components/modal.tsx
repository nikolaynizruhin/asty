'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Icon from './icon'

export default function Modal({ open, setOpen, title, children }: { open: boolean, title: string, children: React.ReactNode, setOpen: (open: boolean) => void }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[rgba(31,31,31,0.96)] transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center text-center items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden bg-[#1f1f1f] text-left transition-all sm:my-8 max-w-md md:max-w-3xl xl:max-w-5xl px-4 py-14 md:px-24 md:py-12 xl:px-28 xl:py-20">
                <div className="absolute right-0 top-0 pr-3 pt-4 md:pr-7 md:pt-8">
                  <button
                    type="button"
                    className="text-white"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <Icon className="w-4 h-4 md:h-6 md:w-6" name="x-lg" width={24} height={24} />
                  </button>
                </div>
                <div>
                  <Dialog.Title as="h3" className="text-3xl md:text-4xl font-bold text-white md:max-w-[350px] mb-9 xl:mb-20">
                    {title}
                  </Dialog.Title>  
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
