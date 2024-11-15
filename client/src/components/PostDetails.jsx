import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostDetails, addComment } from '../redux/postSlice';

const PostDetails = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostDetails(id));
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      text: e.target.comment.value,
    };
    dispatch(addComment(id, comment));
    e.target.reset();
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
        </div>
        <div className="card-footer">
          <div className="comments">
            {post.comments.map((comment) => (
              <p key={comment._id}>{comment.text}</p>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="comment">Add a comment:</label>
              <textarea className="form-control" id="comment" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;