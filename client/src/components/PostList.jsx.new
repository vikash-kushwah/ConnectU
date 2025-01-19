import React, { useEffect, useCallback } from 'react';
import PostCard from './PostCard';
import SkeletonLoader from './SkeletonLoader';
import SearchBar from './SearchBar';
import { usePosts } from '../hooks/usePosts';

const PostList = () => {
  const {
    posts,
    loading,
    error,
    hasMore,
    fetchPosts,
    deletePost,
    loadMore
  } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleSearch = useCallback((searchQuery) => {
    fetchPosts(searchQuery);
  }, [fetchPosts]);

  const renderLoadingState = () => (
    <>
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
    </>
  );

  if (error) return (
    <div className="text-red-500 text-center p-4">
      {error}
      <button
        onClick={() => fetchPosts()}
        className="ml-4 text-blue-500 hover:underline"
      >
        Retry
      </button>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      
      {loading && posts.length === 0 ? renderLoadingState() : (
        <>
          {posts.map((post) => (
            <PostCard 
              key={post._id} 
              post={post} 
              onDelete={deletePost}
            />
          ))}
          
          {loading && <div className="text-center p-4">Loading more...</div>}
          
          {!loading && hasMore && (
            <button
              onClick={loadMore}
              className="w-full py-2 text-blue-500 hover:text-blue-600 text-center"
            >
              Load More
            </button>
          )}
          
          {!loading && !hasMore && posts.length > 0 && (
            <div className="text-center text-gray-500 p-4">
              No more posts to load
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PostList;