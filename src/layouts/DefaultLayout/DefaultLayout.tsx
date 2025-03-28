import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import RightBar from "../../components/RightBar";
import "../../styles/style.scss";
import LeftBar from "../../components/LeftBar";

const DefaultLayout = () => {
  return (
    <div className="theme-light">
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6, backgroundColor: "#f6f3f3" }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default DefaultLayout;
