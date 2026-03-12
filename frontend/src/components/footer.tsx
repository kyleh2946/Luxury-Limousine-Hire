import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="mb-4">
              <span className="font-serif text-xl font-bold text-white tracking-widest uppercase leading-none block">
                Burbank
              </span>
              <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-medium leading-tight">
                Hire Cars
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Premium chauffeur-driven luxury car hire on the Central Coast.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/about" className="block text-sm text-white/50 hover:text-gold transition-colors" data-testid="link-footer-about">About</Link>
              <Link href="/fleet" className="block text-sm text-white/50 hover:text-gold transition-colors" data-testid="link-footer-fleet">Fleet</Link>
              <Link href="/services" className="block text-sm text-white/50 hover:text-gold transition-colors" data-testid="link-footer-services">Services</Link>
              <Link href="/contact" className="block text-sm text-white/50 hover:text-gold transition-colors" data-testid="link-footer-contact">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-4">Book Now</h4>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Ready to go? Book your luxury ride in seconds.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center justify-center h-10 px-6 text-xs font-semibold tracking-widest uppercase rounded-sm bg-gold text-navy-dark hover:bg-gold-light transition-colors"
              data-testid="button-footer-book"
            >
              Book Online
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              &copy; 2026 Burbank Hire Cars. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-xs text-white/30 hover:text-gold transition-colors uppercase tracking-wider">
                Privacy
              </Link>
              <Link href="/" className="text-xs text-white/30 hover:text-gold transition-colors uppercase tracking-wider">
                Terms
              </Link>
              <Link href="/sitemap.xml" className="text-xs text-white/30 hover:text-gold transition-colors uppercase tracking-wider">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
