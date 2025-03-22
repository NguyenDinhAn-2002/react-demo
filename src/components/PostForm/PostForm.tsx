import "./postForm.scss";
import { useState, useEffect } from "react";
import { createPost } from "../../api/postApi";
import { getCurrentUser } from "../../api/authApi";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import { Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";


const PostForm = ({ onPostCreated }: { onPostCreated: () => void }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);
  const [confirmPost, setConfirmPost] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ title?: string; body?: string }>({});
  const [alertSeverity, setAlertSeverity] = useState<
    "success" | "warning" | "error" | "info" | undefined
  >(undefined);
  const currentUser = useAuth();

  useEffect(() => {
    if (errors.title) {
      const timer = setTimeout(() => {
        setErrors((prev) => ({ ...prev, title: "", body: "" }));
      }, 3000);
  
      return () => clearTimeout(timer); 
    }
  }, [errors.title]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const validate = () => {
    const newErrors: { title?: string; body?: string } = {};
    if (!title.trim()) newErrors.title = "Vui lòng nhập tiêu đề!";
    if (!body.trim()) newErrors.body = "Vui lòng nhập nội dung bài viết!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePostClick = () => {
    if (validate()) {
      setConfirmPost(true);
    }
  };

  const handleSubmit = () => {
    const user = getCurrentUser();
    if (!user) return;

    createPost({
      id: 0,
      userId: user.id,
      title,
      body,
      image,
      like: [],
      comment: [],
      createdAt: Date.now(),
    });

    setConfirmPost(false);
    setAlertMessage("Đăng bài thành công!");
    setAlertSeverity("success");
    setConfirmPost(false);
    setTitle("");
    setBody("");
    setImage(undefined);
    setErrors({});
    onPostCreated();
  };

  return (
    <div className="postForm">
      <div className="container">
        <div className="top">
          <img src={currentUser?.user?.avatar} alt="avatar" />
          <input
            type="text"
            placeholder="Tiêu đề"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setErrors((prev) => ({ ...prev, title: "" }));
            }}
          />
        </div>
          {errors.title && <span className="error-text">{errors.title}</span>}

        <div className="top">
          <input
            type="text"
            placeholder="Nghĩ gì vậy?"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
              setErrors((prev) => ({ ...prev, body: "" }));
            }}
          />
        </div>
          {errors.body && <span className="error-text">{errors.body}</span>}

        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
            <label htmlFor="file">
              <div className="item">
                <span>Thêm ảnh</span>
                <CameraAltIcon />
              </div>
            </label>
          </div>
          <div className="right">
            <button onClick={handlePostClick}>Đăng bài</button>
          </div>
        </div>

        {image && (
          <img
            src={image}
            alt="Preview"
            style={{ width: "100%", marginTop: 10 }}
          />
        )}

        <Snackbar
          open={!!alertMessage}
          autoHideDuration={5000}
          onClose={() => setAlertMessage(null)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity={alertSeverity} onClose={() => setAlertMessage(null)}>
            {alertMessage}
          </Alert>
        </Snackbar>

        <ConfirmDialog
          open={confirmPost}
          onClose={() => setConfirmPost(false)}
          onConfirm={handleSubmit}
          title="Xác nhận đăng bài"
          content="Bạn có chắc chắn muốn đăng bài không?"
          confirmText="Đăng bài"
          cancelText="Hủy"
        />
      </div>
    </div>
  );
};

export default PostForm;
