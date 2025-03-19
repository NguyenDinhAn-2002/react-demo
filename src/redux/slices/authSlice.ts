import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../types";

const savedUser = JSON.parse(localStorage.getItem("currentUser") || "null");

const initialState: UserState = {
  user: savedUser,
  isLogin: !!savedUser, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (_, action: PayloadAction<{username: string; password: string}>) => {
      const savedUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");
      const existingUser = savedUsers.find((u) => u.username === action.payload.username);

      if (existingUser) {
        console.log("Tên đăng nhập đã tồn tại!");
        return;
      }

      const newUsers = [...savedUsers, action.payload];
      localStorage.setItem("users", JSON.stringify(newUsers));
      
      console.log("Đăng ký thành công!");
    },

    login: (state, action: PayloadAction<User>) => {
      const savedUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");
      const foundUser = savedUsers.find(
        (savedUser) =>
          savedUser.username === action.payload.username &&
          savedUser.password === action.payload.password
      );
      

      if (foundUser) {
        state.isLogin = true;
        state.user = foundUser;
        localStorage.setItem("currentUser", JSON.stringify(foundUser)); 
        console.log("Đăng nhập thành công!");
      } else {
        console.log("Sai tên đăng nhập hoặc mật khẩu!");
      }
    },

    logout: (state) => {
      state.isLogin = false;
      state.user = null;
      localStorage.removeItem("currentUser");
      console.log("Đăng xuất thành công!");
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
