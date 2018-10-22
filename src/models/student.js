let mongoose = require("mongoose");
let bcrypt = require("bcrypt-nodejs");

let studentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "user"
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Others", ""],
    default: ""
  },
  regNo: {
    type: String
  },
  skills: []
});

module.exports = mongoose.model("student", studentSchema);
