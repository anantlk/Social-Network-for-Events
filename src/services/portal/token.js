const randToken = require("rand-token");
const jwt = require("jsonwebtoken");
const config = require("../../config/constants");

module.exports.generateRefreshToken = () => {
  try {
    return randToken.uid(256);
  } catch (error) {
    throw error;
  }
};

module.exports.generateAccessToken = user => {
  try {
    let secret = config.ACCESS_TOKEN_SECRET;
    return jwt.sign(user, secret, {
      expiresIn: 300
    });
  } catch (error) {
    throw error;
  }
};

module.exports.verifyResetToken = async token => {
  try {
    let secret = config.ACCESS_TOKEN_SECRET;
    let payload = await jwt.verify(token, secret);
    return payload;
  } catch (error) {
    console.log("Token Expired");
    throw error;
  }
};

module.exports.updateRefreshToken = async (userId, tokenHash, User) => {
  try {
    let updatedUser = await User.updateOne(
      { _id: userId },
      { $set: { refreshToken: tokenHash } },
      { new: true }
    );
    return updatedUser;
  } catch (error) {
    throw error;
  }
};
