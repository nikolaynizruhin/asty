'use client'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import Icon from './icon'

export default function Modal({ open, setOpen, children }: { open: boolean, children: React.ReactNode, setOpen: (open: boolean) => void }) {
  return (
    <Dialog className="relative z-20" open={open} onClose={setOpen}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-[rgba(31,31,31,0.96)] transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-20 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center text-center items-center">
          <DialogPanel
            transition
            className="relative transform overflow-hidden bg-[#1f1f1f] text-left transition-all sm:my-8 w-full max-w-md md:max-w-3xl xl:max-w-5xl px-4 py-14 md:px-24 md:py-12 xl:px-28 xl:py-20 data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
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
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
