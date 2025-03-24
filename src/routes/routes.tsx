import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

// Layouts
import DefaultLayout from "../layouts/DefaultLayout";

interface RouteItem {
    path: string,
    component: React.ElementType,
    layout: React.ElementType | null,
    requireAuth: boolean
}

const publicRoutes: RouteItem[] = [
    { path: "/", component: Home, layout: DefaultLayout, requireAuth: true },
    { path: "/login", component: Login, layout: null, requireAuth: false },
    { path: "/register", component: Register, layout: null, requireAuth: false },
    { path: "/home", component: Home, layout: DefaultLayout, requireAuth: true },
];

const RouteGuard = ({ children, requireAuth }: { children: React.ReactNode, requireAuth: boolean }) => {
    const { user } = useAuth();

    if (requireAuth && !user) {
        return <Navigate to="/login" />;
    }

    if (!requireAuth && user) {
        return <Navigate to="/" />;
    }

    return children;
}

export { publicRoutes, RouteGuard };