let mongoose = require("mongoose");
let bcrypt = require("bcrypt-nodejs");

var userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  username: {
    type: String
  },
  email: {
    type: String
  },
  regNo: {
    type: String
  },
  description: {
    type: String
  },
  password: {
    type: String
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Others", null],
    default: null
  },
  photo: String,
  role: {
    type: String,
    enum: ["student", "chapter", "admin"],
    default: "student"
  }
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
