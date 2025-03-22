import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { getUserById } from "../../api/authApi";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog";

const EditProfile = () => {
  const { user, updateUser } = useAuth();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [isChanged, setIsChanged] = useState(false); 

  useEffect(() => {
    if (!user || Number(id) !== user.id) {
      navigate(`/profile/${user?.id || ""}`);
      return;
    }

    const userData = getUserById(user.id);
    if (userData) {
      setPreview(userData.avatar);
    }
  }, [id, user, navigate]);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
      setIsChanged(true); 
    }
  };

  const handleSave = () => {
    if (!user || !isChanged) return;

    const avatarUrl = avatar ? URL.createObjectURL(avatar) : preview;
    updateUser({ ...user, avatar: avatarUrl });

    setIsChanged(false);
    navigate(`/profile/${user.id}`);

  };

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Card
        sx={{
          width: 400,
          p: 3,
          textAlign: "center",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Chỉnh sửa hồ sơ
          </Typography>
          <Box position="relative" display="inline-block">
            <Avatar
              src={preview}
              sx={{ width: 120, height: 120, margin: "auto" }}
            />
            <IconButton
              component="label"
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                backgroundColor: "white",
                boxShadow: 1,
              }}
            >
              <PhotoCameraIcon />
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleAvatarChange}
              />
            </IconButton>
          </Box>
          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpen(true)}
              sx={{ mr: 2 }}
              disabled={!isChanged} 
            >
              Lưu
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate(`/profile/${user?.id}`)}
            >
              Hủy
            </Button>
          </Box>
          <ConfirmDialog
            open={open}
            onClose={() => setOpen(false)}
            onConfirm={handleSave}
            title="Xác nhận lưu hồ sơ"
            content="Bạn có chắc chắn muốn lưu không?"
            confirmText="Lưu"
            cancelText="Hủy"
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default EditProfile;
