import { useParams } from "react-router-dom";
import { getUserById } from "../../api/authApi";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
  Divider,
} from "@mui/material";

const Profile = () => {
  const { user } = useAuth();
  const { id } = useParams<{ id: string }>();
  const profileUser = id ? getUserById(Number(id)) : user;

  if (!profileUser) {
    return (
      <Typography variant="h6" color="error" textAlign="center">
        Không tìm thấy người dùng.
      </Typography>
    );
  }

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Card
        sx={{
          width: 400,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <CardContent>
          <Avatar
            src={profileUser.avatar}
            sx={{ width: 120, height: 120, margin: "auto" }}
          />

          <Typography variant="h5" fontWeight="bold" mt={2}>
            {profileUser.username}
          </Typography>
          <Typography variant="body2" color="textSecondary" mt={1}>
            {profileUser.bio || "Chưa có tiểu sử."}
          </Typography>
          <Divider sx={{ my: 2 }} />

          <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
            <Typography variant="body1">
              <strong>Người theo dõi:</strong> {profileUser.followers.length}
            </Typography>
            <Typography variant="body1">
              <strong>Đang theo dõi:</strong> {profileUser.following.length}
            </Typography>
          </Stack>

          {user?.id === profileUser.id && (
            <Link
              to={`/edit-profile/${user.id}`}
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained" color="primary" sx={{ mt: 3 }}>
                Chỉnh sửa hồ sơ
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
