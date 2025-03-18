import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { punlicRoutes } from "./routes";
import { Fragment } from "react";
import DefaultLayout from "../layouts";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {punlicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;

          if (route.layout) {
              Layout = route.layout;
          } else if (route.layout === null) {
              Layout = Fragment;
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={<Layout><Page /></Layout>}
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
