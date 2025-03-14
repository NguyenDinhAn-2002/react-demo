import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      navigate("/dashboard"); 
    } else {
      setError("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit} className="auth-container">
      <h2 className="heading">Đăng nhập</h2>
      <span className="form__message--error">{error}</span>
      <div className="spacer"></div>
      <div className="form__group">
        <label htmlFor="username" className="form__label">Tên đăng nhập</label>
        <input id="username" className="form__input" type="text" name="username" placeholder="Tên đăng nhập" onChange={handleChange} required />
      </div>
      <div className="form__group">
        <label htmlFor="password" className="form__label">Mật khẩu</label>
        <input id="password" className="form__input" type="password" name="password" placeholder="Mật khẩu" onChange={handleChange} required />
        <span className="form__message--error">{errorPassword}</span>
      </div>
      <div className="form__group">
        <button className="form__submit" type="submit">Đăng nhập</button>
      </div>
      <p>Chưa có tài khoản? <a href="/register">Đăng ký</a></p>
    </form>
  );
};

export default Login;
