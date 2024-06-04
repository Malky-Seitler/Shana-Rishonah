import ContactPage from "./components/Pages/Contact/ContactPage";
import FilteredPage from "./components/Pages/Trips/FilteredPage";
import HomePage from "./components/HomePageComponents/HomePage";
import ResourcesPage from "./components/Pages/Resources";
import HelpfulGuides from "./components/Pages/HelpfulGuides";

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
  { path: "/resources", element: <ResourcesPage /> },
  { path: "/helpful-guides", element: <HelpfulGuides /> },
];

export default AppRoutes;
