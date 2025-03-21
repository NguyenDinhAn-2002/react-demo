import { useState, useEffect } from "react";
import { getAllUsers, getCurrentUser } from "../../api/authApi";
import { followUser, getFollowing } from "../../api/followApi";
import { Typography, Avatar } from "@mui/material";
import "./rightBar.scss";
const RightBar = () => {
  const [suggestedUsers, setSuggestedUsers] = useState<
    { id: number; username: string }[]
  >([]);
  const [followingList, setFollowingList] = useState<
    { id: number; username: string }[]
  >([]);

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) return;

    const allUsers = getAllUsers();
    const followingIds = getFollowing(user.id);

    const notFollowedUsers = allUsers.filter(
      (u) => !followingIds.includes(u.id) && u.id !== user.id,
    );
    setSuggestedUsers(notFollowedUsers);

    const followedUsers = allUsers.filter((u) => followingIds.includes(u.id));
    setFollowingList(followedUsers);
  }, []);

  const handleFollow = (userId: number) => {
    const user = getCurrentUser();
    if (!user) return alert("Bạn cần đăng nhập!");

    followUser(user.id, userId);
    setSuggestedUsers((prev) => prev.filter((u) => u.id !== userId));
    setFollowingList((prev) => [
      ...prev,
      suggestedUsers.find((u) => u.id === userId)!,
    ]);
  };

  const handleDismiss = (userId: number) => {
    setSuggestedUsers((prev) => prev.filter((u) => u.id !== userId));
  };

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <Typography variant="h6" fontWeight="bold">
            Người bạn có thể biết
          </Typography>

          {suggestedUsers.length === 0 ? (
            <div>
              <span>Không còn ai để gợi ý.</span>
            </div>
          ) : (
            suggestedUsers.map((user) => (
              <div key={user.id} className="user">
                <div className="userInfo">
                  <Avatar src="" alt="" />
                  <span>{user.username}</span>
                </div>
                <div className="buttons">
                  <button onClick={() => handleFollow(user.id)}>Follow</button>
                  <button onClick={() => handleDismiss(user.id)}>
                    Dismiss
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="item">
          <Typography variant="h6" fontWeight="bold">
            Đang theo dõi
          </Typography>

          {followingList.length === 0 ? (
            <span>Bạn chưa follow ai.</span>
          ) : (
            followingList.map((user) => (
              <div key={user.id} className="user">
                <div className="userInfo">
                  <Avatar />
                  <span>{user.username}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
