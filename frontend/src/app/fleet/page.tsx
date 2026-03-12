import type { Metadata } from "next"
import Link from "next/link"
import { Car } from "lucide-react"
import { vehicles } from "@/lib/fleet-data"

export const metadata: Metadata = {
  title: "Our Fleet — Luxury Vehicles Central Coast NSW",
  description:
    "Explore the Burbank Hire Cars fleet. Stretch limousines, people movers, and car transfers for every occasion on the Central Coast, NSW.",
  alternates: {
    canonical: "/fleet",
  },
  openGraph: {
    title: "Our Fleet | Burbank Hire Cars",
    description:
      "Explore the Burbank Hire Cars fleet. Stretch limousines, people movers, and car transfers for every occasion on the Central Coast, NSW.",
  },
}

export default function FleetPage() {
  return (
    <>
      <section className="navy-gradient pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Our Vehicles
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 italic">
            The Fleet
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            Each vehicle in our fleet is selected for its exceptional comfort,
            impeccable presentation, and the unrivalled experience it delivers.
          </p>
        </div>
      </section>

      <section className="py-16 charcoal-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white/[0.03] border border-white/[0.08] rounded-sm overflow-hidden flex flex-col sm:flex-row"
                data-testid={`card-fleet-${vehicle.id}`}
              >
                <div className="sm:w-64 md:w-72 flex-shrink-0 aspect-[4/3] sm:aspect-auto bg-navy-light relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Car className="w-16 h-16 text-gold/20" />
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 italic">
                    {vehicle.name}
                  </h2>
                  <p className="text-white/60 leading-relaxed mb-6">
                    {vehicle.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <Link
                      href="/book"
                      className="inline-flex items-center justify-center h-10 px-6 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm bg-gold text-navy-dark hover:bg-gold-light transition-colors"
                      data-testid={`button-fleet-book-${vehicle.id}`}
                    >
                      Book Now
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center h-10 px-6 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm border border-gold/40 text-gold hover:bg-gold hover:text-navy-dark transition-all"
                      data-testid={`button-fleet-enquire-${vehicle.id}`}
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
