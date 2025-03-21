import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  addCommentToPost,
  fetchPostComments,
  Comment,
} from "../../api/postApi";
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

  useEffect(() => {
    const loadComments = async () => {
      const postComments = await fetchPostComments(postId);
      setComments(postComments.sort((a, b) => b.createdAt - a.createdAt));
    };
    loadComments();
  }, [postId]);

  const handleAddComment = () => {
    if (!commentText.trim()) return;
    if (!user) return alert("Vui lòng đăng nhập!");

    const newComment: Comment = {
      userId: user.id,
      username: user.username,
      text: commentText,
      createdAt: Date.now(),
    };

    setComments((prev) => [newComment, ...prev]);
    setCommentText("");
    onCommentAdded();

    addCommentToPost(postId, user.id, user.username, commentText);
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={images.avatar1} alt="" />
        <input
          type="text"
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
        />
        <button onClick={handleAddComment}>Send</button>
      </div>

      {(showMore ? comments : comments.slice(0, 5)).map((comment, index) => {
        const formattedDate = new Date(comment.createdAt).toLocaleString(
          "en-US",
          {
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          },
        );

        return (
          <div key={index} className="comment">
            <img src={images.avatar1} alt="" />
            <div className="info">
              <span>{comment.username}</span>
              <p>{comment.text}</p>
              <span>{formattedDate}</span>
            </div>
          </div>
        );
      })}

      {comments.length > 5 && (
        <span onClick={() => setShowMore(!showMore)}>
          {showMore ? "Ẩn bớt" : "Xem thêm...s"}
        </span>
      )}
    </div>
  );
};

export default Comments;
