import ContactPage from "./components/Pages/Contact/ContactPage";
import FilteredPage from "./components/Pages/Trips/FilteredPage";
import HomePage from "./components/HomePageComponents/HomePage";

const AppRoutes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/trips", element: <FilteredPage /> },
  {
    path: "trips/:type",
    element: <FilteredPage />,
  },
  {
    path: "search-results",
    element: <FilteredPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
];

export default AppRoutes;
