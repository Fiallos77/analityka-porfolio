"use client"

import Image from "next/image"
import { Twitter, Linkedin, Mail } from "lucide-react"
import { useLang } from "@/lib/language-context"
import { ui } from "@/lib/translations"

export function Footer() {
  const { lang } = useLang()

  return (
    <footer className="border-t border-border bg-[#0a0a0f]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt="Analityka XG logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain opacity-80"
              loading="lazy"
            />
            <span className="text-base font-bold tracking-tight text-foreground/80">
              ANALITYKA<span className="text-primary/80">XG</span>
            </span>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {ui["footer.description"][lang]}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border p-2.5 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border p-2.5 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:contact@analitykaxg.com"
              className="rounded-md border border-border p-2.5 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-4 border-t border-border/50 pt-6">
            <p className="text-xs tracking-wider text-muted-foreground/60">
              {"\u00A9"} {new Date().getFullYear()} Analityka XG.{" "}
              {lang === "en" ? "All rights reserved." : "Todos los derechos reservados."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
