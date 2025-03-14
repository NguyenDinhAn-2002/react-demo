import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("mockUser", JSON.stringify(user));
    alert("Đăng ký thành công!");
    navigate("/login"); 
  };

  return (
    <form onSubmit={handleSubmit} className="auth-container">
      <h2>Đăng ký</h2>
      <input type="text" name="username" placeholder="Tên đăng nhập" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Mật khẩu" onChange={handleChange} required />
      <button type="submit">Đăng ký</button>
    </form>
  );
};

export default Register;
