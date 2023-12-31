'use client'

import { useState } from "react"
import CareerModal from "./career-modal"
import Button from "@/src/components/button"
import ThankModal from "@/src/components/thank-modal"

export default function CareerButton({ children }: { children: string }) {
  const [open, setOpen] = useState(false)
  const [openThank, setOpenThank] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        {children}
      </Button>
      <CareerModal open={open} setOpen={setOpen} setOpenThank={setOpenThank} />
      <ThankModal open={openThank} setOpen={setOpenThank} />
    </>
  )
}
