import {
  Group,
  Storefront,
  Feed,
  AccountCircle,
  PeopleAlt,
} from "@mui/icons-material";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import "./LeftBar.scss";
function LeftBar() {
  const currentUser = useAuth();
  const navigate = useNavigate();
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <AccountCircle />
            <span>{currentUser?.user?.username}</span>
          </div>
          <div className="item">
            <Feed />
            <span onClick={() => navigate("/")}>Bài đăng</span>
          </div>
          <div className="item">
            <PeopleAlt />
            <span>Bạn bè</span>
          </div>
          <div className="item">
            <Group />
            <span>Nhóm</span>
          </div>
          <div className="item">
            <Storefront />
            <span>Marketplace</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default LeftBar;
