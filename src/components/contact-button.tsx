'use client'

import { useState } from "react"
import Button from "./button"
import ContactModal from "./contact-modal"
import ThankModal from "./thank-modal"

export default function ContactButton({ children, isDark = false }: { children: string, isDark?: boolean }) {
  const [open, setOpen] = useState(false)
  const [openThank, setOpenThank] = useState(false)

  return (
    <>
      <Button isDark={isDark} onClick={() => setOpen(true)}>
        {children}
      </Button>
      <ContactModal open={open} setOpen={setOpen} setOpenThank={setOpenThank} />
      <ThankModal open={openThank} setOpen={setOpenThank} />
    </>
  )
}