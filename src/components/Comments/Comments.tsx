import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  addCommentToPost,
  fetchPostComments,
  Comment,
} from "../../api/postApi";
import { getAllUsers, User } from "../../api/authApi"; 
import "./Comments.scss";
import images from "../../assets/img";

const Comments = ({
  postId,
  onCommentAdded,
}: {
  postId: number;
  onCommentAdded: () => void;
}) => {
  const { user } = useAuth();
  const [commentText, setCommentText] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [userMap, setUserMap] = useState<{ [key: number]: { username: string; avatar: string } }>({});

  const loadComments = async () => {
    const postComments = await fetchPostComments(postId);
    setComments(postComments.sort((a, b) => b.createdAt - a.createdAt));
  };

  useEffect(() => {
    loadComments();

    const users = getAllUsers();
    const map: { [key: number]: { username: string; avatar: string } } = {};

    users.forEach((u: User) => {
      map[u.id] = { username: u.username, avatar: u.avatar };
    });

    if (user) {
      map[user.id] = { username: user.username, avatar: user.avatar };
    }

    setUserMap(map);
  }, [postId, user]); 

  const handleAddComment = async () => {
    if (!commentText.trim()) return;
    if (!user) return alert("Vui lòng đăng nhập!");

    const newComment: Comment = {
      userId: user.id,
      text: commentText,
      createdAt: Date.now(),
    };

    setComments((prev) => [newComment, ...prev]);
    setCommentText("");

    await addCommentToPost(postId, user.id, commentText);
    onCommentAdded();
    loadComments(); 
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={user?.avatar || images.avatar1} alt="Avatar" />
        <input
          type="text"
          placeholder="Viết bình luận..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
        />
        <button onClick={handleAddComment}>Gửi</button>
      </div>

      {(showMore ? comments : comments.slice(0, 5)).map((comment, index) => {
        const userInfo = userMap[comment.userId] || { username: "Người dùng ẩn danh", avatar: images.avatar1 };
        const formattedDate = new Date(comment.createdAt).toLocaleString("vi-VN", {
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        return (
          <div key={index} className="comment">
            <img src={userInfo.avatar || images.avatar1} alt="Avatar" />
            <div className="info">
              <span>{userInfo.username}</span>
              <p>{comment.text}</p>
              <span>{formattedDate}</span>
            </div>
          </div>
        );
      })}

      {comments.length > 5 && (
        <span onClick={() => setShowMore(!showMore)}>
          {showMore ? "Ẩn bớt" : "Xem thêm..."}
        </span>
      )}
    </div>
  );
};

export default Comments;
