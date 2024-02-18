'use client'

import { useState } from "react"
import CareerModal from "./career-modal"
import Button from "@/components/button"
import ThankModal from "@/components/thank-modal"

export default function CareerButton() {
  const [open, setOpen] = useState(false)
  const [openThank, setOpenThank] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        ДАВАЙТЕ ЗНАЙОМИТИСЬ
      </Button>
      <CareerModal open={open} setOpen={setOpen} setOpenThank={setOpenThank} />
      <ThankModal open={openThank} setOpen={setOpenThank} />
    </>
  )
}
