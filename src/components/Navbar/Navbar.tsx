import {
  AppBar,
  Avatar,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Mail from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/slices/authSlice";
const Search = styled("div")({
  backgroundColor: "white",
  padding: "0px 10px",
  borderRadius: "5px",
  width: "40%",
});
const Icons = styled("div")({
  gap: "20px",
  alignItems: "center",
});
const UserBox = styled("div")({
  gap: "10px",
  alignItems: "center",
});
const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(isLogin);
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#427fed" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          QNUwU
        </Typography>
        <PetsIcon sx={{ display: { xs: "flex", sm: "none" } }} />
        <Search>
          {" "}
          <InputBase placeholder="Tìm kiếm..." />{" "}
        </Search>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" }, fontSize: "0.9rem" }}
        >
          Xin chào,{user?.username}
        </Typography>

        <Icons sx={{ display: { sm: "flex", xs: "none" } }}>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
              setAnchorEl(event.currentTarget);
              setOpen(true);
            }}
            sx={{ width: 44, height: 44 }}
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRWHUlglb3rvNRICOL2fGg5JtijTgjPAMzCtJYIthlsCxDtxIXS"
          />
        </Icons>
        <UserBox sx={{ display: { xs: "flex", sm: "none" } }}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRWHUlglb3rvNRICOL2fGg5JtijTgjPAMzCtJYIthlsCxDtxIXS"
          />
          <Typography variant="h6">QNUwU</Typography>
        </UserBox>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          anchorEl={anchorEl}
          onClose={() => {
            setOpen(false);
          }}
        >
          <MenuItem>{user?.username}</MenuItem>
          <MenuItem>Hồ sơ của bạn</MenuItem>
          <MenuItem onClick={() => dispatch(logout())}>Đăng xuất</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
