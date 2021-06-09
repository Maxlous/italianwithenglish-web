import Contact from "../pages/Contact";
import Exercises from "../pages/Exercises";
import Home from "../pages/Home";
import ExpressionTest from "../pages/ExpressionTest";
import WordTest from "../pages/WordTest";

export const routes = [
  {
    path: "/",
    exact: true,
    component: <Home />,
  },
  {
    path: "/exercises",
    exact: true,
    component: <Exercises />,
  },
  {
    path: "/exercises/words",
    exact: false,
    component: <WordTest />,
  },
  {
    path: "/exercises/expressions",
    exact: false,
    component: <ExpressionTest />,
  },
  {
    path: "/contact",
    exact: false,
    component: <Contact />,
  },
];
