import "./LeftBar.scss";
import {
  Group,
  Storefront,
  Feed,
  AccountCircle,
  PeopleAlt,
} from "@mui/icons-material";
import { useAuth } from "../../contexts/AuthContext";

function LeftBar() {
  const currentUser = useAuth();
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
            <span>Bài đăng</span>
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
