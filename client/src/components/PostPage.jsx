import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './PostPage.css';

const PostPage = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // In a real application, replace this with your actual API call
        // const response = await axios.get(`/api/posts/${id}`);
        // setPost(response.data);
        
        // For now, we'll use mock data
        const mockPost = {
          id: id,
          title: `Post ${id}`,
          content: `This is the full content of post ${id}. It's much longer than what was shown on the homepage.`
        };
        setPost(mockPost);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="post-page">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};

export default PostPage;
