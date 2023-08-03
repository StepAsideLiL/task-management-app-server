const express = require("express");
const {
  getAllTask,
  createNewTask,
  updateTask,
  toggleTask,
  deleteTask,
} = require("../controllers/task.controller");
const router = express.Router();

router.get("/tasks", getAllTask);

router.post("/tasks", createNewTask);

router.put("/tasks/:id", updateTask);

router.patch("/tasks/toggle/:id", toggleTask);

router.delete("/tasks/:id", deleteTask);

module.exports = router;
