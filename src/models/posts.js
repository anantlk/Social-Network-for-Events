const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    name: String,
    date: {
      type: Date
    },
    tagLine: String,
    description: String,
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: "user"
    },
    likes: [
      {
        userId: {
          type: mongoose.Schema.ObjectId,
          ref: "user"
        }
      }
    ],
    eventId: {
      type: mongoose.Schema.ObjectId,
      ref: "event"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", postSchema);
