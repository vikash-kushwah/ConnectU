const Post = require('../models/Post');

const postController = {
  createPost: async (req, res) => {
    try {
      const newPost = new Post({
        content: req.body.content,
        user: req.user.id
      });
      
      const savedPost = await newPost.save();
      await savedPost.populate('user', 'name profilePicture');
      res.status(201).json(savedPost);
    } catch (error) {
      console.error('Create post error:', error);
      res.status(500).json({ message: 'Error creating post' });
    }
  },

  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.find()
        .sort({ createdAt: -1 })
        .populate('user', 'name profilePicture');
      res.json(posts);
    } catch (error) {
      console.error('Get posts error:', error);
      res.status(500).json({ message: 'Error fetching posts' });
    }
  },

  getUserPosts: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id })
        .sort({ createdAt: -1 })
        .populate('user', 'name profilePicture');
      res.json(posts);
    } catch (error) {
      console.error('Get user posts error:', error);
      res.status(500).json({ message: 'Error fetching user posts' });
    }
  },

  deletePost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      if (post.user.toString() !== req.user.id) {
        return res.status(401).json({ message: 'User not authorized' });
      }

      await Post.deleteOne({ _id: req.params.id });
      res.json({ message: 'Post removed' });
    } catch (error) {
      console.error('Delete post error:', error);
      res.status(500).json({ message: 'Error deleting post' });
    }
  }
};

module.exports = postController;