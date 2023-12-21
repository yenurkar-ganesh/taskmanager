const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getSingleTask,
  deleteTask,
  updateTask,
} = require("../controller/task.controller.js");

router.route("/").get(getAllTasks);
router.route("/").post(createTask);
router.route("/:id").put(updateTask);
router.route("/:id").get(getSingleTask);
router.route("/:id").delete(deleteTask);

module.exports = router;
