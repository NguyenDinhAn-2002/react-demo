import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import "../../styles/style.scss";

const DefaultLayout = () => {
  return (
    <div className="theme-light">
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;