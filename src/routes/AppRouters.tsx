import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, RouteGuard } from "./routes";
import { Fragment } from "react";
import DefaultLayout from "../layouts";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map(
          ({ path, component: Component, layout, requiresAuth }, index) => {
            const Layout = layout === null ? Fragment : layout || DefaultLayout;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <RouteGuard requiresAuth={requiresAuth}>
                    <Layout>
                      <Component />
                    </Layout>
                  </RouteGuard>
                }
              >
                <Route index element={<Component />} />
              </Route>
            );
          },
        )}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
