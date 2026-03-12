import type { Metadata } from "next"
import Link from "next/link"
import { BookingEmbed } from "./booking-widget"

const bookingUrl = process.env.NEXT_PUBLIC_LIMO_ANYWHERE_EMBED_URL || "https://book.mylimobiz.com/v4/dcetrans"

export const metadata: Metadata = {
  title: "Book Now — Luxury Car Hire Central Coast NSW",
  description:
    "Book your luxury chauffeur-driven car online on the Central Coast, NSW. Instant availability and secure booking with Burbank Hire Cars.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book Now | Burbank Hire Cars",
    description:
      "Book your luxury chauffeur-driven car online on the Central Coast, NSW. Instant availability and secure booking.",
  },
}

export default function BookPage() {
  return (
    <>
      <section className="navy-gradient pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Secure Your Journey
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 italic">
            Book Online
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed">
            Use our booking system below to check availability and reserve your
            luxury vehicle. For custom requests, please{" "}
            <Link href="/contact" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">
              contact us directly
            </Link>.
          </p>
        </div>
      </section>

      <section className="py-16 charcoal-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-sm p-4 sm:p-6 lg:p-10">
            <BookingEmbed bookingUrl={bookingUrl} />
          </div>
        </div>
      </section>
    </>
  )
}
