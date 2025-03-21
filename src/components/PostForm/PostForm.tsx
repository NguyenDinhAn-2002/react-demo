import images from "../../assets/img";
import "./postForm.scss";
import { useState } from "react";
import { createPost } from "../../api/postApi";
import { getCurrentUser } from "../../api/authApi";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import { Alert } from "@mui/material"; 

const PostForm = ({ onPostCreated }: { onPostCreated: () => void }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);
  const [confirmPost, setConfirmPost] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertSeverity, setAlertSeverity] = useState<
    "success" | "warning" | "error" | "info" | undefined
  >(undefined);

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

  const handleSubmit = () => {
    if (!body) {
      setAlertMessage("Vui lòng nhập nội dung bài viết!");
      setAlertSeverity("warning");
      setTimeout(() => setAlertMessage(null), 5000);
      return;
    }

    const user = getCurrentUser();
    if (!user) {
      return;
    }

    createPost({
      id: 0,
      userId: user.id,
      username: user.username,
      title,
      body,
      image,
      like: [],
      comment: [],
      createdAt: Date.now(),
    });

    setAlertMessage("Đăng bài thành công!");
    setAlertSeverity("success");
    setTimeout(() => setAlertMessage(null), 5000);
    setTitle("");
    setBody("");
    setImage(undefined);
    onPostCreated();
  };

  return (
    <div className="postForm">
      <div className="container">
        <div className="top">
          <img src={images.avatar10} alt="adad" />
          <input
            type="text"
            placeholder="Tiêu đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="top">
          <input
            type="text"
            placeholder="Nghĩ gì vậy?"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
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
            <button onClick={() => setConfirmPost(true)}>Đăng bài</button>
          </div>
        </div>
        <div className="content">
          {image && (
            <img
              src={image}
              alt="Preview"
              style={{ width: "100%", marginTop: 10 }}
            />
          )}
        </div>

        {alertMessage && (
          <Alert severity={alertSeverity} sx={{ marginBottom: 2 }}>
            {alertMessage}
          </Alert>
        )}

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
