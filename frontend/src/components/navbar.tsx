"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/fleet", label: "Fleet" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 shadow-lg backdrop-blur-md"
          : ""
      }`}
      style={{ backgroundColor: scrolled ? "rgba(15, 19, 36, 0.98)" : "transparent" }}
      data-testid="navbar"
      data-scrolled={scrolled ? "true" : "false"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center" data-testid="link-home">
            <Image
              src="/images/logo.webp"
              alt="Burbank Hire Cars"
              width={180}
              height={48}
              className="h-10 sm:h-12"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-gold transition-colors tracking-wide uppercase"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/book"
              className="inline-flex items-center justify-center h-9 px-6 text-xs font-semibold tracking-widest uppercase rounded-sm border-2 border-gold bg-gold text-navy-dark hover:bg-transparent hover:text-gold transition-all"
              data-testid="button-nav-book"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-white/80 hover:text-gold transition-colors font-medium tracking-wide uppercase text-sm"
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center h-10 px-6 text-xs font-semibold tracking-widest uppercase rounded-sm border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark transition-all"
                data-testid="button-mobile-enquire"
              >
                Enquire
              </Link>
              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center h-10 px-6 text-xs font-semibold tracking-widest uppercase rounded-sm bg-gold text-navy-dark hover:bg-transparent hover:text-gold border-2 border-gold transition-all"
                data-testid="button-mobile-book"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
