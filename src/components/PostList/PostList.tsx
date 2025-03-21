import { useState, useEffect } from "react";

import "./PostList.scss";
import PostItem from "../Post";
import { fetchPosts, Post } from "../../api/postApi";
import { useAuth } from "../../contexts/AuthContext";

const PostList = ({ refresh }: { refresh: boolean }) => {
  const user = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(fetchPosts());
  }, [refresh]);

  return (
    <div className="posts">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          currentUserId={user?.user?.id || 0}
        />
      ))}
    </div>
  );
};

export default PostList;
