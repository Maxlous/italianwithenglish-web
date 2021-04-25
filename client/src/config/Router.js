import Contact from "../pages/Contact";
import Exercises from "../pages/Exercises";
import Home from "../pages/Home";

export const routes = [
    {
        path: '/',
        exact: true,
        component: <Home />
    },
    {
        path: '/exercises',
        exact: false,
        component: <Exercises />
    },
    {
        path: '/contact',
        exact: false,
        component: <Contact />
    }
]