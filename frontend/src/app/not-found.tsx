import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="navy-gradient min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <p className="text-gold font-serif text-8xl font-bold mb-4">404</p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/60 mb-8">
          The page you are looking for doesn&apos;t exist or has been moved. 
          Let us get you back on track.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="gold" size="lg" asChild>
            <Link href="/" data-testid="link-404-home">
              Return Home
            </Link>
          </Button>
          <Button variant="gold-outline" size="lg" asChild>
            <Link href="/contact" data-testid="link-404-contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
