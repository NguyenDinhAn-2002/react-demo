const FOLLOW_KEY = "follows";

const getFollowData = () => {
  return JSON.parse(localStorage.getItem(FOLLOW_KEY) || "{}");
};

const saveFollowData = (data: Record<number, number[]>) => {
  localStorage.setItem(FOLLOW_KEY, JSON.stringify(data));
};

export const followUser = (currentUserId: number, targetUserId: number) => {
  const data = getFollowData();
  if (!data[currentUserId]) {
    data[currentUserId] = [];
  }
  if (!data[currentUserId].includes(targetUserId)) {
    data[currentUserId].push(targetUserId);
    saveFollowData(data);
  }
};

export const unfollowUser = (currentUserId: number, targetUserId: number) => {
  const data = getFollowData();
  if (data[currentUserId]) {
    data[currentUserId] = data[currentUserId].filter(
      (id: number) => id !== targetUserId,
    );
    saveFollowData(data);
  }
};

export const getFollowing = (currentUserId: number): number[] => {
  const data = getFollowData();
  return data[currentUserId] || [];
};

export const getFollowers = (currentUserId: number): number[] => {
  const data = getFollowData();
  return Object.keys(data)
    .filter((userId) => data[userId].includes(currentUserId))
    .map((id) => parseInt(id));
};
