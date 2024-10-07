// src/components/HomePage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreatePost from './CreatePost';
import PostCard from './PostCard';
import './HomePage.css';

const HomePage = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Check if the user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const userData = JSON.parse(localStorage.getItem('user')); // Retrieve user data
      setUser(userData);
    }
  }, []);

  // Fetch featured posts (mocked data for now)
  useEffect(() => {
    const mockFeaturedPosts = [
      { id: 1, title: "Welcome to UniConnect", content: "Connect with students and alumni from your university!" },
      { id: 2, title: "Upcoming Events", content: "Check out our calendar for networking opportunities." },
      { id: 3, title: "Success Stories", content: "Read about how UniConnect has helped students find internships." },
    ];

    setFeaturedPosts(mockFeaturedPosts);
  }, []);

  // Navigation to the Sign-Up page
  const handleSignUp = () => {
    navigate('/register');
  };

  // Navigation for reading more posts
  const handleReadMore = (postId) => {
    navigate(`/post/${postId}`);
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    localStorage.removeItem('user'); // Remove user data from local storage
    setIsLoggedIn(false); // Update state
    setUser(null); // Clear user data
    navigate('/'); // Redirect to home page after logout
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
              src={user?.profilePicture || '/path/to/default-profile-pic.png'} // Use default image if not available
              alt="Profile"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="mr-2">{user?.name}</span> {/* Display user name */}
            <button onClick={handleLogout} className="text-blue-500 hover:underline">
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
      <CreatePost />

      {/* Featured Posts Section */}
      <section className="featured-posts mt-8">
        <h2 className="text-2xl font-bold mb-4">Featured Posts</h2>
        <div className="post-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredPosts.map((post) => (
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
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <button
          className="cta-button bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          onClick={handleSignUp}
        >
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default HomePage;
