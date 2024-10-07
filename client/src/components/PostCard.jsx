import React from 'react';

const PostCard = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md p-4 mb-4 rounded">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default PostCard;
