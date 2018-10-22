const Event = require("../models/events");
const Post = require("../models/posts");
const User = require("../models/user");
const Student = require("../models/student");
const Organization = require("../models/organization");
const Faculty = require("../models/faculty");

module.exports.getAllEvents = async () => {
  try {
    let events = await Event.find({});
    return events;
  } catch (error) {
    throw error;
  }
};

module.exports.getStudent = async userId => {
  console.log(userId);
  let user = await Student.findOne({ userId: userId }).populate("userId");
  if (!user) throw new Error("User Not Found");
  return user;
};

module.exports.addEvent = async (event, id) => {
  try {
    let newEvent = new Event(event);
    newEvent.orgId = id;
    newEvent.eventDate = new Date(event.eventDate);
    let result = await newEvent.save();
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.getEventForUsers = async id => {
  try {
    let events = await Event.find(
      {
        "registeredUsers.id": id
      },
      { registeredUsers: 0, registeredCount: 0 }
    );
    return events;
  } catch (error) {
    throw error;
  }
};

module.exports.getOrganizations = async () => {
  try {
    let chapters = await User.find({ role: "organization" });
    return chapters;
  } catch (error) {
    throw error;
  }
};

module.exports.getEventForOrganization = async id => {
  try {
    let events = await Event.find(
      {
        orgId: id
      },
      { registeredUsers: 0, registeredCount: 0 }
    );
    return events;
  } catch (error) {
    throw error;
  }
};

module.exports.getEventById = async id => {
  try {
    let event = await Event.findOne({ _id: id });
    return event;
  } catch (error) {
    throw error;
  }
};

module.exports.eventRegister = async (userId, eventId) => {
  try {
    let result = await Event.findByIdAndUpdate(eventId, {
      $push: { registeredUsers: { id: userId } }
    });
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.addPost = async (post, orgId) => {
  try {
    let newPost = new Post(post);
    newPost.owner = orgId;
    post = await newPost.save();
    return post;
  } catch (error) {
    throw error;
  }
};

module.exports.viewPost = async () => {
  try {
    let posts = await Post.find({}, { "likes._id": 0 }).sort({ _id: -1 });
    return posts;
  } catch (error) {}
};

module.exports.likePost = async (postId, userId) => {
  try {
    let post = await Post.findOne({ _id: postId, "likes.userId": userId });
    if (post) {
      result = await Post.findByIdAndUpdate(postId, {
        $pull: { likes: { userId } }
      });
    } else {
      result = await Post.findByIdAndUpdate(postId, {
        $push: { likes: { userId } }
      });
    }
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.addComment = async (comment, eventId, author) => {
  try {
    comment.author = author;
    comment.date = Date.now();
    console.log(comment);
    let result = Event.findByIdAndUpdate(eventId, {
      $push: { comments: comment }
    });
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.addSkill = async (skill, userId) => {
  let result = await Student.updateOne(
    { userId: userId },
    { $push: { skills: skill } }
  );
  if (!result.ok) throw new Error("Skill could not be added");
  return result;
};
