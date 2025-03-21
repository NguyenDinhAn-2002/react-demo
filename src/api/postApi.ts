export interface Post {
  id: number;
  userId: number;
  username: string;
  title: string;
  body: string;
  image?: string;
  like: number[];
  comment: Comment[];
  createdAt: number;
}

export interface Comment {
  userId: number;
  username: string;
  text: string;
  createdAt: number;
}

const POSTS_KEY = "posts";

const getPosts = (): Post[] => {
  const data = JSON.parse(localStorage.getItem(POSTS_KEY) || "[]");
  return data.map((post: Post) => ({
    ...post,
    like: Array.isArray(post.like) ? post.like : [],
    comment: Array.isArray(post.comment) ? post.comment : [],
  }));
};

const savePosts = (posts: Post[]) => {
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
};

export const createPost = (post: Post) => {
  const posts = getPosts();
  post.id = posts.length + 1;
  posts.unshift(post);
  savePosts(posts);
  console.log("Post created:", post);
};

export const fetchPosts = (): Post[] => {
  return getPosts();
};

export const toggleLikePost = (postId: number, userId: number) => {
  const posts = getPosts();
  const post = posts.find((p) => p.id === postId);

  if (post) {
    const index = post.like.indexOf(userId);
    if (index === -1) {
      post.like.push(userId);
    } else {
      post.like.splice(index, 1);
    }
    savePosts(posts);
  }
};

export const addCommentToPost = (
  postId: number,
  userId: number,
  username: string,
  text: string,
) => {
  const posts = getPosts();
  const post = posts.find((p) => p.id === postId);

  if (post) {
    if (!Array.isArray(post.comment)) {
      post.comment = [];
    }

    post.comment.push({ userId, username, text, createdAt: Date.now() });
    savePosts(posts);
  }
};

export const fetchPostComments = (postId: number): Comment[] => {
  const posts = getPosts();
  const post = posts.find((p) => p.id === postId);
  return post ? post.comment.sort((a, b) => b.createdAt - a.createdAt) : [];
};

export const deletePost = (postId: number) => {
  const posts = getPosts();
  const updatedPosts = posts.filter((post) => post.id !== postId);
  savePosts(updatedPosts);
};
