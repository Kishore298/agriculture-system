const express = require('express');
const { signup, login, getProfile } = require('../controllers/authController');
const { authenticate } = require('../middleware/authMiddleware'); // Middleware for JWT verification

const router = express.Router();

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

// Get user profile route
router.get('/profile', authenticate, getProfile);

module.exports = router;
