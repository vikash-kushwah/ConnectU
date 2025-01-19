import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/posts/user/posts');
        setUserPosts(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1>Your Posts</h1>
      <div className="space-y-4">
        {userPosts.map(post => (
          <div key={post._id} className="border p-4 rounded">
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;