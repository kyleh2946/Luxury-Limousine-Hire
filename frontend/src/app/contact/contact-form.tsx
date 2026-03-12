"use client"

import { useState } from "react"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { services } from "@/lib/services-data"

interface ContactFormProps {
  variant?: "light" | "dark"
}

export function ContactForm({ variant = "light" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const firstName = (formData.get("firstName") as string) || ""
    const lastName = (formData.get("lastName") as string) || ""
    const name = `${firstName.trim()} ${lastName.trim()}`.trim()
    const email = (formData.get("email") as string) || ""
    const phone = (formData.get("phone") as string) || ""
    const service = (formData.get("service") as string) || ""
    const messageText = (formData.get("message") as string) || ""

    const messageParts: string[] = []
    if (phone) messageParts.push(`Phone: ${phone}`)
    if (service) messageParts.push(`Service: ${service}`)
    if (messageText) messageParts.push(messageText)
    const message = messageParts.join("\n")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        setError(data.error || "Something went wrong. Please try again.")
        setSubmitting(false)
        return
      }

      setSubmitted(true)
    } catch {
      setError("Unable to send your enquiry. Please check your connection and try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const isDark = variant === "dark"

  const inputClasses = isDark
    ? "w-full h-11 px-4 text-sm rounded-sm border border-white/10 bg-white/[0.06] text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
    : "w-full h-11 px-4 text-sm rounded-sm border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors"

  const textareaClasses = isDark
    ? "w-full px-4 py-3 text-sm rounded-sm border border-white/10 bg-white/[0.06] text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors resize-none"
    : "w-full px-4 py-3 text-sm rounded-sm border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors resize-none"

  const selectClasses = isDark
    ? "w-full h-11 px-4 text-sm rounded-sm border border-white/10 bg-white/[0.06] text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none"
    : "w-full h-11 px-4 text-sm rounded-sm border border-border bg-background text-foreground focus:outline-none focus:border-gold/50 transition-colors appearance-none"

  if (submitted) {
    return (
      <div className="text-center py-12" data-testid="contact-success">
        <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-navy-dark" />
        </div>
        <h3 className={`font-serif text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-foreground"}`}>
          Thank You
        </h3>
        <p className={`max-w-md mx-auto ${isDark ? "text-white/60" : "text-muted-foreground"}`}>
          Your enquiry has been received. A member of our team will be in touch
          with you shortly to discuss your requirements.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
      {error && (
        <div className="flex items-start gap-3 p-4 rounded-sm border border-red-500/30 bg-red-500/10 text-red-300 text-sm" data-testid="contact-error">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          className={inputClasses}
          data-testid="input-first-name"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          className={inputClasses}
          data-testid="input-last-name"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className={inputClasses}
        data-testid="input-email"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        className={inputClasses}
        data-testid="input-phone"
      />

      <select
        name="service"
        className={selectClasses}
        data-testid="select-service"
        defaultValue=""
      >
        <option value="" disabled>Select a service</option>
        {services.map((s) => (
          <option key={s.id} value={s.id} data-testid={`option-service-${s.id}`}>
            {s.title}
          </option>
        ))}
      </select>

      <textarea
        name="message"
        placeholder="Tell us about your trip..."
        rows={4}
        className={textareaClasses}
        data-testid="textarea-message"
      />

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center h-12 px-8 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm bg-gold text-navy-dark hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        data-testid="button-submit-enquiry"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Enquiry"
        )}
      </button>
    </form>
  )
}
