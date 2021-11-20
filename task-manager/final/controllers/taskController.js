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
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    
    if(!task) {
      return res.status(404).json({ error: `There is no task with id: ${taskID}`});
    }

    res.status(200).json({ task });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true
    });

    if(!task) {
      return res.status(404).json({ error: `There is no task with id: ${taskID}`});
    }

    res.status(200).json({ task });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    
    if(!task) {
      return res.status(404).json({ error: `There is no task with id: ${taskID}`});
    }

    res.status(200).json({
      tatasksk: null,
      status: 'successfully deleted'
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask
}