const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todosSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todosSchema);
