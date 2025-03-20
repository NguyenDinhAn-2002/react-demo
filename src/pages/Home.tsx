import LeftBar from "../components/LeftBar/LeftBar";
import Footer from "../components/Footer";
import AddPost from "../components/AddPost/AddPost";
import PostList from "../components/PostList/PostList";
import Navbar from "../components/Navbar/Navbar";
import Stack from "@mui/material/Stack";
import Rightbar from "../components/RightBar/Rightbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="center">
        <LeftBar />
        <Stack spacing={2} sx={{ flex: 3, maxWidth: "60%" }}>
          <PostList />
        </Stack>
        <Rightbar />
          <AddPost />
      </Stack>
      <Footer />
    </>
  );
};

export default Home;
