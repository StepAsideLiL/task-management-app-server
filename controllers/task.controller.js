const taskSchema = require("../models/task.model");

// GET: "/tasks"
const getAllTask = async (req, res) => {
  taskSchema
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
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
const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const taskInfo = req.body;

  taskSchema
    .findByIdAndUpdate(taskId, taskInfo, { new: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// DELETE: "/tasks/:id"
const deleteTask = async (req, res) => {};

module.exports = {
  getAllTask,
  createNewTask,
  updateTask,
  deleteTask,
};
