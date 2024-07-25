const express = require('express');
const router = express.Router();
const subtaskController = require('../controllers/subtaskController');

// Get all subtasks for a task (excluding deleted ones)
router.get('/:userId/:taskId', subtaskController.getSubtasks);

// Add subtasks to a specific task for a user
router.post('/:userId/:taskId/', subtaskController.addSubtasks);


// Ensure that 'updateSubtask' is properly imported and defined
router.put('/:userId/:taskId/:subtaskId', subtaskController.updateSubtask);

// Soft delete a subtask
router.delete('/:userId/:taskId/:subtaskId', subtaskController.deleteSubtask);

module.exports = router;
