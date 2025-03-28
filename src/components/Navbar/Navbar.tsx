import { Typography, Avatar } from "@mui/material";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import CustomMenu from "../CustomMenu/CustomMenu";
import images from "../../assets/img";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
const Navbar = () => {
  const user = useAuth();
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const [confirmLogout, setConfirmLogout] = useState(false);
  const menuItems = [
    { label: "Hồ sơ của bạn", onClick: () => {navigate(`/profile/${user.user?.id}`)} },
    { label: "Đăng xuất", onClick: () => setConfirmLogout(true) },
  ];
  const handleLogout = () => {
    user.logout();
    setConfirmLogout(false);
    setOpenMenu(false);
  };
  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span>QNUwU</span>
          </Link>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Avatar
              src={images.logo}
              alt="Logo"
              sx={{ width: 50, height: 50 }}
            />
          </Link>
        </div>
        <div className="right">
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" }, fontSize: "0.9rem" }}
          >
            <span>Xin chào, {user.user?.username}</span>
          </Typography>
          <div className="user">
            <Avatar
              src={user.user?.avatar}
              onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                setAnchorEl(event.currentTarget);
                setOpenMenu(true);
              }}
              sx={{ width: 40, height: 40 }}
            />
            <CustomMenu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={() => setOpenMenu(false)}
              items={menuItems}
            />

            <ConfirmDialog
              open={confirmLogout}
              onClose={() => setConfirmLogout(false)}
              onConfirm={handleLogout}
              title="Xác nhận đăng xuất"
              content="Bạn có chắc chắn muốn đăng xuất không?"
              confirmText="Đăng xuất"
              cancelText="Hủy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
