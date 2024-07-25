const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const subtaskRoutes = require('./routes/subtaskRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();
require('dotenv').config();
const url=process.env.URL
// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);
// Use the subtask routes
app.use('/subtasks', subtaskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
