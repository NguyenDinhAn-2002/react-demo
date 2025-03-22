import {
  MoreHoriz,
  TextsmsOutlined,
  ShareOutlined,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";

import "./Post.scss";
import { Post, toggleLikePost } from "../../api/postApi";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../Comments/Comments";
import { getUserById } from "../../api/authApi"; 



const PostItem = ({
  post,
  currentUserId,
}: {
  post: Post;
  currentUserId: number;
}) => {
  const userInfo = getUserById(post.userId);
  const [commentOpen, setCommentOpen] = useState(false);
  const [likes, setLikes] = useState(
    Array.isArray(post.like) ? post.like.length : 0
  );

  const [isLiked, setIsLiked] = useState(
    Array.isArray(post.like) && post.like.includes(currentUserId)
  );
  const [commentsCount, setCommentsCount] = useState(
    Array.isArray(post.comment) ? post.comment.length : 0
  );

  const handleCommentAdded = () => {
    setCommentsCount((prevCount) => prevCount + 1);
  };

  const postDate = new Date(post.createdAt);
  const formattedDate = postDate.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const handleLike = () => {
    toggleLikePost(post.id, currentUserId);
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <>
      <div className="post">
        <div className="container">
          <div className="user">
                <Link
                  to={`/profile/${post.userId}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
            <div className="userInfo">
              <img src={userInfo?.avatar} alt="" />
              <div className="details">
                  <span className="name">{userInfo?.username}</span>
                <span className="date">{formattedDate}</span>
              </div>
            </div>
                </Link>
            <MoreHoriz />
          </div>
          <div className="content">
            <Typography variant="h6" fontWeight="bold">
              {post.title}
            </Typography>
            <p>{post.body}</p>
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                style={{ width: "100%", marginTop: "10px" }}
              />
            )}
          </div>
          <div className="info">
            <div className="item" onClick={handleLike}>
              {isLiked ? (
                <Favorite style={{ color: "red" }} />
              ) : (
                <FavoriteBorder />
              )}
              <span>{likes} Likes</span>
            </div>
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
              <TextsmsOutlined />
              <span>{commentsCount} Comments</span>
            </div>
            <div className="item">
              <ShareOutlined />
              Share
            </div>
          </div>
          {commentOpen && (
            <Comments postId={post.id} onCommentAdded={handleCommentAdded} />
          )}
        </div>
      </div>
    </>
  );
};

export default PostItem;
