import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  User,
  getCurrentUser,
  login,
  logout,
  register,
  updateUser,
  followUser,
  unfollowUser,
} from "../api/authApi";

interface AuthContextType {
  user: User | null;
  validateLogin: (username: string, password: string) => Promise<boolean>;
  login: (username: string, password: string) => User | null;
  logout: () => void;
  register: (user: Omit<User, "id" | "followers" | "following">) => void;
  updateUser: (updatedUser: Partial<User>) => void;
  follow: (targetUserId: number) => void;
  unfollow: (targetUserId: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = getCurrentUser();
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const validateLogin = async (username: string, password: string) => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = storedUsers.find(
      (user: any) => user.username === username && user.password === password
    );
  
    return !!foundUser; 
  };
  
  const handleLogin = (username: string, password: string): User | null => {
    const loggedInUser = login(username, password);
    if (loggedInUser) {
      setUser(loggedInUser);
      return loggedInUser;
    }
    return null;
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  const handleRegister = (
    userData: Omit<User, "id" | "followers" | "following">,
  ) => {
    register(userData);
  };

  const handleUpdateUser = (updatedUser: Partial<User>) => {
    if (!user) return;
    updateUser({ id: user.id, ...updatedUser });
    const newUser = getCurrentUser();
    setUser(newUser);
  };

  const handleFollow = (targetUserId: number) => {
    followUser(targetUserId);
    const updatedUser = getCurrentUser();
    setUser(updatedUser);
  };

  const handleUnfollow = (targetUserId: number) => {
    unfollowUser(targetUserId);
    const updatedUser = getCurrentUser();
    setUser(updatedUser);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        validateLogin: validateLogin,
        login: handleLogin,
        logout: handleLogout,
        register: handleRegister,
        updateUser: handleUpdateUser,
        follow: handleFollow,
        unfollow: handleUnfollow,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
