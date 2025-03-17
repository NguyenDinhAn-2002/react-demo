import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    
    if (!loggedInUser) {
      alert("Bạn chưa đăng nhập!");
      navigate("/login");  
    }
  }, [navigate]);  

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    alert("Bạn đã đăng xuất!");
    navigate("/login");
  };

  return (
    <div>
      <h2>Chào mừng, {JSON.parse(localStorage.getItem("loggedInUser") || "{}").username}!</h2>
      <button onClick={handleLogout}>Đăng xuất</button>
    </div>
  );
};

export default Dashboard;
