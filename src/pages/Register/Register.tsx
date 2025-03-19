import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Register.module.scss";

const cx = classNames.bind(styles);

const Register = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [errorPassword, setErrorPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "password" && e.target.value.length < 6) {
      setErrorPassword("Mật khẩu phải có ít nhất 6 ký tự!");
      return;
    }
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrorPassword("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("mockUser", JSON.stringify(user));
    navigate("/login"); 
  };

  return (
    <div className={cx("register")}>
      <div className={cx("card")}>
        <div className={cx("left")}>
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className={cx("right")}>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            {errorPassword && <span>{errorPassword}</span>}
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
