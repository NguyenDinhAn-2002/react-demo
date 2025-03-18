import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import classNames from "classnames/bind";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

const Login = () => {
  const authContext = useContext(AuthContext);
  const { login } = authContext;

  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "password" && e.target.value.length < 6) {
      setErrorPassword("Mật khẩu phải có ít nhất 6 ký tự!");
      return;
    }
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setErrorPassword("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("mockUser") || "{}");

    if (storedUser.username === loginData.username && storedUser.password === loginData.password) {
      alert("Đăng nhập thành công!");
      login(loginData.username, loginData.password);
      navigate("/dashboard"); 
    } else {
      setError("Tên đăng nhập hoặc mật khẩu không đúng!");
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
          <span className={cx("error")}>{error}</span>
          <form>
            <input type="text" placeholder="Username" onChange={handleChange} />
            <input type="password" placeholder="Password" onChange={handleChange} />
            <span className={cx("error")}>{errorPassword}</span>
            <button onClick={handleSubmit}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
