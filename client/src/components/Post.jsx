import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="border p-4 mb-4">
      <h3 className="text-xl font-bold">{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;