'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Icon from './icon'

export default function Modal({ open, setOpen, children }: { open: boolean, children: React.ReactNode, setOpen: (open: boolean) => void }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={setOpen}>
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

        <div className="fixed inset-0 z-20 w-screen overflow-y-auto">
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
              <Dialog.Panel className="relative transform overflow-hidden bg-[#1f1f1f] text-left transition-all sm:my-8 w-full max-w-md md:max-w-3xl xl:max-w-5xl px-4 py-14 md:px-24 md:py-12 xl:px-28 xl:py-20">
                <div className="absolute right-0 top-0 pr-3 pt-4 md:pr-7 md:pt-8">
                  <button
                    type="button"
                    className="text-white outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <Icon className="size-4 md:size-6" name="x-lg" width={24} height={24} />
                  </button>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
