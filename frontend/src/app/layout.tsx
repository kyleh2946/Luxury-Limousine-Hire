import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import Script from "next/script"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://burbankhirecars.com.au"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Burbank Hire Cars | Premium Chauffeur & Luxury Car Hire Central Coast NSW",
    template: "%s | Burbank Hire Cars",
  },
  description:
    "Premium chauffeur-driven luxury car hire on the Central Coast, NSW. Stretch limousines, people movers & car transfers for weddings, airport pickups, parties, and corporate events. Book online today.",
  keywords: [
    "luxury car hire Central Coast",
    "chauffeur service Central Coast NSW",
    "wedding car hire Central Coast",
    "airport transfer Central Coast",
    "Central Coast limousine",
    "executive car hire NSW",
    "Burbank Hire Cars",
    "hire car Central Coast New South Wales",
    "stretch limousine Central Coast",
    "people mover hire NSW",
    "car transfer Central Coast Australia",
    "chauffeur driven car hire Gosford",
    "limousine hire Wyong",
    "wedding car hire NSW",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Burbank Hire Cars",
    title: "Burbank Hire Cars | Premium Chauffeur & Luxury Car Hire Central Coast NSW",
    description:
      "Premium chauffeur-driven luxury car hire on the Central Coast, NSW. Stretch limousines, people movers & car transfers for weddings, airport pickups, parties, and corporate events.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burbank Hire Cars | Premium Chauffeur & Luxury Car Hire Central Coast NSW",
    description:
      "Premium chauffeur-driven luxury car hire on the Central Coast, New South Wales.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-AU": siteUrl,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://book.mylimobiz.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://book.mylimobiz.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Burbank Hire Cars",
              description:
                "Premium chauffeur-driven luxury car hire on the Central Coast, New South Wales. Stretch limousines, people movers, and car transfers for weddings, airports, parties, corporate events, and formals.",
              url: siteUrl,
              telephone: "+61401222626",
              email: "bookings@burbankhirecars.com.au",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Central Coast",
                addressRegion: "NSW",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -33.4,
                longitude: 151.3,
              },
              areaServed: [
                { "@type": "Place", name: "Central Coast, NSW" },
                { "@type": "Place", name: "Gosford, NSW" },
                { "@type": "Place", name: "Wyong, NSW" },
                { "@type": "Place", name: "Terrigal, NSW" },
                { "@type": "Place", name: "Erina, NSW" },
                { "@type": "Place", name: "Woy Woy, NSW" },
                { "@type": "Place", name: "Tuggerah, NSW" },
                { "@type": "Place", name: "Umina Beach, NSW" },
                { "@type": "Place", name: "The Entrance, NSW" },
                { "@type": "Place", name: "Avoca Beach, NSW" },
                { "@type": "Place", name: "Sydney, NSW" },
                { "@type": "Place", name: "Newcastle, NSW" },
                { "@type": "Place", name: "Hunter Valley, NSW" },
              ],
              priceRange: "$$$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-17LNEPT0Y5"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-17LNEPT0Y5');
          `}
        </Script>
      </body>
    </html>
  )
}
