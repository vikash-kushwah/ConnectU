// server/routes/posts.js
const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, deletePost } = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .get(getAllPosts)
  .post(protect, createPost);

router.route('/:id')
  .delete(protect, deletePost);

module.exports = router;