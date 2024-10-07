import React from 'react';
import CreatePost from './CreatePost';
import PostCard from './PostCard';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Welcome to UniConnect</h2>
      <p>Your college social networking platform.</p>
      <CreatePost />
      <PostCard />
    </div>
  );
};

export default HomePage;
