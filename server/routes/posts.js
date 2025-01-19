const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');
const { 
  createPost, 
  getAllPosts, 
  getUserPosts, 
  deletePost 
} = require('../controllers/postController');

// Public routes
router.get('/', postController.getAllPosts);

// Protected routes
router.use(protect);
router.post('/',protect, postController.createPost);
router.get('/user/posts',protect, postController.getUserPosts);
router.delete('/:id', protect, postController.deletePost);

module.exports = router;