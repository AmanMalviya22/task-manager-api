const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Get all tasks (excluding deleted ones)
router.get('/:userId', taskController.getTasks);

// Add a new task
router.post('/:userId/:userId', taskController.addTask);

// Update an existing task
router.put('/:userId/:taskId', taskController.updateTask);

// Soft delete a task
router.delete('/:userId/:taskId', taskController.deleteTask);

module.exports = router;
