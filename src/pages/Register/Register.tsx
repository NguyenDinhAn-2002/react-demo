import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "@mui/material";
import { register } from "../../api/authApi";
import images from "../../assets/img";

const cx = classNames.bind(styles);
const bgStyle = {
  "--bg-image": `url(${images.bg2})`,
} as React.CSSProperties;
const Register = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.username.trim() ||
      !form.password.trim() ||
      !form.confirmPassword.trim()
    ) {
      setError("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    if (form.password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự!");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Mật khẩu nhập lại không khớp!");
      return;
    }

    try {
      await register({ username: form.username, password: form.password });
      setSuccess("Đăng ký thành công!");

      setTimeout(() => navigate("/login"), 2000);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className={cx("register")} style={bgStyle}>
      <div className={cx("card")}>
        <div className={cx("left")}>
          <h1>QNUwU</h1>
          <p>
            QNUwU – nơi kết nối, chia sẻ và bùng nổ sáng tạo! Cùng nhau xây dựng
            một cộng đồng năng động, nơi mọi ý tưởng được lắng nghe, mọi khoảnh
            khắc đều đáng nhớ và mọi cơ hội luôn rộng mở. Hãy tham gia ngay để
            không bỏ lỡ bất kỳ điều thú vị nào!
          </p>
          <span>Đã có tài khoản?</span>
          <Link to="/login">
            <button>Đăng nhập</button>
          </Link>
        </div>
        <div className={cx("right")}>
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">{success}</Alert>}
          <h1>Đăng ký</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              autoComplete="off"
            />

            <button type="submit">Đăng ký</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
