import React, { memo } from 'react';
import { useSelector } from 'react-redux';

const PostCard = ({ post, onDelete }) => {
  const { user } = useSelector((state) => state.auth);

  const formattedDate = React.useMemo(() => {
    return new Date(post.createdAt).toLocaleDateString();
  }, [post.createdAt]);

  const isAuthor = React.useMemo(() => {
    return user?._id === post.user?._id;
  }, [user?._id, post.user?._id]);

  const handleDelete = React.useCallback(() => {
    onDelete(post._id);
  }, [onDelete, post._id]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={post.user?.avatar || '/default-avatar.png'}
          alt="Profile"
          className="w-10 h-10 rounded-full mr-4"
          loading="lazy"
        />
        <div>
          <h3 className="font-semibold">{post.user?.name}</h3>
          <p className="text-gray-500 text-sm">{formattedDate}</p>
        </div>
      </div>
      <p className="text-gray-800 mb-4">{post.content}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-blue-500">
            Like ({post.likes?.length || 0})
          </button>
          <button className="text-gray-500 hover:text-blue-500">
            Comment ({post.comments?.length || 0})
          </button>
        </div>
        {isAuthor && (
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

// Only re-render if props actually changed
export default memo(PostCard, (prevProps, nextProps) => {
  return (
    prevProps.post._id === nextProps.post._id &&
    prevProps.post.content === nextProps.post.content &&
    prevProps.post.likes?.length === nextProps.post.likes?.length &&
    prevProps.post.comments?.length === nextProps.post.comments?.length
  );
});