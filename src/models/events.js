const mongoose = require("mongoose");

const organiserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ""
  },
  photo: {
    type: String,
    deafult: ""
  }
});

const commentSchema = new mongoose.Schema({
  rating: {
    type: Number,
    default: 5
  },
  comment: {
    type: String,
    default: ""
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "user"
  },
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
  organiser: organiserSchema,
  price: {
    type: Number,
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
      id: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
      }
    }
  ]
});

module.exports = mongoose.model("events", eventSchema);
