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
  description: {
    type: String,
    default: ""
  },
  password: {
    type: String
  },
  phone: {
    type: String,
    default: ""
  },
  photo: String,
  role: {
    type: String,
    enum: ["student", "organization", "faculty"],
    default: "student"
  }
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("user", userSchema);
