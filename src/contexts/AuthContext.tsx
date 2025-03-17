import { createContext, useState, ReactNode } from "react";

interface AuthContextType {
  user: object | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const login = (username: string, password: string) => setUser({ username, password });
  const logout = () => setUser({ username: "", password: "" });

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
