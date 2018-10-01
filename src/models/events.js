const mongoose = require("mongoose");

const organiserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  photo: {
    type: String
  }
});

const eventSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.ObjectId,
    ref: "user"
  },
  eventName: {
    type: String
  },
  category: {
    type: String
  },
  organiser: organiserSchema,
  price: {
    type: Number
  },
  tagLine: {
    type: String
  },
  likes: {
    type: Number
  },
  description: {
    type: String
  },
  eventDate: {
    type: Date
  },
  venue: {
    type: String
  },
  registerCount: {
    type: Number
  },
  popularity: {
    type: Number
  },
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
