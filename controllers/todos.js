const Todo = require("../models/todo");

async function create(req, res) {
  const newTodo = await Todo.create(req.body);
  res.json(newTodo);
}

async function index(req, res) {
  const todos = await Todo.find({});
  res.json(todos);
}

module.exports = {
  create,
  index,
};
