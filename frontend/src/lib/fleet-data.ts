export interface Vehicle {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "stretch-limousines",
    name: "Seven Seat Stretch Limousines",
    description: "Weddings, parties, holiday transfers or travelling in style. Whatever the reason our seven-seat stretch limousines are just what you need.",
    image: "/images/fleet-limo.jpg",
  },
  {
    id: "people-movers",
    name: "People Movers",
    description: "Family going on a holiday? Or the office travelling for work? Our VW Multivan People Movers have you covered for all your transfers and transportation requirements.",
    image: "/images/fleet-people-mover.jpg",
  },
  {
    id: "car-transfers",
    name: "Car Transfers",
    description: "Traveling for work or want to avoid the hassle and cost of Airport parking? Our Holden Caprice car transfer is the elegant way to travel.",
    image: "/images/fleet-car-transfer.jpg",
  },
];
