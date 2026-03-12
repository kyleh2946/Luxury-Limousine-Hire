# Burbank Hire Cars - Premium Chauffeur & Luxury Car Hire Website

## Overview
Premium luxury chauffeur-driven car hire website built with Next.js App Router, TypeScript, and Tailwind CSS. Restructured for Azure Static Web Apps deployment. Targeting executives, CEOs, wedding clients, corporate accounts, and graduates on the Central Coast, NSW.

## Tech Stack
- **Framework**: Next.js 15 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Fonts**: Playfair Display (serif), Inter (sans) via next/font
- **Deployment Target**: Azure Static Web Apps
- **API**: Azure Functions v4 (Node.js)

## Project Structure (Azure Static Web Apps)
```
frontend/                   - Next.js frontend (app_location for Azure)
  src/
    app/
      layout.tsx            - Root layout with Navbar, Footer, fonts, SEO
      page.tsx              - Home page
      not-found.tsx         - 404 page
      globals.css           - Tailwind + CSS variables (dark luxury theme)
      about/page.tsx        - About Us page
      services/
        page.tsx            - Services overview
        [id]/page.tsx       - Service detail (statically generated)
      fleet/page.tsx        - Fleet page
      book/
        page.tsx            - Booking page
        booking-widget.tsx  - LimoAnywhere widget (client component)
      contact/
        page.tsx            - Contact/Enquiry page
        contact-form.tsx    - Form component (POST to /api/contact)
    components/
      navbar.tsx            - Transparent-to-solid navbar with scroll effect
      footer.tsx            - Footer with quick links + Book Online CTA
      services-grid.tsx     - Reusable services grid (fully clickable cards)
      ui/                   - shadcn/ui components
    lib/
      utils.ts              - cn() utility
      services-data.ts      - Service definitions
      fleet-data.ts         - Fleet/vehicle definitions
      testimonials-data.ts  - Testimonials
  public/
    images/
      hero-bg.png           - Hero background image
      fleet-showcase.jpg    - Fleet showcase image
      logo.webp             - Logo image
    sitemap.xml             - Static sitemap
    robots.txt              - Static robots.txt
  next.config.ts            - Static export config (output: "export", distDir: "dist")
  dist/                     - Static export output (output_location for Azure)

api/                        - Azure Functions API (api_location for Azure)
  src/functions/
    contact.js              - Contact form handler (POST /api/contact, SendGrid)
  host.json                 - Azure Functions host config
  package.json              - API dependencies (@azure/functions, @sendgrid/mail)
  local.settings.json       - Local dev settings (not committed)

staticwebapp.config.json    - Azure Static Web Apps routing/fallback config
start-dev.sh                - Replit dev startup script
```

## Azure Static Web Apps Config
```yaml
app_location: frontend
api_location: api
output_location: dist
```

## Key Files to Edit
- **Services**: `frontend/src/lib/services-data.ts`
- **Fleet/Vehicles**: `frontend/src/lib/fleet-data.ts` (3 categories: Stretch Limousines, People Movers, Car Transfers)
- **Testimonials**: `frontend/src/lib/testimonials-data.ts`
- **Contact info**: `frontend/src/components/footer.tsx`, `frontend/src/app/contact/page.tsx`, `frontend/src/app/page.tsx`
- **Business Schema**: `frontend/src/app/layout.tsx` (JSON-LD LocalBusiness)
- **Contact form**: `frontend/src/app/contact/contact-form.tsx` (POSTs to /api/contact)
- **Contact API**: `api/src/functions/contact.js` (SendGrid email handler)

