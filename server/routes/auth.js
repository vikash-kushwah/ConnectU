const express = require('express');
const { loginUser, register, getProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile);

module.exports = router;