const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    name: String,
    date: {
      type: Date
    },
    description: String,
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: "user"
    },
    imgUrl: String,
    likes: [
      {
        userId: {
          type: mongoose.Schema.ObjectId,
          ref: "user"
        }
      }
    ],
    event: {
      type: mongoose.Schema.ObjectId,
      ref: "event"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", postSchema);
