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
