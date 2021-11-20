const Task = require('../models/Task');

const getAllTasks = (req, res) => {
  res.json({
    action: 'get all tasks'
  });
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
    
  } catch (err) {
    res.json({
      status: 'failed',
      error: err.message
    });
  }
};

const getSingleTask = (req, res) => {
  res.json({
    id: req.params.id,
    action: 'get single task'
  });
};

const updateTask = (req, res) => {
  res.json({
    id: req.params.id,
    action: 'update task'
  });
};

const deleteTask = (req, res) => {
  res.json({
    id: req.params.id,
    action: 'delete task'
  });
};


module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask
}