// server/models/Post.js
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', postSchema);