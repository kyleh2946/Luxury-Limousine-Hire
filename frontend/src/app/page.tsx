import Link from "next/link"
import Image from "next/image"
import { Shield, Clock, Car, Award, ChevronDown, Quote } from "lucide-react"
import { ServicesGrid } from "@/components/services-grid"
import { testimonials } from "@/lib/testimonials-data"
import { ContactForm } from "@/app/contact/contact-form"

const trustFeatures = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed, comprehensively insured, and compliant with all transport regulations.",
  },
  {
    icon: Award,
    title: "Professional Chauffeurs",
    description: "Impeccably presented, highly trained, and committed to the highest standard of service.",
  },
  {
    icon: Clock,
    title: "Always Punctual",
    description: "Real-time flight monitoring, precise scheduling, and a guarantee of on-time arrivals.",
  },
  {
    icon: Car,
    title: "Premium Vehicles",
    description: "Late-model luxury vehicles maintained to the most exacting standards of comfort and safety.",
  },
]

const faqs = [
  {
    question: "How do I book a vehicle?",
    answer: "You can book online through our booking system, submit an enquiry through our contact form, or call us directly on 0401 222 626.",
  },
  {
    question: "What areas do you service?",
    answer: "We service the entire Central Coast region of New South Wales, including Gosford, Wyong, Terrigal, Erina, Woy Woy, and The Entrance. We also cover Sydney, Newcastle, the Hunter Valley, and surrounding areas.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking as early as possible, particularly for weddings and major events. However, we can often accommodate last-minute requests subject to availability.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations made more than 48 hours in advance receive a full refund. Please contact us for specific details regarding your booking.",
  },
  {
    question: "Do you provide child seats?",
    answer: "Yes, child seats and booster seats are available upon request at no additional charge.",
  },
  {
    question: "Is there a minimum hire time?",
    answer: "Minimum hire times vary by service. Airport transfers have no minimum, while party and event bookings typically require a minimum of 3 hours.",
  },
]

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://burbankhirecars.com.au"

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="relative min-h-screen flex items-center overflow-hidden" data-testid="section-hero">
        <Image
          src="/images/hero-bg.png"
          alt="Luxury Mercedes Sprinter at hotel entrance"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/80 to-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-navy-dark/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-6">
              Premium Chauffeur Service
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 italic">
              Experience the{" "}
              <br className="hidden sm:block" />
              Art of Travel
            </h1>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
              Professional chauffeurs, luxury vehicles, and unmatched service on
              the Central Coast, NSW. Arrive in style, comfort, and elegance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center h-12 px-10 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm border-2 border-gold bg-gold text-navy-dark hover:bg-transparent hover:text-gold transition-all"
                data-testid="button-hero-book"
              >
                Book a Ride
              </Link>
              <Link
                href="/fleet"
                className="inline-flex items-center justify-center h-12 px-10 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm border-2 border-white/40 text-white hover:border-gold hover:text-gold transition-all"
                data-testid="button-hero-fleet"
              >
                View Fleet
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gold/40" />
        </div>
      </section>

      <section className="py-24 sm:py-28 navy-gradient" data-testid="section-about">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Welcome to Burbank Hire Cars
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-snug mb-6 italic">
            Where every journey is infused with professionalism and the personal touch of our experienced chauffeurs.
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-2xl mx-auto mb-8">
            As your trusted provider for luxury transport, we offer a fleet that includes
            everything from sleek sedans to spacious limousines, each equipped to
            deliver an exceptional travel experience.
          </p>
        </div>
      </section>

      <section className="py-24 charcoal-gradient" data-testid="section-trust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
              Why Choose <span className="italic">Burbank Hire Cars</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {trustFeatures.map((feature) => (
              <div key={feature.title} className="text-center" data-testid={`trust-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />

      <section className="navy-gradient py-24 sm:py-28" data-testid="section-fleet-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/fleet-showcase.jpg"
                alt="Luxury fleet vehicle"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent" />
            </div>

            <div>
              <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4">
                Our Fleet
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6 italic">
                Uncompromising Luxury
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                From our seven-seat stretch limousines to our spacious people movers, every vehicle in our
                fleet is meticulously maintained to ensure your comfort and safety. Experience the difference
                of true luxury travel.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                  <span className="text-white/80 text-sm">Seven Seat Stretch Limousines</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                  <span className="text-white/80 text-sm">People Movers</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                  <span className="text-white/80 text-sm">Car Transfers</span>
                </li>
              </ul>
              <Link
                href="/fleet"
                className="inline-flex items-center justify-center h-11 px-8 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark transition-all"
                data-testid="link-view-fleet"
              >
                View All Vehicles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 charcoal-gradient" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
              What Our Clients <span className="italic">Say</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/[0.08] rounded-sm p-8"
                data-testid={`card-testimonial-${i}`}
              >
                <Quote className="w-8 h-8 text-gold/40 mb-4" />
                <p className="text-white/80 text-sm leading-relaxed mb-6 font-serif italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm tracking-wide">
                    {t.name}
                  </p>
                  <p className="text-gold/70 text-xs tracking-wider uppercase mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 navy-gradient" data-testid="section-faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4">
              FAQ
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
              Frequently Asked <span className="italic">Questions</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white/[0.03] border border-white/[0.08] rounded-sm"
                data-testid={`faq-item-${i}`}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 font-medium text-white text-sm">
                  {faq.question}
                  <ChevronDown className="w-4 h-4 text-gold/60 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 text-sm text-white/50 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 charcoal-gradient" data-testid="section-contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-5">
                  <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4">
                    Contact Us
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6 italic">
                    Begin Your Journey
                  </h2>
                  <p className="text-white/60 text-base leading-relaxed mb-10">
                    Whether you need a quick transfer or a full-day hire, our team is ready to assist
                    you. Contact us today for a personalized quote.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 mb-10">
                    <div>
                      <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-1">Phone</p>
                      <a href="tel:+61401222626" className="text-white text-lg font-medium hover:text-gold transition-colors">
                        0401 222 626
                      </a>
                    </div>
                    <div>
                      <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-1">Email</p>
                      <a href="mailto:bookings@burbankhirecars.com.au" className="text-white text-lg font-medium hover:text-gold transition-colors">
                        bookings@burbankhirecars.com.au
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.04] border border-white/[0.08] rounded-sm p-6 sm:p-8">
                <h3 className="font-serif text-xl font-semibold text-white mb-6">
                  Quick Enquiry
                </h3>
                <ContactForm variant="dark" />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white/[0.04] border border-gold/20 rounded-sm p-6 sm:p-8 text-center" data-testid="section-book-online-panel">
                <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-5">
                  <Car className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3 italic">
                  Book Online
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Know what you need? Book online in seconds with instant availability and confirmation.
                </p>
                <Link
                  href="/book"
                  className="w-full inline-flex items-center justify-center h-12 px-8 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm bg-gold text-navy-dark hover:bg-gold-light transition-colors mb-3"
                  data-testid="button-contact-book-now"
                >
                  Book Now
                </Link>
                <Link
                  href="/fleet"
                  className="w-full inline-flex items-center justify-center h-11 px-8 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark transition-all"
                  data-testid="button-contact-view-fleet"
                >
                  View Fleet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
