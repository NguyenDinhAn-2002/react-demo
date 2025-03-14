import AppRoutes from "./routes/AppRouters";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles/auth.css";
const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
