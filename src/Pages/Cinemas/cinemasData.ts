const cinemasData: {
  id: number,
  name: string,
  location: string,
  city: string,
  categories: string[],
}[] = [
  {
    id: 1,
    name: "San Stephano",
    location: "San Stephano Grand Plaza, Corniche Road",
    city: "Alexandria",
    categories: ["Regular", "Premium", "DBOX"]
  },
  {
    id: 2,
    name: "Madinaty",
    location: "Madinaty Entrance, Km 33 Cairo-Suez Road",
    city: "Cairo",
    categories: ["Regular", "Premium", "DBOX", "VIP"]
  },
  {
    id: 3,
    name: "Al Rehab",
    location: "Al Rehab City, New Cairo",
    city: "Cairo",
    categories: ["Regular", "Premium", "DBOX"]
  },
  {
    id: 4,
    name: "DownTown",
    location: "Downtown Mall, New Administrative Capital",
    city: "Cairo",
    categories: ["Regular",  "DBOX"]
  },
  {
    id: 5,
    name: "Dandy Mall",
    location: "Dandy Mega Mall, Km 28 Cairo-Alex Desert Road",
    city: "Giza",
    categories: ["Regular", "Premium"]
  },
  {
    id: 6,
    name: "Semoha",
    location: "Semoha District, Smouha Sporting Club",
    city: "Alexandria",
    categories: ["Balcone", "Regular", "VIP", "DBOX"]
  },
  {
    id: 7,
    name: "Nile View Banha",
    location: "Nile Corniche, Banha City",
    city: "Cairo",
    categories: ["Regular", "Premium", "Balcone"]
  }
];

export default cinemasData;
