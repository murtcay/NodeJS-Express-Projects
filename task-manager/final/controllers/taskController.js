const getAllTasks = (req, res) => {
  res.json({
    action: 'get all tasks'
  });
};

const createTask = (req, res) => {
  res.json({
    body: req.body,
    action: 'create task'
  });
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