import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";

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
    alert("Đăng ký thành công!");
    navigate("/login"); 
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <h2 className="heading">Đăng ký</h2>
      <div className="spacer"></div>
      <div className="form__group">
        <label htmlFor="username" className="form__label">Tên đăng nhập</label>
        <CustomInput id="username" className="form__input" type="text" name="username" placeholder="Tên đăng nhập" onChange={handleChange} required />
      </div>
      <div className="form__group">
        <label htmlFor="password" className="form__label">Mật khẩu</label>
        <CustomInput id="password" className="form__input" type="password" name="password" placeholder="Mật khẩu" onChange={handleChange} required />
        <span className="form__message--error">{errorPassword}</span>
      </div>
      <div className="form__group">
          <label htmlFor="gender" className="form__label">Giới tính</label>
          <div>
              <CustomInput type="radio" name="gender" className="form__input" value="male" />
              Nam
          </div>
          <div>
              <CustomInput type="radio" name="gender" className="form__input" value="female" />
              Nữ
          </div>
          <span className="form__message"></span>
      </div>
      <div className="form__group">
        <button className="form__submit" type="submit">Đăng ký</button>
      </div>
      <p>Đã tài khoản? <Link to="/login">Đăng nhập</Link></p>
    </form>
  );
};

export default Register;
