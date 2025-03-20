import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Navbar.scss";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Demo</span>
        </Link>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <HomeOutlinedIcon />
        </Link>
      </div>
      <div className="right">
        <div className="user">
          <img
            src={user.profilePic}
            alt=""
          />
          <span>{user.username}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;