const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  rating: {
    type: Number,
    default: 5
  },
  comment: {
    type: String,
    default: ""
  },
  author: String,
  date: Date
});

const eventSchema = new mongoose.Schema({
  orgId: {
    type: mongoose.Schema.ObjectId,
    ref: "user"
  },
  eventName: {
    type: String,
    default: ""
  },
  category: {
    type: String,
    default: ""
  },
  organiser: String,
  price: {
    type: String,
    default: ""
  },
  tagLine: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  eventDate: {
    type: Date
  },
  eventTime: {
    type: String
  },
  venue: {
    type: String,
    default: ""
  },
  registerCount: {
    type: Number,
    default: 0
  },
  popularity: {
    type: Number,
    default: 5
  },
  comments: [commentSchema],
  registeredUsers: [
    {
      userId: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
      },
      attended: {
        type: Boolean,
        default: false
      }
    }
  ]
});

module.exports = mongoose.model("events", eventSchema);
