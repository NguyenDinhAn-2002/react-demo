import PostList from "../../components/PostList";
import { useState } from "react";
import "./Home.scss";
import PostForm from "../../components/PostForm";
const Home = () => {
  const [refresh, setRefresh] = useState(false);
  return (
    <>
      <div className="home">
        <PostForm onPostCreated={() => setRefresh(!refresh)} />
        <PostList refresh={refresh} />
      </div>
    </>
  );
};

export default Home;
