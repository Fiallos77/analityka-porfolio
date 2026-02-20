"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { ArrowLeft, Send, CheckCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLang } from "@/lib/language-context"
import { ui } from "@/lib/translations"

export default function ContactPage() {
  const { lang } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <Navbar />

      <section className="bg-background pb-24 pt-32">
        <div className="mx-auto max-w-2xl px-6">
          {/* Back Link */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {ui["contact.back"][lang]}
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {ui["contact.title.prefix"][lang]}{" "}
              <span className="text-primary">{ui["contact.title.accent"][lang]}</span>
            </h1>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {ui["contact.description"][lang]}
            </p>
          </div>

          {submitted ? (
            <div className="glow-cyan rounded-xl border border-border bg-card p-10 text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-6 text-2xl font-bold text-foreground">
                {ui["contact.success.title"][lang]}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {ui["contact.success.description"][lang]}
              </p>
              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                {ui["contact.success.button"][lang]}
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-xl border border-border bg-card p-8 md:p-10"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  {ui["contact.name"][lang]}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder={ui["contact.name.placeholder"][lang]}
                  className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  {ui["contact.email"][lang]}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder={ui["contact.email.placeholder"][lang]}
                  className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>

              {/* Organization */}
              <div>
                <label
                  htmlFor="organization"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  {ui["contact.organization"][lang]}
                </label>
                <input
                  id="organization"
                  type="text"
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                  placeholder={ui["contact.organization.placeholder"][lang]}
                  className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  {ui["contact.message"][lang]}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={ui["contact.message.placeholder"][lang]}
                  className="w-full resize-none rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="glow-cyan flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
              >
                <Send className="h-4 w-4" />
                {ui["contact.submit"][lang]}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
