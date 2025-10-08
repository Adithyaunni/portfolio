"use client"

import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { FiMenu, FiX } from "react-icons/fi"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contacts", label: "Contacts" },
]

export function SiteNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold hover:opacity-90 transition-opacity">
            {/* Brand */}
            <span className="text-primary">Portfolio</span>
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden hover:bg-secondary cursor-pointer transition-colors"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>

          <ul className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={cn("text-sm hover:text-primary transition-colors cursor-pointer")}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile */}
        <div
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows] duration-300 md:hidden",
            open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr] pb-0",
          )}
        >
          <ul className="min-h-0 overflow-hidden flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 hover:bg-secondary cursor-pointer transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default SiteNavbar
