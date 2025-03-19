import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Share.scss";

const Share = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={user.profilePic}
            alt=""
          />
          <input type="text" placeholder={`What's on your mind ${user.name}?`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className="item">
                <img src="" alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src="" alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src="" alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;