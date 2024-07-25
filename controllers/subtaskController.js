const User = require('../models/user');

// Add subtasks to a specific task
exports.addSubtasks = async (req, res) => {
    try {
      const { userId, taskId } = req.params;
      const { subtasks } = req.body;
  
      // Find the user by ID
      const user = await User.findById(userId);
      if (!user) {
        console.log(`User not found with ID: ${userId}`);
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Log the found user
      console.log('Found user:', user);
  
      // Find the specific task within the user's tasks
      const task = user.tasks.id(taskId);
      if (!task) {
        console.log(`Task not found with ID: ${taskId}`);
        return res.status(404).json({ message: 'Task not found' });
      }
  
      // Log the found task
      console.log('Found task:', task);
  
      // Add each subtask to the task's subtasks array
      subtasks.forEach(subtask => {
        task.subtasks.push({
          subject: subtask.subject,
          deadline: subtask.deadline,
          status: subtask.status,
          isDeleted: false,
        });
      });
  
      await user.save();
      res.status(201).json(task.subtasks);
    } catch (err) {
      console.error('Error adding subtasks:', err);
      res.status(500).json({ message: err.message });
    }
  };

// List all non-deleted subtasks for a specific task
exports.getSubtasks = async (req, res) => {
  try {
    const { userId, taskId } = req.params;

    const user = await User.findById(userId).select('tasks');
    console.log('found user :', user)
    if (!user) return res.status(404).json({ message: 'User not found' });

    const task = user.tasks.id(taskId);
    console.log('found task :', task);
    if (!task || task.isDeleted) return res.status(404).json({ message: 'Task not found' });
    
    const subtasks = task.subtasks.filter(subtask => !subtask.isDeleted);
    res.json(subtasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// Define the updateSubtask function
exports.updateSubtask = async (req, res) => {
  try {
    const { userId, taskId, subtaskId } = req.params;
    const { subject, deadline, status } = req.body;
     console.log("userid", userId);
     console.log('taskId', taskId);
     console.log("subtaskId", subtaskId);
     console.log("req.body", req.body);
    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the specific task within the user's tasks
    const task = user.tasks.id(taskId);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    let subtask;
    
    
      // Updating an existing subtask
      subtask = task.subtasks.id(subtaskId);
      if (!subtask) {
        return res.status(404).json({ message: 'Subtask not found' });
      }

      if (subject) subtask.subject = subject;
      if (deadline) subtask.deadline = deadline;
      if (status) subtask.status = status;
    

    await user.save();
    res.status(200).json(subtask);
  } catch (err) {
    console.error('Error updating subtask:', err);
    res.status(500).json({ message: err.message });
  }
};

// Soft delete a subtask
exports.deleteSubtask = async (req, res) => {
  try {
    const { userId, taskId, subtaskId } = req.params;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const task = user.tasks.id(taskId);
    if (!task || task.isDeleted) return res.status(404).json({ message: 'Task not found' });

    const subtask = task.subtasks.id(subtaskId);
    if (!subtask || subtask.isDeleted) return res.status(404).json({ message: 'Subtask not found' });

    subtask.isDeleted = true;

    await user.save();
    res.json({ message: 'Subtask marked as deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
