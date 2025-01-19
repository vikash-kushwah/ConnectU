import { useState, useCallback } from 'react';
import axios from '../api/axios';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = useCallback(async (searchQuery = '') => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`/api/posts?page=${page}&search=${searchQuery}`);
      const newPosts = response.data.posts;
      setPosts(prev => page === 1 ? newPosts : [...prev, ...newPosts]);
      setHasMore(newPosts.length > 0);
    } catch (err) {
      setError(err.message || 'Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  }, [page]);

  const deletePost = async (postId) => {
    try {
      await axios.delete(`/api/posts/${postId}`);
      setPosts(posts.filter(post => post._id !== postId));
      return true;
    } catch (err) {
      setError('Failed to delete post');
      return false;
    }
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return {
    posts,
    loading,
    error,
    hasMore,
    fetchPosts,
    deletePost,
    loadMore
  };
};