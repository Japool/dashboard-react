import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const AdminTemplate = lazy(() =>
  import("../templates/AdminTemplate").then(({ AdminTemplate }) => ({
    default: AdminTemplate,
  }))
);

/***** Pages ****/

const Home = lazy(() =>
  import("../pages/Home").then(({ Home }) => ({ default: Home }))
);
const About = lazy(() =>
  import("../pages/About").then(({ About }) => ({ default: About }))
);
/*const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
*/
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <AdminTemplate />,
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/home", exact: true, element: <Home /> },
      { path: "/about", exact: true, element: <About /> },
      /*{ path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },*/
    ],
  },
];

export default ThemeRoutes;
