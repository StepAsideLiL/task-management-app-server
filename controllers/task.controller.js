const taskSchema = require("../models/task.model");

// GET: "/tasks"
const getAllTask = async (req, res) => {
  res.send({ hello: "world" });
};

// POST: "/tasks"
const createNewTask = async (req, res) => {
  const taskInfo = req.body;

  const newTask = new taskSchema(taskInfo);

  newTask
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// PUT: "/tasks/:id"
const updateTask = async (req, res) => {};

// DELETE: "/tasks/:id"
const deleteTask = async (req, res) => {};

module.exports = {
  getAllTask,
  createNewTask,
  updateTask,
  deleteTask,
};
