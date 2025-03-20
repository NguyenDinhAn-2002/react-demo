import Posts from "../../components/Posts";
import Share from "../../components/Share";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home