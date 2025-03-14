import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("mockUser") || "{}");

    if (storedUser.username === loginData.username && storedUser.password === loginData.password) {
      alert("Đăng nhập thành công!");
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      navigate("/dashboard"); 
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-container">
      <h2>Đăng nhập</h2>
      <input type="text" name="username" placeholder="Tên đăng nhập" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Mật khẩu" onChange={handleChange} required />
      <button type="submit">Đăng nhập</button>
      <p>Chưa có tài khoản? <a href="/register">Đăng ký</a></p>
    </form>
  );
};

export default Login;
