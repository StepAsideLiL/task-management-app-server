const express = require("express");
const {
  getAllTask,
  getSingleTask,
  createNewTask,
  updateTask,
  toggleTask,
  deleteTask,
} = require("../controllers/task.controller");
const router = express.Router();

router.get("/tasks", getAllTask);

router.get("/tasks/:id", getSingleTask);

router.post("/tasks", createNewTask);

router.put("/tasks/:id", updateTask);

router.patch("/tasks/toggle/:id", toggleTask);

router.delete("/tasks/:id", deleteTask);

module.exports = router;
