const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    title: { type: "string", required: true },
    description: { type: "string", required: false, default: "" },
    completed: { type: "boolean", required: false, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
