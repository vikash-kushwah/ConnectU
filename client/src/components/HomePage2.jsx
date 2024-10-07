import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreatePost from './CreatePost';
import PostCard from './PostCard';
import './HomePage.css';

const HomePage = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const navigate = useNavigate();

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

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Welcome to UniConnect</h2>
      <p>Your college social networking platform.</p>

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
