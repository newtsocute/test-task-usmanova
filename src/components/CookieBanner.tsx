"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

const STORAGE_KEY = "cookie-consent-dismissed"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [dismissing, setDismissing] = useState(false)

  useEffect(() => {
    // Reads an external system (localStorage) on mount to decide whether to
    // show the banner — SSR can't know this, so it can only happen here.
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "1") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setVisible(true)
      }
    } catch {
      // localStorage unavailable (e.g. privacy mode) — show banner anyway
      setVisible(true)
    }
  }, [])

  if (!visible) {
    return null
  }

  const handleDismiss = () => {
    setDismissing(true)
    try {
      localStorage.setItem(STORAGE_KEY, "1")
    } catch {
      // ignore write failures
    }
    window.setTimeout(() => setVisible(false), 300)
  }

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 right-4 z-50 max-w-[500px] rounded-2xl bg-white px-6 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out sm:right-auto",
        dismissing ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
      )}
      role="dialog"
      aria-live="polite"
    >
      <p className="text-[15px] leading-[1.4] text-black sm:text-base">
        Мы используем cookie-файлы. Это нужно для лучшей работы сайта.
        Продолжая пользоваться сайтом, вы соглашаетесь с этим.
      </p>
      <button
        type="button"
        onClick={handleDismiss}
        className="mt-4 rounded-full bg-[rgb(76,217,100)] px-6 py-2 font-semibold text-white transition-opacity hover:opacity-90"
      >
        OK
      </button>
    </div>
  )
}
