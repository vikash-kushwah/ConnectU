import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreatePost from './CreatePost';
import PostCard from './PostCard';
import LoadingSpinner from './LoadingSpinner';
import Toast from './Toast/Toast';
import ErrorBoundary from './ErrorBoundary';
import { useAuth } from '../hooks/useAuth';
import { useToast } from '../hooks/useToast';
import './HomePage.css';

const HomePageContent = () => {
  const { toast, showToast, hideToast } = useToast();
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuth();

  // Fetch featured posts
  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/posts/featured');
        if (!response.ok) {
          throw new Error('Failed to fetch featured posts');
        }
        const data = await response.json();
        setFeaturedPosts(data);
      } catch (err) {
        const errorMessage = err.message;
        setError(errorMessage);
        showToast({ 
          message: errorMessage,
          type: 'error'
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedPosts();
  }, [showToast]);

  // Navigation functions
  const handleSignUp = () => {
    navigate('/register');
    showToast({
      message: 'Welcome to registration!',
      type: 'info'
    });
  };

  const handleReadMore = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Welcome to UniConnect</h2>
      <p>Your college social networking platform.</p>

      {/* Display Profile Icon or Login Button */}
      <div className="text-right mb-4">
        {isLoggedIn ? (
          <div className="flex items-center">
            <img
              src={user?.profilePicture || '/path/to/default-profile-pic.png'}
              alt="Profile"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="mr-2">{user?.name}</span>
            <button 
              onClick={() => {
                logout();
                showToast({ 
                  message: 'Successfully logged out',
                  type: 'success'
                });
              }} 
              className="text-blue-500 hover:underline"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        )}
      </div>

      {/* Create Post Section */}
      {isLoggedIn && <CreatePost />}

      {/* Featured Posts Section */}
      <section className="featured-posts mt-8">
        <h2 className="text-2xl font-bold mb-4">Featured Posts</h2>
        <div className="post-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading ? (
            <LoadingSpinner />
          ) : error ? (
            <div className="text-red-500 text-center p-4">{error}</div>
          ) : (
            featuredPosts.map((post) => (
              <div key={post.id} className="post-card border p-4 rounded shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p>{post.content.substring(0, 100)}...</p>
                <button
                  className="text-blue-500 hover:underline mt-2"
                  onClick={() => handleReadMore(post.id)}
                >
                  Read More
                </button>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Toast Notifications */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
          duration={toast.duration}
        />
      )}
    </div>
  );
};

const HomePage = () => {
  return (
    <ErrorBoundary>
      <HomePageContent />
    </ErrorBoundary>
  );
};

export default HomePage;