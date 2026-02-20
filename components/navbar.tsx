"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useLang } from "@/lib/language-context"
import { ui } from "@/lib/translations"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, toggleLang } = useLang()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo + Brand Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Analityka XG logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-foreground">
            ANALITYKA<span className="text-primary">XG</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/#analysis"
            className="text-[13px] font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary"
          >
            {ui["nav.analysis"][lang]}
          </Link>
          <Link
            href="/blog"
            className="text-[13px] font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary"
          >
            {ui["nav.blog"][lang]}
          </Link>
          <Link
            href="/contact"
            className="text-[13px] font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary"
          >
            {ui["nav.contact"][lang]}
          </Link>

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-[11px] font-semibold tracking-widest text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            <span className={lang === "en" ? "text-primary" : ""}>EN</span>
            <span className="text-border/60">/</span>
            <span className={lang === "es" ? "text-primary" : ""}>ES</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <Link
              href="/#analysis"
              className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {ui["nav.analysis"][lang]}
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {ui["nav.blog"][lang]}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {ui["nav.contact"][lang]}
            </Link>
            <button
              onClick={toggleLang}
              className="flex w-fit items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-[11px] font-semibold tracking-widest text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <span className={lang === "en" ? "text-primary" : ""}>EN</span>
              <span className="text-border/60">/</span>
              <span className={lang === "es" ? "text-primary" : ""}>ES</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
