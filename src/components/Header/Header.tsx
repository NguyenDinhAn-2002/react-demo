import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/slices/authSlice";
import { Layout as AntLayout } from "antd";
const { Header: AntHeader } = AntLayout;

const Header = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(isLogin);

  return (
    <AntHeader
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        padding: "0 16px",
        background: "gray",
      }}
    >
      {user ? (
        <>
          <span>Xin chào, {user.username}</span>
          <button onClick={() => dispatch(logout())}>Đăng xuất</button>
        </>
      ) : (
        <>
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link className="btn btn-primary" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-danger" to="/Register">
                Register
              </Link>
            </li>
          </ul>
        </>
      )}
    </AntHeader>
  );
};

export default Header;
