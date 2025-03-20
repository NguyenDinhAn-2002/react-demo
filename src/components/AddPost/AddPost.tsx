import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/slices/postSlice";
import { RootState } from "../../redux/store";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";
import {
  EmojiEmotions,
  PersonAdd,
  Image,
  VideoCameraBack,
  DateRange,
} from "@mui/icons-material";
const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginBottom: "20px",
});
const AddPost = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const resetPostForm = () => {
    setTitle("");
    setBody("");
  };
  console.log("rerender");

  const handlePost = () => {
    if (!body.trim()) return;
    if (!user) return;
    dispatch(addPost({ userId: user.id, title, body }));
    resetPostForm();
  };
  function stringAvatar(name: string) {
    if (!name) return {};

    const nameParts = name.trim().split(" ");
    if (nameParts.length === 1) {
      return {
        sx: { bgcolor: "#1976d2" },
        children: nameParts[0][0].toUpperCase(),
      };
    }

    return {
      sx: { bgcolor: "#1976d2" },
      children: `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase(),
    };
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%)", sm: 20 },
        }}
        onClick={handleOpen}
      >
        <Fab color="primary" aria-label="addIcon">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Tạo bài viết
          </Typography>
          <UserBox>
            <Avatar {...(user ? stringAvatar(user.username) : {})} />
            <Typography fontWeight={500} variant="body1">
              {user ? user.username : "Người dùng"}
            </Typography>
          </UserBox>

          <TextField
            id="post-title"
            name="title"
            sx={{ width: "100%", marginBottom: "10px" }}
            placeholder="Tiêu đề bài viết"
            variant="standard"
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            id="post-body"
            name="body"
            sx={{ width: "100%" }}
            multiline
            rows={3}
            placeholder="Bạn đang nghĩ gì?"
            variant="standard"
            value={body} 
            onChange={(e) => setBody(e.target.value)} 
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="Basic button group"
          >
            <Button onClick={handlePost}>Đăng bài</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;
