import { useState, useEffect } from "react";
import { followUser, unfollowUser, getFollowing } from "../../api/followApi";
import { getCurrentUser } from "../../api/authApi";

const FollowButton = ({ targetUserId }: { targetUserId: number }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setIsFollowing(getFollowing(user.id).includes(targetUserId));
    }
  }, [targetUserId]);

  const handleFollow = () => {
    const user = getCurrentUser();
    if (!user) return alert("Bạn cần đăng nhập!");
    if (isFollowing) {
      unfollowUser(user.id, targetUserId);
    } else {
      followUser(user.id, targetUserId);
    }
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="buttons">
      {isFollowing ? (
        <button onClick={handleFollow}>UnFollow</button>
      ) : (
        <button style={{ backgroundColor: "#5271ff" }} onClick={handleFollow}>
          Follow
        </button>
      )}
    </div>
  );
};

export default FollowButton;
