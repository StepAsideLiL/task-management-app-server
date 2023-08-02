const express = require("express");
const {
  getAllTask,
  createNewTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");
const router = express.Router();

router.get("/tasks", getAllTask);

router.post("/tasks", createNewTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

module.exports = router;
