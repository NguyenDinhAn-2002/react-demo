import { Link } from "react-router-dom";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { useAuth } from "../../contexts/AuthContext";
import images from "../../assets/img";
const bgStyle = {
  "--bg-image": `url(${images.bg})`,
} as React.CSSProperties;
const cx = classNames.bind(styles);

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const user = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    try {
      const authUser = await user.login(username, password);

      if (authUser) {
        setSuccess("Đăng nhập thành công!");
        setTimeout(() => {
          console.log("Navigating to /home");
          navigate("/home");
        }, 2000);
      } else {
        setError("Sai tên đăng nhập hoặc mật khẩu!");
      }
    } catch (err) {
      setError("Đã xảy ra lỗi khi đăng nhập!");
    }
  };

  return (
    <div className={cx("login")}>
      <div className={cx("card")}>
        <div className={cx("left")} style={bgStyle}>
          <h1>QNUwU</h1>
          <p>
            QNUwU-Trường Đại học Quy Nhơn (QNU) là một trường đại học công lập
            đa ngành tại TP. Quy Nhơn, tỉnh Bình Định. Thành lập năm 1977, QNU
            đào tạo từ bậc đại học đến sau đại học với các lĩnh vực như sư phạm,
            kinh tế, kỹ thuật, công nghệ thông tin, khoa học tự nhiên và xã hội.
            Trường có cơ sở vật chất hiện đại, đội ngũ giảng viên chất lượng, và
            là trung tâm nghiên cứu khoa học quan trọng của khu vực Nam Trung Bộ
            – Tây Nguyên.
          </p>
          <span>Chưa có tài khoản?</span>
          <Link to="/register">
            <button>Đăng ký</button>
          </Link>
        </div>
        <div className={cx("right")}>
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="error">{success}</Alert>}
          <h1>Đăng nhập</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
