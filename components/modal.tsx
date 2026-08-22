"use client"

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"
import Icon from "./icon"

export default function Modal({
  open,
  setOpen,
  children,
}: {
  open: boolean
  children: React.ReactNode
  setOpen: (open: boolean) => void
}) {
  return (
    <Dialog className="relative z-20" open={open} onClose={setOpen}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-[rgba(31,31,31,0.96)] transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />
      <div className="fixed inset-0 z-20 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center text-center">
          <DialogPanel
            transition
            className="relative w-full max-w-md transform overflow-hidden bg-[#1f1f1f] px-4 py-14 text-left transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:data-closed:translate-y-0 sm:data-closed:scale-95 md:max-w-3xl md:px-24 md:py-12 xl:max-w-5xl xl:px-28 xl:py-20"
          >
            <div className="absolute top-0 right-0 pt-4 pr-3 md:pt-8 md:pr-7">
              <button
                type="button"
                className="text-white outline-hidden"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close</span>
                <Icon
                  className="size-4 md:size-6"
                  name="x-lg"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
