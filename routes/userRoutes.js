const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/', userController.createUser);

// Get user details by ID
router.get('/:userId', userController.getUserById);

module.exports = router;
