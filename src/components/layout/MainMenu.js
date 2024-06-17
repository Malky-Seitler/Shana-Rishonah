export const mainMenu = [
  {
    title: "Trips",
    id: 1,
    children: [
      { title: "Home", link: "/", active: "" },
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
      { title: "logo" },
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
    children: [
      { title: "Home", link: "/", active: "" },
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
      { title: "logo" },
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
    active: "helpful-guides ",
  },
];
