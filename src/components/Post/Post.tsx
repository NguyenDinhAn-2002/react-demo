import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Favorite, FavoriteBorder, MoreVert, Share, Comment } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../../redux/slices/postSlice";
import { RootState } from "../../redux/store";
import { User, Post as PostType } from "../../redux/types";
import { useMemo } from "react";
import images from "../../assets/img";

const Post = ({ post }: { post: PostType }) => {
  const dispatch = useDispatch();
  const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
  const currentUser = useSelector((state: RootState) => state.auth.user);

  const handleLike = () => {
    if (!currentUser) return;
    dispatch(likePost({ postId: post.id, username: currentUser.username }));
  };

  const postDetails = useMemo(() => {
    const author = users.find((user) => user.id == post.userId);
    const postDate = new Date(post.createdAt);
    const formattedDate = postDate.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return { author, formattedDate };
  }, [post, users]);

  return (
    <Card sx={{ margin: 5, marginTop: 7 }}>
      <CardHeader
        avatar={<Avatar sx={{ width: 44, height: 44 }} src={images.avatar10}></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={postDetails.author?.username}
        subheader={postDetails.formattedDate}
      />
      <CardMedia
        component="img"
        height="300"
        image={images.img4}
        alt="Post image"
      />
     
      <CardContent>
      <Typography variant="h6" fontWeight="bold">
  {post.title}
</Typography>

        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleLike} aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checked={post.likes.includes(postDetails.author?.username || "")}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
          {post.likes.length}
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <IconButton aria-label="comment">
          <Comment />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
