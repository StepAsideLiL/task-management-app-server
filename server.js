require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.DB_URI;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Task Management App is running.");
});

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Task Management App is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
