import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
