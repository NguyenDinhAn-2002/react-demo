import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext) as { user: { username: string; password: string }; logout: () => void };
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.username || !user.password) {
      navigate("/login");  
    }
  }, [navigate, user]);  

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {user.username && user.password && (
        <div className="auth-container">
          <h2 className="heading">Dashboard</h2>
          <p>Xin chào, {user.username}!</p>
          <button className="form__submit" onClick={handleLogout}>Đăng xuất</button>
        </div>
      )}
    </>
  );
};

export default Dashboard;
