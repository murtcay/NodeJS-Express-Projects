const express = require("express");
const router = express.Router();
const taskController = require('../controllers/taskController');

router.route("/").get(taskController.getAllTasks);
router.route("/").post(taskController.createTask);
router.route("/:id").get(taskController.getSingleTask);
router.route("/:id").patch(taskController.updateTask);
router.route("/:id").delete(taskController.deleteTask);


module.exports = router;
