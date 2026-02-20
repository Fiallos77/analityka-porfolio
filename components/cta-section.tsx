"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLang } from "@/lib/language-context"
import { ui } from "@/lib/translations"

export function CTASection() {
  const { lang } = useLang()

  return (
    <section id="cta" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glow-cyan relative overflow-hidden rounded-xl border border-border bg-card p-10 text-center md:p-16">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 h-32 w-1/2 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {ui["cta.title.prefix"][lang]}{" "}
              <span className="text-primary">{ui["cta.title.accent"][lang]}</span>
              {ui["cta.title.suffix"][lang]}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {ui["cta.description"][lang]}
            </p>
            <Link
              href="/contact"
              className="glow-cyan mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
            >
              {ui["cta.button"][lang]}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
