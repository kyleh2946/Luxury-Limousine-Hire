export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Eric Smith",
    role: "CEO - Wyong, NSW",
    quote: "I have used Burbank Hire Cars for a few company events. Drivers are always on-time and professional.",
    rating: 5,
  },
  {
    name: "Jane Watts",
    role: "Director - Tuggerah, NSW",
    quote: "On-time and very professional. Their cars are always spotless! A truly premium experience.",
    rating: 5,
  },
  {
    name: "Jeremy Mitchell",
    role: "Executive Assistant - Newcastle, NSW",
    quote: "There is nothing like walking out of the airport from a long flight home and right into one of your cars.",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "Wedding Client - Gosford, NSW",
    quote: "From the moment the car arrived, everything was perfect. The chauffeur was immaculately presented and the champagne was a beautiful touch.",
    rating: 5,
  },
  {
    name: "Rebecca Torres",
    role: "Event Coordinator - Sydney, NSW",
    quote: "We booked a party limo for a corporate function and it was the highlight of the evening. The interior was incredible and the driver was so accommodating.",
    rating: 5,
  },
];
