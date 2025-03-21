import { Navigate } from "react-router-dom";
import DefaultLayout from "../layouts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home/Home";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";

interface RouteItem {
  path: string;
  component: React.ElementType;
  layout?: React.ElementType | null;
  requiresAuth: boolean;
}

const publicRoutes: RouteItem[] = [
  { path: "/", component: Home, layout: DefaultLayout, requiresAuth: true },
  { path: "/login", component: Login, layout: null, requiresAuth: false },
  { path: "/register", component: Register, layout: null, requiresAuth: false },
  { path: "/home", component: Home, layout: DefaultLayout, requiresAuth: true },
];

const RouteGuard = ({
  children,
  requiresAuth,
}: {
  children: React.ReactElement;
  requiresAuth: boolean;
}) => {
  const { user } = useAuth();

  if (requiresAuth && !user) {
    return <Navigate to="/login" replace />;
  }

  if (!requiresAuth && user) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export { publicRoutes, RouteGuard };
