import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post } from '../types';
import { v4 as uuidv4 } from "uuid";
interface PostState {
  posts: Post[];
}


const initialState: PostState = {
    posts: JSON.parse(localStorage.getItem("posts") || "[]"),
}

const saveToLocalStorage = (posts: Post[]) => {
    localStorage.setItem("posts", JSON.stringify(posts));
  };

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<{userId: string,title: string, body: string}>) =>{
        const newPost: Post = {
            id: uuidv4(),
            userId: action.payload.userId,
            title: action.payload.title,
            body: action.payload.body,
            status: true,
            likes: [],
            createdAt: Date.now()
        };
        state.posts.push(newPost);
        saveToLocalStorage(state.posts);
    },

    
    likePost: (state, action: PayloadAction<{ postId: string; username: string }>) => {
      const post = state.posts.find((p) => p.id === action.payload.postId);
      if (post) {
        if (post.likes.includes(action.payload.username)) {
          post.likes = post.likes.filter((user) => user !== action.payload.username);
        } else {
          post.likes.push(action.payload.username);
        }
        saveToLocalStorage(state.posts);
      }
    },

  }
});

export const {addPost, likePost} = postSlice.actions

export default postSlice.reducer