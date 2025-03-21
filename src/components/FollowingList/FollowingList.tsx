import { useState, useEffect } from "react";
import { getFollowing, followUser, unfollowUser } from "../../api/followApi";
import { getCurrentUser, getAllUsers } from "../../api/authApi";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";

const FollowingList = () => {
  const [following, setFollowing] = useState<number[]>([]);
  const [users, setUsers] = useState<{ id: number; username: string }[]>([]);

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      const followingIds = getFollowing(user.id);
      setFollowing(followingIds);
    }
  }, []);

  useEffect(() => {
    const allUsers = getAllUsers();
    setUsers(allUsers.filter((u) => following.includes(u.id)));
  }, [following]);

  const handleFollowToggle = (targetUserId: number) => {
    const user = getCurrentUser();
    if (!user) return alert("Bạn cần đăng nhập!");

    let updatedFollowing;
    if (following.includes(targetUserId)) {
      unfollowUser(user.id, targetUserId);
      updatedFollowing = following.filter((id) => id !== targetUserId);
    } else {
      followUser(user.id, targetUserId);
      updatedFollowing = [...following, targetUserId];
    }

    setFollowing(updatedFollowing);
  };

  return (
    <div>
      <Typography variant="h6">Đang theo dõi</Typography>
      <List>
        {users.map((user) => (
          <ListItem
            key={user.id}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <ListItemText primary={user.username} />
            <Button
              variant={following.includes(user.id) ? "outlined" : "contained"}
              color="primary"
              onClick={() => handleFollowToggle(user.id)}
            >
              {following.includes(user.id) ? "Unfollow" : "Follow"}
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default FollowingList;
