import ContactPage from "./components/ContactPage";
import FilteredPage from "./components/FilteredPage";
import HomePage from "./components/HomePage";

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
