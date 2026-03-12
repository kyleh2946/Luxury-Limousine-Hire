import type { Metadata } from "next"
import { ServicesGrid } from "@/components/services-grid"

export const metadata: Metadata = {
  title: "Our Services — Chauffeur & Car Hire Central Coast NSW",
  description:
    "Luxury chauffeur services on the Central Coast, NSW. Executive travel, wedding car hire, airport transfers, parties, cruise ship transfers, and formal car hire across New South Wales.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | Burbank Hire Cars",
    description:
      "Luxury chauffeur services on the Central Coast, NSW. Executive travel, wedding car hire, airport transfers, parties, cruise ship transfers, and formal car hire.",
  },
}

export default function ServicesPage() {
  return (
    <>
      <section className="navy-gradient pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4">
            What We Offer
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 italic">
            Our Services
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            From boardrooms to ballrooms, airports to altars, Burbank Hire Cars delivers an
            uncompromising standard of luxury for every occasion.
          </p>
        </div>
      </section>

      <ServicesGrid />
    </>
  )
}
