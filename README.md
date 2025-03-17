# 🚀 React Demo

## 📌 Giới thiệu 

Đây là một dự án React đơn giản phục vụ mục đích học tập.

### 🔹 Tính năng chính  
- **Trang Đăng nhập (Login):** Người dùng nhập tài khoản đã đăng ký để truy cập hệ thống.  
- **Trang Đăng ký (Register):** Lưu tài khoản vào Local Storage.  
- **Trang Dashboard:** Hiển thị tên người dùng và có nút Đăng xuất.  
- **Bảo vệ Dashboard:** Nếu chưa đăng nhập, sẽ bị điều hướng về trang Login.  

---

## 🔧 Cài đặt môi trường  

### 1️⃣ Cài đặt **Node.js** & **npm**  
Tải từ: [Node.js official site](https://nodejs.org/)  

### 2️⃣ Tạo dự án React bằng **Vite**  
```sh
npx create-vite@latest react-demo --template react-ts
cd react-demo
npm install
```

### 3️⃣ Chạy dự án  
```sh
npm run dev
```
📍 **Mở trình duyệt:** `http://localhost:5173/`  

---

## 📂 Cấu trúc thư mục  

```
react-demo/
   │── src/
   │   ├── contexts/       # Quản lý trạng thái toàn cục (AuthContext)
   │   ├── pages/          # Chứa các trang Login, Register, Dashboard
   │   ├── routes/         # Cấu hình Router
   │   ├── styles/         # Chứa file CSS
   │   ├── App.tsx         # Component chính
   │   ├── main.tsx        # Entry point của ứng dụng
   │── public/
   │── package.json
   │── tsconfig.json
   │── README.md
```

---

## 🔄 Luồng hoạt động  

1️⃣ Người dùng truy cập **Login** (hoặc bị chuyển hướng nếu chưa đăng nhập).  
2️⃣ Nếu chưa có tài khoản → Nhấn **Đăng ký** → Được chuyển sang **Login**.  
3️⃣ Nếu đăng nhập thành công → Chuyển đến **Dashboard**.  
4️⃣ Dashboard hiển thị tên tài khoản + nút **Logout**.  
5️⃣ Nhấn **Logout** → Quay về **Login**, phải đăng nhập lại mới vào Dashboard.  

---

## 🔍 Giải thích Code  

### 🎯 1. `AuthContext.tsx` - Quản lý trạng thái đăng nhập
```tsx
import { createContext, useState, ReactNode } from "react";

interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (username: string) => setUser(username);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```
🔹 **`createContext`**: Tạo Context để quản lý trạng thái đăng nhập.  
🔹 **`AuthProvider`**: Bọc toàn bộ ứng dụng, cung cấp `user`, `login`, `logout`.  

---

### 🔑 2. `Login.tsx` - Xử lý đăng nhập
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const storedUser = JSON.parse(localStorage.getItem("mockUser") || "{}");
  if (storedUser.username === loginData.username && storedUser.password === loginData.password) {
    alert("Đăng nhập thành công!");
    localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
    navigate("/dashboard"); 
  } else {
    setError("Tên đăng nhập hoặc mật khẩu không đúng!");
  }
};
```
🔹 **Kiểm tra Local Storage**: Xác thực tài khoản.  
🔹 **Nếu đúng**: Lưu vào `loggedInUser`, chuyển hướng **Dashboard**.  
🔹 **Nếu sai**: Hiển thị lỗi.

---

### 📝 3. `Register.tsx` - Xử lý đăng ký
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  localStorage.setItem("mockUser", JSON.stringify(user));
  alert("Đăng ký thành công!");
  navigate("/login"); 
};
```
🔹 **Lưu tài khoản** vào Local Storage.  
🔹 **Chuyển hướng** sang **Login**.

---

### 🖥️ 4. `Dashboard.tsx` - Hiển thị thông tin người dùng & Logout
```tsx
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
```
🔹 **useEffect**: Nếu chưa đăng nhập, tự động chuyển về **Login**.  
🔹 **Logout**: Xóa `loggedInUser` khỏi Local Storage, quay lại **Login**.

---

### 🛤️ 5. `AppRoutes.tsx` - Quản lý điều hướng
```tsx
<Routes>
  <Route path="/" element={<Login />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>
```
🔹 **Cấu hình React Router** để điều hướng giữa các trang.

---

### 🏠 6. `App.tsx` - Thành phần gốc của ứng dụng
```tsx
<AuthProvider>
  <AppRoutes />
</AuthProvider>
```
🔹 **Bọc toàn bộ ứng dụng** với `AuthProvider`, giúp quản lý trạng thái đăng nhập.

---

### 🚀 7. `main.tsx` - Điểm khởi chạy của ứng dụng
```tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```
🔹 **Render ứng dụng** React vào **DOM**.

---

