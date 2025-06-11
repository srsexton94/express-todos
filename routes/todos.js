const express = require("express");
const router = express.Router();
const todosCtrl = require("../controllers/todos");

router.post("/", todosCtrl.create);
router.get("/", todosCtrl.index);

module.exports = router;
