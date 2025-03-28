import { Link, useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
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
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<"success" | "error">("success");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const user = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setMessage("Vui lòng điền đầy đủ thông tin!");
      setSeverity("error");
      setOpenSnackbar(true);
      return;
    }
  
    try {
      const authUser = await user.validateLogin(username, password); 
  
      if (authUser) {
        setMessage("Đăng nhập thành công!");
        setSeverity("success");
        setOpenSnackbar(true);
  
        setTimeout(async () => {
          await user.login(username, password);
          navigate("/home");
        }, 2000);
      } else {
        setMessage("Sai tên đăng nhập hoặc mật khẩu!");
        setSeverity("error");
        setOpenSnackbar(true);
      }
    } catch (err) {
      setMessage("Đã xảy ra lỗi khi đăng nhập!");
      setSeverity("error");
      setOpenSnackbar(true);
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
