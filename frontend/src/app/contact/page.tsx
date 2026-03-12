import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Contact Us — Chauffeur Hire Central Coast NSW",
  description:
    "Get in touch with Burbank Hire Cars for a personalised luxury transport quote. Enquire about executive, wedding, airport, or event car hire on the Central Coast, NSW.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Burbank Hire Cars",
    description:
      "Get in touch with Burbank Hire Cars for a personalised luxury transport quote.",
  },
}

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "(02) 4390 5043",
    href: "tel:+61243905043",
  },
  {
    icon: Mail,
    label: "Email",
    value: "bookings@burbankhirecars.com.au",
    href: "mailto:bookings@burbankhirecars.com.au",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Central Coast, NSW & surrounds",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "24 hours, 7 days a week",
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="navy-gradient pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 italic">
            Begin Your Journey
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            Whether you are planning a wedding, organising corporate travel, or
            need a tailored quote, we would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 charcoal-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-sm p-6 sm:p-8">
                <h2 className="font-serif text-2xl font-bold text-white mb-6">
                  Send an <span className="text-gold italic">Enquiry</span>
                </h2>
                <ContactForm variant="dark" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-sm p-6">
                <h3 className="font-serif text-lg font-semibold text-white mb-5">
                  Contact <span className="text-gold italic">Details</span>
                </h3>
                <ul className="space-y-5">
                  {contactDetails.map((detail) => (
                    <li key={detail.label} className="flex items-start gap-4" data-testid={`contact-${detail.label.toLowerCase()}`}>
                      <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center shrink-0">
                        <detail.icon className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-0.5">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-sm text-white hover:text-gold transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-sm text-white">{detail.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/[0.04] border border-white/[0.08] rounded-sm p-6">
                <h3 className="font-serif text-lg font-semibold text-white mb-3">
                  Service <span className="text-gold italic">Area</span>
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  We proudly service the entire Central Coast of New South Wales, Sydney, Newcastle,
                  the Hunter Valley, Blue Mountains, and beyond. For long-distance
                  transfers, please enquire for a tailored quote.
                </p>
              </div>

              <div className="bg-white/[0.04] border border-gold/20 rounded-sm p-6">
                <h3 className="font-serif text-lg font-semibold text-white mb-3">
                  Prefer to <span className="text-gold italic">Book Online?</span>
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">
                  If you know exactly what you need, use our online booking system
                  for instant availability and confirmation.
                </p>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center h-10 px-6 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm bg-gold text-navy-dark hover:bg-gold-light transition-colors"
                  data-testid="link-contact-book"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
