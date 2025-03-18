import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { punlicRoutes } from "./routes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {punlicRoutes.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout;

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
