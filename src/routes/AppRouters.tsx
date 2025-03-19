import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Layout from "../layout/Layout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
const AppRoutes = () => {
  const auth = useSelector((state: RootState) => state.auth.isLogin); 

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={auth ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        <Route path="home" element={auth ? <Home /> : <Navigate to="/login" />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
