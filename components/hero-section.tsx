"use client"

import Link from "next/link"
import Image from "next/image"
import { useLang } from "@/lib/language-context"
import { ui } from "@/lib/translations"

export function HeroSection() {
  const { lang } = useLang()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image - Next.js optimized */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        quality={75}
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Subtle Cyan Glow at Bottom */}
      <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="glow-text text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {ui["hero.title.line1"][lang]}
          <br />
          <span className="text-primary">{ui["hero.title.line2"][lang]}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          {ui["hero.subtitle"][lang]}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#analysis"
            className="glow-cyan inline-flex items-center rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
          >
            {ui["hero.cta.analysis"][lang]}
          </Link>
          <Link
            href="#cta"
            className="inline-flex items-center rounded-lg border border-border bg-secondary/50 px-8 py-3.5 text-sm font-semibold tracking-wide text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
          >
            {ui["hero.cta.get"][lang]}
          </Link>
        </div>
      </div>
    </section>
  )
}
