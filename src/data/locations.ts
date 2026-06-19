export type Location = {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
};

export const locations: Location[] = [
  {
    name: "Ohana Care — Central Clinic",
    address: "12 Unity Avenue, Central Business District",
    phone: "+254 700 100 200",
    email: "central@ohanacareclinic.africa",
    hours: "Mon–Sat: 7:00am – 8:00pm · Sun: 9:00am – 4:00pm",
  },
  {
    name: "Ohana Care — Community Health Hub",
    address: "45 Baraka Road, Eastlands Community Centre",
    phone: "+254 700 100 201",
    email: "community@ohanacareclinic.africa",
    hours: "Mon–Sat: 7:00am – 7:00pm · Sun: Closed",
  },
  {
    name: "Ohana Care — Family Wellness Centre",
    address: "8 Mwangaza Street, Westgate Plaza",
    phone: "+254 700 100 202",
    email: "wellness@ohanacareclinic.africa",
    hours: "Mon–Fri: 8:00am – 6:00pm · Sat: 8:00am – 1:00pm",
  },
];

export const contactInfo = {
  phone: "+254 700 100 200",
  email: "hello@ohanacareclinic.africa",
  address: "12 Unity Avenue, Central Business District",
};
