import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/axios';

export const createPost = createAsyncThunk('posts/createPost', async (postData) => {
  const response = await API.post('/posts', postData);
  return response.data;
});

export const addComment = createAsyncThunk('posts/addComment', async ({ postId, comment }) => {
  const response = await API.post(`/posts/${postId}/comment`, { comment });
  return { postId, comment: response.data };
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { posts: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const post = state.posts.find(p => p._id === action.payload.postId);
        post.comments.push(action.payload.comment);
      });
  },
});

export default postsSlice.reducer;
