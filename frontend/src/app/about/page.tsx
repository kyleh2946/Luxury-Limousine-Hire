import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Award, Clock, Car, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us — Luxury Car Hire Central Coast NSW",
  description:
    "Learn about Burbank Hire Cars — premium chauffeur-driven luxury car hire on the Central Coast, NSW. Licensed, insured, and committed to excellence across New South Wales.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Burbank Hire Cars",
    description:
      "Learn about Burbank Hire Cars — premium chauffeur-driven luxury car hire on the Central Coast, NSW.",
  },
}

const whyChooseUs = [
  {
    icon: Shield,
    title: "Licensed & Fully Insured",
    description: "We hold all required transport licences and comprehensive insurance, giving you total peace of mind on every journey.",
  },
  {
    icon: Award,
    title: "Experienced Chauffeurs",
    description: "Our drivers are professionally trained, impeccably presented, and committed to delivering the highest standard of service.",
  },
  {
    icon: Car,
    title: "Premium Fleet",
    description: "Late-model luxury vehicles — stretch limousines, people movers, and car transfers — maintained to exacting standards of comfort and safety.",
  },
  {
    icon: MapPin,
    title: "Central Coast & Beyond",
    description: "Based on the Central Coast of New South Wales, we service Sydney, Newcastle, the Hunter Valley, Blue Mountains, and surrounding regions.",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    description: "Whether it's a dawn airport transfer or a late-night event pickup, we're available around the clock, 7 days a week.",
  },
  {
    icon: Users,
    title: "Tailored to You",
    description: "From intimate executive transfers to large group events, every booking is personalised to your specific needs and preferences.",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="navy-gradient pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Who We Are
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 italic">
            About Burbank Hire Cars
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            A name synonymous with luxury, reliability, and professional chauffeur-driven car hire on the Central Coast, New South Wales, and beyond.
          </p>
        </div>
      </section>

      <section className="py-20 charcoal-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6 italic">
              Our Story
            </h2>
            <div className="space-y-5 text-white/60 text-base leading-relaxed">
              <p>
                Burbank Hire Cars was founded with a single purpose: to deliver a chauffeur experience that exceeds every expectation. Based on the Central Coast of New South Wales, we have built our reputation on punctuality, professionalism, and an unwavering commitment to luxury.
              </p>
              <p>
                Whether you are a CEO heading to a board meeting, a bride arriving at the ceremony of a lifetime, or a family catching a sunrise flight, we believe every passenger deserves the same exceptional standard of care and comfort.
              </p>
              <p>
                Our fleet of late-model luxury vehicles is meticulously maintained, and our chauffeurs are among the most experienced and professionally presented in the industry. From airport transfers and corporate travel to weddings, formals, and special celebrations, Burbank Hire Cars is the trusted choice for discerning clients across the Central Coast, Sydney, Newcastle, and the Hunter Valley.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 navy-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4">
              Our Promise
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
              Why Choose <span className="italic">Burbank Hire Cars</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-white/[0.03] border border-white/[0.08] rounded-sm p-7" data-testid={`about-feature-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-white mb-2 italic">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 charcoal-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 italic">
            Ready to Experience the Difference?
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Whether you need a quick transfer or a full-day hire, Burbank Hire Cars is here to deliver an exceptional experience, every time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center h-12 px-10 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm border-2 border-gold bg-gold text-navy-dark hover:bg-transparent hover:text-gold transition-all"
              data-testid="button-about-book"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-10 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark transition-all"
              data-testid="button-about-contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
