export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  heroDescription: string;
  whatsIncluded: string[];
  perfectFor: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    id: "executive",
    title: "Executive Car Hire",
    shortDescription: "Arrive in commanding style with our premium executive fleet. Ideal for corporate travel, business meetings, and VIP transfers.",
    icon: "Briefcase",
    heroDescription: "Our executive car hire service on the Central Coast, NSW delivers an unrivalled standard of luxury and professionalism. Whether you are attending high-stakes meetings, hosting international clients, or requiring seamless airport-to-office transfers, our chauffeur-driven executive vehicles ensure you arrive composed, confident, and on time.",
    whatsIncluded: [
      "Late-model luxury sedans and SUVs",
      "Professional, suited chauffeur",
      "Complimentary bottled water and Wi-Fi",
      "Real-time flight monitoring for airport pickups",
      "Door-to-door service with meet-and-greet",
      "Flexible scheduling and on-call availability",
    ],
    perfectFor: [
      "Corporate executives and business professionals",
      "Client entertainment and VIP transfers",
      "Conference and event transportation",
      "Roadshows and multi-stop itineraries",
      "Confidential and discreet travel",
    ],
    faqs: [
      { question: "Can I book an executive car for a full day?", answer: "Absolutely. We offer hourly, half-day, and full-day executive packages tailored to your schedule." },
      { question: "Are your chauffeurs professionally trained?", answer: "Every chauffeur in our fleet is fully licensed, background-checked, and trained to the highest standard of hospitality and discretion." },
      { question: "Can I request a specific vehicle?", answer: "Yes. Subject to availability, you may request a particular vehicle from our executive fleet when making your booking." },
      { question: "Is Wi-Fi available in the vehicle?", answer: "Complimentary high-speed Wi-Fi is available in all our executive vehicles." },
    ],
  },
  {
    id: "wedding-car-hire",
    title: "Wedding Car Hire",
    shortDescription: "Make your special day truly unforgettable with our exquisite wedding car service. Elegance, grace, and impeccable attention to detail.",
    icon: "Heart",
    heroDescription: "Your wedding day deserves nothing less than perfection. Our luxury wedding car hire service on the Central Coast, NSW ensures every moment of your journey is wrapped in elegance. From the bridal arrival to the grand departure, our beautifully appointed vehicles and attentive chauffeurs create memories that last a lifetime.",
    whatsIncluded: [
      "Choice of luxury sedans, stretch limousines, or classic cars",
      "Ribbon and floral decoration to match your theme",
      "Red carpet arrival service",
      "Champagne for the bridal party",
      "Professional, immaculately presented chauffeur",
      "Multiple vehicle packages for bridal party and guests",
    ],
    perfectFor: [
      "Bridal party transport",
      "Ceremony to reception transfers",
      "Pre-wedding photo opportunities",
      "Engagement celebrations",
      "Anniversary milestones",
    ],
    faqs: [
      { question: "Can you decorate the car to match our wedding colours?", answer: "Of course. We offer bespoke ribbon and floral arrangements to perfectly complement your wedding theme." },
      { question: "How far in advance should we book?", answer: "We recommend booking at least 3 to 6 months in advance, especially for peak wedding season, to ensure availability." },
      { question: "Can we book multiple cars for the bridal party?", answer: "Absolutely. We offer multi-vehicle packages so your entire bridal party travels in style." },
      { question: "Is champagne included?", answer: "Yes, complimentary champagne is provided for the bridal couple as standard." },
    ],
  },
  {
    id: "parties-nights-out",
    title: "Parties & Nights Out",
    shortDescription: "Turn heads and arrive together. Our party limousines make every celebration an extraordinary event from the very first moment.",
    icon: "PartyPopper",
    heroDescription: "Why settle for ordinary when your night deserves extraordinary? Our party limousine service on the Central Coast, NSW transforms every celebration into an event. With spacious interiors, premium sound systems, ambient lighting, and an atmosphere designed for enjoyment, your night begins the moment you step inside.",
    whatsIncluded: [
      "Stretch limousines with party lighting and sound systems",
      "Spacious seating for groups of up to 16",
      "BYO-friendly vehicle environment",
      "Safe, professional chauffeur for the entire evening",
      "Flexible pick-up and drop-off scheduling",
      "Red carpet arrival at your venue",
    ],
    perfectFor: [
      "Birthday celebrations",
      "Bucks and hens nights",
      "Club and bar crawls",
      "Concert and event transfers",
      "End-of-year celebrations",
    ],
    faqs: [
      { question: "Can we bring our own drinks?", answer: "Yes, our party limousines are BYO-friendly. Glassware and ice are provided." },
      { question: "How many people can fit in a stretch limo?", answer: "Our stretch limousines comfortably seat up to 16 passengers depending on the vehicle." },
      { question: "Can the driver make multiple stops?", answer: "Absolutely. We can create a custom route with multiple pick-up and drop-off points." },
      { question: "Is there a minimum hire time?", answer: "Minimum hire is typically 3 hours for party bookings, but we are happy to tailor a package to your needs." },
    ],
  },
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    shortDescription: "Seamless transfers to Sydney and Newcastle Airport. Punctual, reliable, and stress-free.",
    icon: "Plane",
    heroDescription: "Begin or end your journey in complete comfort. Our luxury airport transfer service from the Central Coast, NSW eliminates the stress of travel with real-time flight monitoring, meet-and-greet service, and door-to-door convenience. Servicing Sydney and Newcastle airports, arrive at your terminal refreshed and relaxed.",
    whatsIncluded: [
      "Real-time flight tracking and monitoring",
      "Meet-and-greet at arrivals with name board",
      "Luggage assistance",
      "Complimentary 30-minute wait time",
      "Door-to-door luxury transport",
      "Available 24 hours, 7 days a week",
    ],
    perfectFor: [
      "Business travellers",
      "International arrivals and departures",
      "Family holidays",
      "Group transfers to and from the airport",
      "Early morning and late-night flights",
    ],
    faqs: [
      { question: "What if my flight is delayed?", answer: "We monitor all flights in real time and adjust our schedule accordingly. There is no additional charge for flight delays." },
      { question: "Do you provide child seats?", answer: "Yes, child seats and booster seats are available upon request at no extra charge." },
      { question: "Which airports do you service?", answer: "We service Sydney Airport and Newcastle Airport from anywhere on the Central Coast, NSW." },
      { question: "Is there a waiting charge?", answer: "We include 30 minutes of complimentary wait time for domestic flights and 60 minutes for international arrivals." },
    ],
  },
  {
    id: "cruise-ship-transfers",
    title: "Cruise Ship Transfers",
    shortDescription: "Seamless port transfers for cruise passengers. Arrive at the terminal relaxed and ready to embark on your voyage.",
    icon: "Ship",
    heroDescription: "Start your cruise holiday the moment you leave home. Our premium cruise ship transfer service on the Central Coast, NSW ensures a seamless, stress-free journey to and from the port. With generous luggage capacity, punctual scheduling, and luxury comfort, your voyage begins in first-class style.",
    whatsIncluded: [
      "Spacious vehicles with generous luggage capacity",
      "Door-to-port and port-to-door service",
      "Punctual scheduling aligned with embarkation times",
      "Professional chauffeur with luggage assistance",
      "Complimentary bottled water",
      "Group and family vehicle options",
    ],
    perfectFor: [
      "Couples embarking on romantic cruises",
      "Family cruise holidays",
      "Group cruise departures",
      "VIP cruise transfers",
      "Return port pickups after disembarkation",
    ],
    faqs: [
      { question: "How much luggage can you accommodate?", answer: "Our vehicles offer generous boot space. For larger groups, we can arrange a vehicle with additional capacity." },
      { question: "Do you service all cruise terminals?", answer: "Yes, we service all major cruise ship terminals including Sydney's Circular Quay and White Bay, with pickups from across the Central Coast, NSW." },
      { question: "Can you accommodate a large group?", answer: "Absolutely. We have vehicles of varying sizes and can arrange multiple cars for larger groups." },
      { question: "How early should I book for a cruise transfer?", answer: "We recommend booking at least two weeks in advance, particularly during peak cruise season." },
    ],
  },
  {
    id: "formal-car-hire",
    title: "Formal Car Hire",
    shortDescription: "School formals, galas, and black-tie events deserve a grand entrance. Our formal car hire ensures you arrive in spectacular fashion.",
    icon: "GraduationCap",
    heroDescription: "Every formal occasion on the Central Coast deserves a grand entrance. Whether it is a school formal, gala dinner, awards night, or black-tie event, our luxury formal car hire service in NSW ensures you arrive with presence and poise. Immaculate vehicles, professional chauffeurs, and an atmosphere of sophistication set the tone for an unforgettable evening.",
    whatsIncluded: [
      "Choice of luxury sedans, SUVs, or stretch limousines",
      "Red carpet arrival service",
      "Professional, suited chauffeur",
      "Ambient interior lighting for the perfect atmosphere",
      "Photo opportunity stops upon request",
      "Flexible scheduling for pre-event and post-event transport",
    ],
    perfectFor: [
      "School formals and proms",
      "Gala dinners and charity events",
      "Awards nights",
      "Black-tie functions",
      "Debutante balls",
    ],
    faqs: [
      { question: "Can we take photos with the car before the event?", answer: "Absolutely. We encourage it and can schedule extra time for photo opportunities." },
      { question: "What vehicles are available for formals?", answer: "We offer luxury sedans, SUVs, and stretch limousines. Choose the vehicle that best suits your group size and style." },
      { question: "Is there a minimum age requirement?", answer: "There is no minimum age for passengers. For school formals, we simply require a parent or guardian to make the booking." },
      { question: "Can you pick up from multiple addresses?", answer: "Yes, we offer multi-stop pick-ups and drop-offs to collect your group before the event." },
    ],
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
