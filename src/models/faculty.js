let mongoose = require("mongoose");
let bcrypt = require("bcrypt-nodejs");

let facultySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "user"
  },
  school: {
    type: String
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Others", ""],
    default: ""
  }
});

module.exports = mongoose.model("faculty", facultySchema);
