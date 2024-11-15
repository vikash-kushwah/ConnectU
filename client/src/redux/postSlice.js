import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';

export const fetchPostDetails = createAsyncThunk('posts/fetchPostDetails', async (id) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
});

export const addComment = createAsyncThunk('posts/addComment', async ({ id, comment }) => {
  const response = await axios.post(`/posts/${id}/comments`, comment);
  return response.data;
});

export const createPost = createAsyncThunk('posts/createPost', async (postData) => {
  const response = await axios.post('/posts', postData);
  return response.data;
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    post: {},
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostDetails.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.post.comments.push(action.payload);
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export default postSlice.reducer;