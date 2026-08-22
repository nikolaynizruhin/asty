"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

// The pixel snippet already tracks the first PageView when it runs, so only
// subsequent client navigations need one. Comparing against the last tracked
// path rather than counting effect runs keeps re-run effects from firing twice.
export default function PageViewTracker() {
  const pathname = usePathname()
  const lastTracked = useRef(pathname)

  useEffect(() => {
    if (lastTracked.current === pathname) {
      return
    }

    lastTracked.current = pathname

    window.fbq?.("track", "PageView")
  }, [pathname])

  return null
}
