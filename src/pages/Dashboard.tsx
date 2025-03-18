import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext) as { user: { username: string; password: string } };
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.username || !user.password) {
      navigate("/login");  
    }
  }, [navigate, user]);  

  return (
    <>
      {user.username && user.password ? (
        <div className="auth-container">
          <h2 className="heading">Dashboard</h2>
          <p>Xin chào, {user.username}!</p>
        </div>
      ): (
        <div className="auth-container">
          <h2 className="heading">Dashboard</h2>
          <p>Xin chào!</p>
          <p>Vui lòng <Link to="/login">đăng nhập</Link> để trải nghiệm.</p>
        </div>
      )}
    </>
  );
};

export default Dashboard;
