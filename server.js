const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "static")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, function () {
  console.log(`Listening on Port 3000`);
});