## Environment Variables
- `NEXT_PUBLIC_LIMO_ANYWHERE_EMBED_URL` - LimoAnywhere embed URL (default: https://book.mylimobiz.com/v4/dcetrans). Used on /book page.
- `NEXT_PUBLIC_SITE_URL` - Canonical site URL for SEO
- `MAIL_API_KEY` - SendGrid API key (Azure Functions, set in Azure portal)
- `MAIL_TO` - Contact form recipient email (Azure Functions)
- `MAIL_FROM` - Contact form sender email (Azure Functions)

## Commands
- `bash start-dev.sh` - Start dev server on port 5000 (runs from frontend/)
- `cd frontend && npm run build` - Static export to frontend/dist/
- `cd frontend && npm start` - Start production server

## Design
- **Full dark luxury theme** - no white backgrounds anywhere
- Deep navy (#0f1324 / hsl 222 47% 11%) as primary background
- Charcoal gradient (hsl 222 35% 14% → 17%) for alternating sections
- Gold (#c4a45e / hsl 42 78% 48%) accents for buttons, icons, dividers
- Soft off-white text (hsl 40 20% 90%) instead of pure white
- Playfair Display for headings (italic style), Inter for body
- Navbar: transparent over hero, solid navy on scroll (data-scrolled attribute)
- Contact: (02) 4390 5043, bookings@burbankhirecars.com.au

## Booking CTAs
All "Book Now" buttons across the site navigate INTERNALLY to /book using Next.js Link. No external booking links exist outside the /book page. The /book page contains:
- BookingEmbed component with auto-retry iframe logic:
  - Phase 1 (loading): Gold spinner + "Loading booking system..." for 12s
  - Auto-retry: If no onLoad in 12s, remounts iframe with cache-buster (?t=timestamp)
  - Phase 2 (retrying): Spinner + "Retrying..." for 15s
  - Phase 3 (failed): "Booking is taking longer than usual." + "Try Loading Again" + "Open Booking in New Tab"
  - Manual retry: Forces new attempt with fresh cache-buster
  - On success: Iframe fades in, helper "Open in New Tab" link shown below

**Booking URL config**: Set via `NEXT_PUBLIC_LIMO_ANYWHERE_EMBED_URL` env var. Default: https://book.mylimobiz.com/v4/dcetrans

**Preconnect**: `<link rel="preconnect" href="https://book.mylimobiz.com" crossorigin>` in root layout.

## Key Files to Edit (Booking)
- **Booking widget**: `frontend/src/app/book/booking-widget.tsx`
- **Booking page**: `frontend/src/app/book/page.tsx`
- All other pages use `<Link href="/book">` — no booking URL constants needed

## Recent Changes
- 2026-03-11: Fixed Azure blank screen — two root causes:
  - Moved `staticwebapp.config.json` from repo root to `frontend/public/` so Next.js copies it to `dist/` (output_location); Azure SWA reads routing config from the output directory
  - Fixed `/_next/*` glob (only 1 level deep) to `/_next/**` (all nested paths); the shallow pattern caused JS/CSS requests like `/_next/static/chunks/...` to be rewritten to `/index.html`, breaking all scripts
  - Added immutable cache headers for `/_next/static/*` assets in the config
- 2026-03-11: Restructured for Azure Static Web Apps deployment:
  - Moved frontend to /frontend with static export (output: "export", distDir: "dist")
  - Created Azure Functions API at /api (contact form handler with SendGrid)
  - Contact form POSTs to /api/contact instead of server-side route
  - Converted sitemap.ts and robots.ts to static files in public/
  - Added staticwebapp.config.json for Azure routing
  - Changed booking env var to NEXT_PUBLIC_LIMO_ANYWHERE_EMBED_URL (client-side)
  - Removed old Express/Drizzle/Postgres boilerplate (server/, shared/, etc.)
- 2026-03-09: SEO overhaul for Central Coast NSW targeting:
  - Updated all meta titles/descriptions to include "Central Coast NSW" / "New South Wales"
  - Expanded LocalBusiness JSON-LD with address, named areaServed places
  - Added FAQPage JSON-LD schema to homepage and all service detail pages
  - Added hreflang en-AU and changed html lang to en-AU
- 2026-03-07: Replaced text logo in navbar with image logo (public/images/logo.webp)
- 2026-02-20: Full dark luxury theme overhaul, booking system with auto-retry iframe
