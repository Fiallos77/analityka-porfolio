"use client"

import { useLang } from "@/lib/language-context"
import { ui } from "@/lib/translations"

export function InstitutionalStrip() {
  const { lang } = useLang()

  return (
    <section className="relative border-t border-b border-border/50 bg-[#0a0a0f]">
      {/* Subtle Top Glow Line */}
      <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-5">
        <p className="text-center text-[10px] font-semibold tracking-[0.3em] text-muted-foreground uppercase sm:text-xs md:tracking-[0.4em]">
          {ui["strip.main"][lang]}
          <span className="mx-3 hidden text-primary/50 sm:inline">|</span>
          <br className="sm:hidden" />
          <span className="mt-1 block sm:mt-0 sm:inline">
            {ui["strip.spatial"][lang]}{" "}
            <span className="text-primary/40">&bull;</span>{" "}
            {ui["strip.match"][lang]}{" "}
            <span className="text-primary/40">&bull;</span>{" "}
            {ui["strip.performance"][lang]}
          </span>
        </p>
      </div>

      {/* Subtle Bottom Glow Line */}
      <div className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
