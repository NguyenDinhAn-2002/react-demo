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

  return <h2>Chào mừng, {JSON.parse(localStorage.getItem("loggedInUser") || "{}").username}!</h2>;
};

export default Dashboard;
