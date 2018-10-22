let mongoose = require("mongoose");
let bcrypt = require("bcrypt-nodejs");

let organizationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "user"
  },
  domain: {
    type: String
  },
  moto: {
    type: String
  },
  board: [
    {
      user: {
        userId: {
          type: mongoose.Schema.ObjectId,
          ref: "user"
        },
        position: String
      }
    }
  ],
  feedback: [
    {
      userId: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
      },
      contactMethod: {
        type: String,
        enum: ["None", "Email", "Tel"],
        default: "None"
      },
      message: String
    }
  ]
});

module.exports = mongoose.model("organization", organizationSchema);
