const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    completed: { type: "boolean", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
