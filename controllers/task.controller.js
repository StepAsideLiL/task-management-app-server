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

// GET: "/tasks/:id"
const getSingleTask = async (req, res) => {
  const taskId = req.params.id;

  taskSchema
    .findById(taskId)
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

// PATCH: "/tasks/toggle/:id"
const toggleTask = async (req, res) => {
  const taskId = req.params.id;

  let toggle;

  taskSchema
    .find()
    .then((result) => {
      toggle = result.completed;
    })
    .catch((err) => {
      console.log(err);
    });

  taskSchema
    .findByIdAndUpdate(taskId, { completed: !toggle }, { new: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// DELETE: "/tasks/:id"
const deleteTask = async (req, res) => {
  const taskId = req.params.id;

  taskSchema
    .findByIdAndDelete(taskId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllTask,
  getSingleTask,
  createNewTask,
  updateTask,
  toggleTask,
  deleteTask,
};
