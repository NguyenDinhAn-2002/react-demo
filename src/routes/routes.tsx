// Layouts
import DefaultLayout from "../layouts";

// Pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

const punlicRoutes = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/home',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/login',
        component: Login,
        layout: null,
    },
    {
        path: '/register',
        component: Register,
        layout: null,
    },
];

export { punlicRoutes };