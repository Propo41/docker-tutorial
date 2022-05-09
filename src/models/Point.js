const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  number: Number,
  score: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Point = mongoose.model("Point", pointSchema);
module.exports = Point;
