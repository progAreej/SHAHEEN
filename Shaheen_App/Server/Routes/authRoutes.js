const express = require('express');
const router = express.Router();
const { signup, login, logout } = require('../Controller/authController');

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

// Logout route (clear cookie)
router.post('/logout', logout);

module.exports = router;
