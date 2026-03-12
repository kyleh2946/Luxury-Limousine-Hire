import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, ChevronDown, ArrowRight } from "lucide-react"
import { services, getServiceById } from "@/lib/services-data"

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }))
}

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const service = getServiceById(id)
  if (!service) return { title: "Service Not Found" }

  const metaTitle = `${service.title} Central Coast NSW`
  const metaDescription = `${service.heroDescription.slice(0, 130)} Serving the Central Coast, NSW.`

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `/services/${service.id}`,
    },
    openGraph: {
      title: `${metaTitle} | Burbank Hire Cars`,
      description: metaDescription,
    },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params
  const service = getServiceById(id)

  if (!service) {
    notFound()
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://burbankhirecars.com.au"
  const otherServices = services.filter((s) => s.id !== service.id)

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.heroDescription,
      areaServed: {
        "@type": "Place",
        name: "Central Coast, New South Wales, Australia",
      },
      provider: {
        "@type": "LocalBusiness",
        name: "Burbank Hire Cars",
        url: siteUrl,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Central Coast",
          addressRegion: "NSW",
          addressCountry: "AU",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${siteUrl}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: `${siteUrl}/services/${service.id}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="navy-gradient pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gold">{service.title}</span>
          </nav>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 italic">
            {service.title}
          </h1>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            {service.heroDescription}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center h-12 px-10 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm border-2 border-gold bg-gold text-navy-dark hover:bg-transparent hover:text-gold transition-all"
              data-testid="button-service-book"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-10 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark transition-all"
              data-testid="button-service-enquire"
            >
              Enquire
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 charcoal-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className="font-serif text-2xl font-bold text-white mb-6">
                What&apos;s <span className="text-gold italic">Included</span>
              </h2>
              <ul className="space-y-3">
                {service.whatsIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`included-item-${i}`}>
                    <div className="w-5 h-5 rounded-full border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-sm text-white/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-white mb-6">
                Perfect <span className="text-gold italic">For</span>
              </h2>
              <ul className="space-y-3">
                {service.perfectFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`perfect-for-${i}`}>
                    <div className="w-5 h-5 rounded-full border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-sm text-white/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-white mb-6">
              Frequently Asked <span className="text-gold italic">Questions</span>
            </h2>
            <div className="space-y-3">
              {service.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white/[0.03] border border-white/[0.08] rounded-sm"
                  data-testid={`service-faq-${i}`}
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 font-medium text-white text-sm">
                    {faq.question}
                    <ChevronDown className="w-4 h-4 text-white/40 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-white/50 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="navy-gradient rounded-sm p-8 text-center mb-16 border border-white/[0.08]">
            <h2 className="font-serif text-2xl font-bold text-white mb-3 italic">
              Ready to Book?
            </h2>
            <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
              Secure your {service.title.toLowerCase()} experience today, or get in touch for a tailored quote.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center h-11 px-8 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm border-2 border-gold bg-gold text-navy-dark hover:bg-transparent hover:text-gold transition-all"
                data-testid="button-service-book-bottom"
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-11 px-8 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark transition-all"
                data-testid="button-service-enquire-bottom"
              >
                Enquire
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-white mb-6">
              Explore Our Other <span className="text-gold italic">Services</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherServices.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.id}`}
                  className="flex items-center justify-between gap-3 bg-white/[0.03] border border-white/[0.08] rounded-sm p-4 hover:border-gold/30 transition-colors group"
                  data-testid={`link-other-service-${s.id}`}
                >
                  <span className="text-sm font-medium text-white group-hover:text-gold transition-colors">
                    {s.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-gold transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
