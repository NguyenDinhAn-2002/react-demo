// Layouts
import DefaultLayout from "../layouts";

// Pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

const punlicRoutes = [
    {
        path: '/',
        component: Dashboard,
        layout: DefaultLayout,
    },
    {
        path: '/dashboard',
        component: Dashboard,
        layout: DefaultLayout,
    },
    {
        path: '/login',
        component: Login,
        layout: DefaultLayout,
    },
    {
        path: '/register',
        component: Register,
        layout: DefaultLayout,
    },
];

export { punlicRoutes };