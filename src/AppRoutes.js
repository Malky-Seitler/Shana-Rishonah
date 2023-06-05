import ContactPage from "./components/ContactPage";
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
  {
    path: 'trips/:type',
    element: <HomePage /> 
  },
  {
    path: '/contact',
    element: <ContactPage />
  }
  // {
  //   path: '/counter',
  //   element: <Counter />
  // },
  // {
  //   path: '/fetch-data',
  //   element: <FetchData />
  // }
];

export default AppRoutes;
