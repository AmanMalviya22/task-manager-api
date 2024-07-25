const mongoose = require('mongoose');

const subtaskSchema = new mongoose.Schema({
  subtaskId: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
  subject: String,
  deadline: Date,
  status: String,
  isDeleted: { type: Boolean, default: false },
});

const taskSchema = new mongoose.Schema({
  taskId: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
  subject: String,
  deadline: Date,
  status: String,
  isDeleted: { type: Boolean, default: false },
  subtasks: [subtaskSchema],
});

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  tasks: [taskSchema],
});

module.exports = mongoose.model('User', userSchema);
