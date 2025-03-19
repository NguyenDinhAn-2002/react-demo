import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/authSlice";
import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

const Login = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    console.log(isLogin);
    if (isLogin) navigate("/"); 
  }, [isLogin, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    const formData = new FormData(e.target as HTMLFormElement);
    const values = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const savedUser = users.find((u: { username: string; password: string }) =>
      u.username === values.username && u.password === values.password
    );

    if (savedUser) {
      console.log("Dang nhap thanh cong");
      dispatch(login(savedUser));
      navigate("/");
    } else {
      console.log("Sai tên đăng nhập hoặc mật khẩu!");
    }

  };

  return (
    <div className={cx("login")}>
      <div className={cx("card")}>
        <div className={cx("left")}>
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className={cx("right")}>
          <h1>Login</h1>
          
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name="username" />
            <input type="password" placeholder="Password" name="password"  />
            
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
