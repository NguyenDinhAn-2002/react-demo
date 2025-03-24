import { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface User {
  username: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => User | null;
  register: (username: string, password: string) => void;
  logout: () => void;
  validateLogin: (username: string, password: string) => Promise<boolean>;
}

const USERS_KEY = "users";
const AUTH_KEY = "auth_user";

const AuthContext = createContext<AuthContextType | null>(null);



export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem(AUTH_KEY) || "null");
    if (authUser) {
      setUser(authUser);
    }
  }, []);

  const handleLogin = (username: string, password: string) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    const authUser = users.find((user: User) => user.username === username && user.password === password);

    if (authUser) {
      setUser(authUser);
      return authUser;
    }

    return null;
  };

  const handleRegister = (username: string, password: string) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    const user = { username, password };
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  };

  const handleLogout = () => { 
    localStorage.removeItem(AUTH_KEY);
    setUser(null);
  };

  const validateLogin = async (username: string, password: string) => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = storedUsers.find(
      (user: User) => user.username === username && user.password === password
    );
  
    return !!foundUser; 
  };

  return (
    <AuthContext.Provider value={{ user, login: handleLogin, logout: handleLogout, register: handleRegister, validateLogin }}>
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
}