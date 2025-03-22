import { useState, useEffect } from "react";
import { getAllUsers, User } from "../../api/authApi";
import { Typography, Avatar } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import "./rightBar.scss";

const RightBar = () => {
  const { user, follow, unfollow } = useAuth();
  const [suggestedUsers, setSuggestedUsers] = useState<User[]>([]);
  const [followingList, setFollowingList] = useState<User[]>([]);

  useEffect(() => {
    if (!user) return;

    const allUsers = getAllUsers();
    setSuggestedUsers(allUsers.filter((u) => !user.following.includes(u.id)));
    setFollowingList(allUsers.filter((u) => user.following.includes(u.id)));
  }, [user]);

  const handleFollow = (userId: number) => {
    follow(userId);
  };

  const handleUnfollow = (userId: number) => {
    unfollow(userId);
  };

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <Typography variant="h6" fontWeight="bold">
            Người bạn có thể biết
          </Typography>
          {suggestedUsers.length === 0 ? (
            <span>Không còn ai để gợi ý.</span>
          ) : (
            suggestedUsers.map((user) => (
              <div key={user.id} className="user">
                <div className="userInfo">
                  <Avatar src={user.avatar} alt={user.username} />
                  <span>{user.username}</span>
                </div>
                <button
                  className="follow"
                  onClick={() => handleFollow(user.id)}
                >
                  Follow
                </button>
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
                  <Avatar src={user.avatar} alt={user.username} />
                  <span>{user.username}</span>
                </div>
                <button
                  className="unfollow"
                  onClick={() => handleUnfollow(user.id)}
                >
                  Unfollow
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
