import { Routes, Route } from "react-router-dom";
import { RouteGuard } from "./routes";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

function App() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <RouteGuard requiresAuth={true}>
            <Home />
          </RouteGuard>
        }
      />
      <Route
        path="/login"
        element={
          <RouteGuard requiresAuth={false}>
            <Login />
          </RouteGuard>
        }
      />
      <Route
        path="/register"
        element={
          <RouteGuard requiresAuth={false}>
            <Register />
          </RouteGuard>
        }
      />
      {/* Các route khác */}
    </Routes>
  );
}

export default App;
