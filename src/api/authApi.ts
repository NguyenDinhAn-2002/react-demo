export interface User {
  id: number;
  username: string;
  password: string;
  followers: number[];
  following: number[];
}

const USERS_KEY = "users";
const AUTH_KEY = "authUser";

const getUsers = (): User[] => {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
};

const saveUsers = (users: User[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const register = (
  user: Omit<User, "id" | "followers" | "following">,
) => {
  const users = getUsers();
  if (users.some((u) => u.username === user.username)) {
    throw new Error("Username đã tồn tại!");
  }

  const newUser: User = {
    ...user,
    id: users.length + 1,
    followers: [],
    following: [],
  };

  users.push(newUser);
  saveUsers(users);
};

export const login = (username: string, password: string): User | null => {
  const users = getUsers();
  const user = users.find(
    (u) => u.username === username && u.password === password,
  );

  if (user) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    return user;
  }

  return null;
};

export const logout = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const getCurrentUser = (): User | null => {
  return JSON.parse(localStorage.getItem(AUTH_KEY) || "null");
};

export const getAllUsers = (): User[] => {
  const currentUser = getCurrentUser();
  return getUsers().filter((user) => user.id !== currentUser?.id);
};

export const followUser = (userId: number) => {
  const users = getUsers();
  const currentUser = getCurrentUser();

  if (!currentUser) return;

  const targetUser = users.find((u) => u.id === userId);
  if (!targetUser) return;

  if (!currentUser.following.includes(userId)) {
    currentUser.following.push(userId);
    targetUser.followers.push(currentUser.id);
  }

  saveUsers(users);
  localStorage.setItem(AUTH_KEY, JSON.stringify(currentUser));
};

export const unfollowUser = (userId: number) => {
  const users = getUsers();
  const currentUser = getCurrentUser();

  if (!currentUser) return;

  const targetUser = users.find((u) => u.id === userId);
  if (!targetUser) return;

  currentUser.following = currentUser.following.filter((id) => id !== userId);
  targetUser.followers = targetUser.followers.filter(
    (id) => id !== currentUser.id,
  );

  saveUsers(users);
  localStorage.setItem(AUTH_KEY, JSON.stringify(currentUser));
};
