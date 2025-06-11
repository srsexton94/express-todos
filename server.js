// Dependency Requirements
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");
const todosRouter = require("./routes/todos");

// Project Configurations
require("dotenv").config();
require("./config/database");

// Create Express App
const app = express();

// Middleware Pipeline
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "static")));

// Routes
app.use("/todos", todosRouter);

// Serves our HTML
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// App listen
app.listen(3000, function () {
  console.log(`Listening on Port 3000`);
});
