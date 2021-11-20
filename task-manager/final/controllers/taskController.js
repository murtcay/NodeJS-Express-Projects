const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });

  } catch (err) {
    res.status(500).json({ error: err.message});
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findOne({ _id: taskID });
    
    if(!task) {
      return res.status(500).json({ error: `There is no task with id: ${taskID}`});
    }

    res.status(200).json({ task });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
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