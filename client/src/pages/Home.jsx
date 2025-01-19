import React from 'react';
import PostList from '../components/PostList';

const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Recent Posts</h1>
      <PostList />
    </div>
  );
};

export default Home;