import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import Post from "../Post/Post";
import { useMemo } from "react";

const PostList = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => b.createdAt - a.createdAt);
  }, [posts]);

  const postsList = sortedPosts.map((post) => <Post key={post.id} post={post} />);

  return <div>{posts.length > 0 ? postsList : <p>Chưa có bài viết nào.</p>}</div>;
};

export default PostList;
