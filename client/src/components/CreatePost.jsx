import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../features/posts/postsSlice';

const CreatePost = () => {
  const [postData, setPostData] = useState({ title: '', content: '' });
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const validateForm = () => {
    if (!postData.title || !postData.content) {
      setError('Title and Content are required.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(createPost(postData));
    setPostData({ title: '', content: '' });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Create Post</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={postData.title}
            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea
            value={postData.content}
            onChange={(e) => setPostData({ ...postData, content: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
