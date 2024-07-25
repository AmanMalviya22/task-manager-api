const User = require('../models/user');

// List all tasks (excluding deleted ones)
exports.getTasks = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).select('tasks');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const tasks = user.tasks.filter(task => !task.isDeleted);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new task
exports.addTask = async (req, res) => {
  try {
    const { userId } = req.params;
    const { subject, deadline, status } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Create a new task
    const newTask = {
      subject,
      deadline,
      status,
      subtasks: [],
      isDeleted: false,
    };

    // Add the new task to the user's tasks array
    user.tasks.push(newTask);
    await user.save();

    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Update a task
exports.updateTask = async (req, res) => {
  try {
    const { userId, taskId } = req.params;
    const { subject, deadline, status } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const task = user.tasks.id(taskId);
    if (!task || task.isDeleted) return res.status(404).json({ message: 'Task not found' });

    task.subject = subject || task.subject;
    task.deadline = deadline || task.deadline;
    task.status = status || task.status;

    await user.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Soft delete a task
exports.deleteTask = async (req, res) => {
  try {
    const { userId, taskId } = req.params;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const task = user.tasks.id(taskId);
    if (!task || task.isDeleted) return res.status(404).json({ message: 'Task not found' });

    task.isDeleted = true;

    await user.save();
    res.json({ message: 'Task marked as deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
