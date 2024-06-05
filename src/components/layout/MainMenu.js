export const mainMenu = [
  {
    title: "Trips",
    id: 1,
    children: [
      { title: "Home", link: "/", active: "" },
      { title: "Day Trips", link: "/trips/day-trips", active: "day" },
      { title: "Date Night", link: "/trips/date-night", active: "date" },
      { title: "Quick Trips", link: "/trips/quick-trips", active: "quick" },
      {
        title: "Parks & Beaches",
        link: "/trips/parks-and-beaches",
        active: "parks",
      },
      { title: "logo" },
      {
        title: "At Home",
        link: "/trips/at-home",
        active: "home",
      },
      {
        title: "Restaurants",
        link: "/trips/restaurants",
        active: "food",
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
        active: "menu",
      },
      {
        title: "Tips & Tricks",
        link: "/dinner/tips-and-tricks",
        active: "dinnerTricks",
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
    active: "guides",
  },
];
