import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, TextField } from "@mui/material";
import images from "../../assets/imgs";
import { Snackbar } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

const cx = classNames.bind(styles);
const bgStyle = {
  "--bg-image": `url(${images.bg2})`,
} as React.CSSProperties;

const Register = () => {
  const { register } = useAuth();
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [success, setSuccess] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = { username: "", password: "", confirmPassword: "" };
    let isValid = true;
    if (!form.username.trim()) {
      newErrors.username = "Tên người dùng không được để trống!";
      isValid = false;
    } else if (!/^[a-zA-Z0-9_]{4,}$/.test(form.username)) {
      newErrors.username = "Tên người dùng phải từ 4 ký tự, không chứa ký tự đặc biệt!";
      isValid = false;
    }

    if (!form.password.trim()) {
      newErrors.password = "Mật khẩu không được để trống!";
      isValid = false;
    } else if (form.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự!";
      isValid = false;
    } 

    if (!form.confirmPassword.trim()) {
      newErrors.confirmPassword = "Vui lòng nhập lại mật khẩu!";
      isValid = false;
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu nhập lại không khớp!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await register(form.username, form.password);
      setSuccess("Đăng ký thành công!");
      setOpenSnackbar(true);

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err: any) {
      setErrors({ ...errors, username: err.message });
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
          <h1>Đăng ký</h1>
          <form onSubmit={handleSubmit}>
            <div className={cx("form-group")}>
              <TextField
                label="Username"
                variant="outlined"
                name="username"
                onChange={handleChange}
                value={form.username}
                error={!!errors.username}
                helperText={errors.username}
                fullWidth
              />
            </div>

            <div className={cx("form-group")}>
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                name="password"
                onChange={handleChange}
                value={form.password}
                error={!!errors.password}
                helperText={errors.password}
                fullWidth
              />
            </div>

            <div className={cx("form-group")}>
              <TextField
                type="password"
                label="Confirm Password"
                variant="outlined"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                autoComplete="off"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                fullWidth
              />
            </div>

            <button type="submit">Đăng ký</button>
          </form>
        </div>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          {success}
        </Alert>
      </Snackbar>

    </div>
  );
};

export default Register;