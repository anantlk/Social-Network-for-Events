const User = require("../../models/user");
const mailer = require("./mailer");
const config = require("../../config/constants");

/**
 *Fetch user details
 * @param {String} id  - MongoDB ID of the user
 * @returns {Object} user - User details of the user
 * @returns {String} user._id - MongoDB ID of the use
 * @returns {String} user.name - Name of the user
 * @returns {String} user.username - Username of the user
 * @returns {String} user.email - Email ID of the user
 * @returns {String} user.gender - Gender of the user
 * @returns {String} user.bio - User profile description
 * @returns {String} user.clientId - Client ID of the users App
 * @returns {Object} user.phone - Contact number details
 * @returns {String} user.phone.number - Mobile number of the user
 * @returns {String} user.phone.countryCode - Country code of the users number
 */
module.exports.getUser = async id => {
  try {
    let user = await User.findOne(
      { _id: id },
      {
        password: 0,
        refreshToken: 0,
        authyId: 0,
        verified: 0,
        complete: 0,
        role: 0,
        deviceId: 0,
        profilePhoto: 0,
        "email.token": 0,
        "email.verified": 0,
        "username.history": 0,
        "phone.verified": 0
      }
    );
    if (!user) {
      throw new Error("User not found");
    }
    user.phone = user.phone.countryCode + user.phone.number;
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports.addUser = async (user, headers) => {
  try {
    console.log(user);
    let newUser = new User(user);
    const pass = await newUser.generateHash(user.password);
    const username = { current: user.username, history: [user.username] };
    const deviceId = { current: headers.deviceid, devices: [headers.deviceid] };
    const clientId = deviceId.current.replace(/:/g, "") + Date.now();
    newUser.password = { current: pass };
    newUser.email.data = user.email;
    newUser.phone.countryCode = user.phone.countryCode;
    newUser.phone.number = user.phone.number;
    newUser.username = username;
    newUser.deviceId = deviceId;
    newUser.clientId = clientId;
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw error;
  }
};

module.exports.registerUser = async (userId, details, token) => {
  try {
    // if user.phoneNumber is different
    const existingUser = await User.findOne({
      _id: userId
    });
    if (!existingUser) {
      throw new Error(
        "Query doesn't match, make sure the request body is right"
      );
    }
    if (!existingUser.verified) {
      throw new Error("User not verified");
    }
    existingUser.refreshToken = await existingUser.generateHash(token);
    await existingUser.set(details);
    existingUser.complete = true;
    const registeredUser = await existingUser.save();
    return registeredUser;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteUser = async userId => {
  try {
    let result = await User.remove({ _id: userId });
    console.log(result);
    if (!result.n) throw new Error("User not found");
    if (!result.ok) throw new Error("Account could not be deleted");
    let message = "Succesfully deleted account";
    return message;
  } catch (error) {
    throw error;
  }
};

module.exports.addNewDevice = async (userId, deviceId) => {
  try {
    const result = await User.updateOne(
      { _id: userId },
      { $push: { "deviceId.devices": deviceId } }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.changeCurrentDevice = async (userId, deviceId) => {
  try {
    const result = await User.updateOne(
      { _id: userId },
      { $set: { "deviceId.current": deviceId } }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.updateClientId = async (userId, deviceId) => {
  try {
    const result = await User.updateOne(
      { _id: userId },
      { $set: { clientId: deviceId.replace(/:/g, "") + Date.now() } }
    );
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports.changeUserName = async details => {
  try {
    console.log(details);
    let user = await User.findOne({
      "username.current": details.currentUsername
    });
    if (!user) {
      throw new Error("User not found");
    }
    if (user.username === details.newUsername) {
      throw new Error("New username cannot be old username");
    }
    let newUser = await User.findOne({
      "username.current": details.newUsername
    });
    if (newUser) {
      throw new Error("Username should be unique");
    }
    const result = await User.updateOne(
      { "username.current": details.currentUsername },
      {
        $set: { "username.current": details.newUsername },
        $push: { "username.history": details.newUsername }
      },
      { new: true }
    );
    return result.ok === 1
      ? "Successfully changed username"
      : "Error in changing username";
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports.changePassword = async (details, username) => {
  try {
    const currentPassword = details.currentPassword;
    const newPassword = details.newPassword;
    const confirmNewPassword = details.confirmNewPassword;

    let user = await User.findOne({
      "username.current": username
    });
    if (!user) {
      throw new Error("User not found!");
    }
    if (!user.comparePassword(currentPassword)) {
      throw new Error("Incorrect Password");
    }
    if (
      !(newPassword === confirmNewPassword && currentPassword !== newPassword)
    ) {
      throw new Error("Password Cannot Be Same As the Old One");
    }
    const result = await User.updateOne(
      { "username.current": username },
      {
        $set: {
          "password.current": await user.generateHash(newPassword),
          "password.previous": await user.generateHash(currentPassword)
        }
      },
      { new: true }
    );
    return result.ok === 1
      ? "Successfully changed password"
      : "Error in changing password";
  } catch (error) {
    throw error;
  }
};

module.exports.resetPassword = async options => {
  try {
    console.log(options);
    if (options.newPassword !== options.confirmNewPassword) {
      throw new Error("Passwords Dont Match");
    }
    let user = await User.findById(options.payload.id);
    if (!user) {
      throw new Error("User Not Found");
    }
    if (user.comparePassword(options.newPassword)) {
      throw new Error("Password Same As Old Password");
    }
    let newPassword = await user.generateHash(options.newPassword);
    let result = await User.findByIdAndUpdate(options.payload.id, {
      $set: {
        "password.current": newPassword,
        "password.previous": user.password.current
      }
    });
    return result ? "Password Reset Done" : "Could Not Reset Password";
  } catch (error) {
    throw error;
  }
};

/**
 * Checks if the user is verified or not, serves as helper
 * to login middleware
 * @param {String} username
 * @returns {Boolean}
 */
module.exports.checkVerification = async username => {
  try {
    const user = await User.findOne({
      "username.current": username
    });

    if (!user) {
      throw new Error("User not found");
    }
    return user.verified;
  } catch (error) {
    throw error;
  }
};

module.exports.sendVerifyEmail = async userId => {
  try {
    let user = await User.findOne({ _id: userId });
    if (!user) {
      throw new Error("User Not Found");
    }
    if (user.verified === true) {
      throw new Error("User Is Already Verified");
    }
    let token = userId + Date.now();
    console.log(token);
    user.email.token.data = token;
    user.email.token.expiry = Date.now() + 600000;
    await user.save();
    let url = config.DOMAIN_NAME + "/auth/verify-email/" + token;
    let opts = {
      email: user.email.data,
      url
    };
    await mailer.sendMail(opts);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports.verifyEmail = async token => {
  try {
    let user = await User.findOne({ "email.token.data": token });
    if (!user) {
      throw new Error("Email Not Verified");
    }
    if (Date.now() > user.email.token.expiry) {
      throw new Error("Email Not Verified");
    }
    user.email.verified = true;
    user.verified = true;
    await user.save();
    return true;
  } catch (error) {
    throw error;
  }
};
