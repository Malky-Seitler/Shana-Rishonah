export const mainMenu = [
  {
    title: "Trips",
    id: 1,
    active: "trips"
    , children: [
      { title: 'Home' },
      { title: "Day Trips", link: "/trips/day-trips", active: "day-trips" },
      { title: "Date Night", link: "/trips/date-night", active: "date-night" },
      {
        title: "Quick Trips",
        link: "/trips/quick-trips",
        active: "quick-trips",
      },
      {
        title: "Parks & Beaches",
        link: "/trips/parks-and-beaches",
        active: "parks-and-beaches",
      },
      {
        title: "At Home",
        link: "/trips/at-home",
        active: "at-home",
      },
      {
        title: "Restaurants",
        link: "/trips/restaurants",
        active: "restaurants",
      },
    ],
  },
  { title: "Resources", id: 2, link: "/resources", active: "resources" },
  {
    title: "Dinner",
    id: 3,
    active: "dinner",
    children: [
      { title: 'Home' },
      {
        title: "Menu Planning",
        link: "/dinner/menu-planning",
        active: "menu-planning",
      },
      {
        title: "Tips & Tricks",
        link: "/dinner/tips-and-tricks",
        active: "tips-and-tricks",
      },
      {
        title: "Cookbooks",
        link: "/dinner/cookbooks",
        active: "cookbooks",
      },
    ],
  },
  { title: "logo" },
  {
    title: "Helpful Guides",
    id: 4,
    link: "/helpful-guides",
    active: "helpful-guides",
  },
  { title: "Finances", id: 5, link: "/finances", active: "finances" },
];
