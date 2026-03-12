import Link from "next/link"
import { services } from "@/lib/services-data"
import { Briefcase, Heart, PartyPopper, Plane, Ship, GraduationCap } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  Heart,
  PartyPopper,
  Plane,
  Ship,
  GraduationCap,
}

export function ServicesGrid() {
  return (
    <section className="charcoal-gradient py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Luxury for <span className="italic">Every Occasion</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group relative bg-white/[0.03] border border-white/[0.08] rounded-sm p-7 sm:p-8 hover:border-gold/30 transition-all duration-300 cursor-pointer block"
                data-testid={`card-service-${service.id}`}
              >
                <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center mb-5">
                  {Icon && <Icon className="w-5 h-5 text-gold" />}
                </div>

                <h3 className="font-serif text-lg font-semibold text-white mb-3 italic group-hover:text-gold transition-colors">
                  {service.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                <span
                  className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold tracking-widest uppercase group-hover:text-gold-light transition-colors"
                  data-testid={`link-learn-more-${service.id}`}
                >
                  Learn More
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
