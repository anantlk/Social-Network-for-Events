// use a custom /api router
const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/user");
const database = require("../../services/portal/users");
const token = require("../../services/portal/token");
const mailer = require("../../services/portal/mailer");
const config = require("../../config/constants");

/**
 *
 * @api {POST} /api/auth/pre-register Add User
 * @apiName Pre-Register
 * @apiGroup Authentication
 * @apiVersion  1.0.0
 *
 * @apiDescription Add user(unverified) to the database
 *
 * @apiParam  {String} name Name of the user
 * @apiParam  {String} username Unique username of the user
 * @apiParam  {String} email Email of the user
 * @apiParam  {String} password Password of the user
 * @apiParam  {String} confirmPassword Password of the user same as the password field
 * @apiParam  {Object} phone Contact number details of the user
 * @apiParam  {String} phone.number Mobile number of the user
 * @apiParam  {String} phone.countryCode Country code of the user
 *
 * @apiHeader {String} Content-Type Request body data format
 * @apiHeader {String} deviceid Device mac address of the phone
 *
 * @apiSuccess (200) {Boolean} success true if user is added to the database
 * @apiSuccess (200) {Object} userDet Details of the user
 * @apiSuccess (200) {String} userDet.id MongoId of the user
 * @apiSuccess (200) {String} userDet.name Name of the user
 * @apiSuccess (200) {String} userDet.username Username  of the user
 * @apiSuccess (200) {String} userDet.email Emails of the user
 * @apiSuccess (200) {String} userDet.phone Contact number of the user
 * @apiSuccess (200) {String} userDet.clientId Client ID of the user's app
 * @apiSuccess (200) {String} message Added user to the database
 * @apiSuccess (200) {Boolean} verified false
 *
 * @apiError success false
 * @apiError message Error message
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     name:"sappa_app"
 *     username:"sappa"
 *     email:"abc@gmail.com"
 *     password:"sappa_app@123"
 *     phone:{
 *        number:"9831902132"
 *        countryCode:"91"
 *     }
 * }
 *
 * @apiHeaderExample {json} Header-Example:
 * {
 *      Content-Type:application/json
 *      deviceid:10:10:2022:2200
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     success:true
 *     userDet:{
 *        id:"12321123213"
 *        name:"sappa"
 *        username:"sappa_app"
 *        email:"sappa_app@gmail.com"
 *        phone:"919888282222"
 *        clientId:"12311311232321"
 *     }
 *     message:"Added user to the database"
 *     verified:true
 * }
 *
 * @apiErrorExample {json} Error-Response:
 * {
 *     success:false
 *     message:"User already exists"
 * }
 *
 *
 */
router.post("/pre-register", async (req, res, next) => {
  try {
    if (!req.body.username) {
      throw new Error("Insufficient Request body");
    }
    let user = await User.findOne({ "username.current": req.body.username });
    if (user) {
      throw new Error("User already exists");
    }
    console.log(req.body);
    user = await database.addUser(req.body, req.headers);
    let userDet = {
      id: user._id,
      name: user.name,
      username: user.username.current,
      email: user.email.data,
      phone: user.phone.countryCode + user.phone.number,
      clientId: user.clientId
    };
    return res.status(200).json({
      success: true,
      userDet,
      message: "Added user to the database",
      verfied: false
    });
  } catch (error) {
    return next(error);
  }
});

/**
 *
 * @api {POST} /api/auth/complete-registration Register User
 * @apiName Complete Registration
 * @apiGroup Authentication
 * @apiVersion  1.0.0
 * @apiDescription Register user(verified) for the app
 *
 * @apiParam  {String} bio Description of users profile
 * @apiParam  {String} gender Male/Female
 * @apiParam  {String} profilePhoto url for the profile photo
 *
 * @apiHeader {String} Content-Type Request body data format
 * @apiHeader {String} id mongoDB ID of the user
 *
 *
 * @apiSuccess (200) {Boolean} success true if user is added to the database
 * @apiSuccess (200) {String} accessToken Temporary token to verify user on the server
 * @apiSuccess (200) {string} refreshToken Token to be used when access token gets expired
 *
 * @apiError success false
 * @apiError message Error message
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     bio:"I am a developer"
 *     gender:"Male"
 *     profilePhoto:"secureUrl@cloudianry.com"
 * }
 *
 * @apiHeaderExample {json} Header-Example:
 * {
 *      Content-Type:application/json
 *      id:534222234224
 * }
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     success:true
 *     accessToken:"aksdnajsndadasadsasa"
 *     refreshToken:"asaaddasdadadad"(256bit)
 * }
 *
 * @apiErrorExample {json} Error-Example:
 * {
 *      success:false
 *      message:"User not verified"
 * }
 *
 */

router.post("/complete-registration", async (req, res, next) => {
  try {
    if (!req.headers.id) {
      throw new Error("Insufficient Request body");
    }
    const refreshToken = token.generateRefreshToken();
    const user = await database.registerUser(
      req.headers.id,
      req.body,
      refreshToken
    );
    const payload = {
      clientId: user.clientID,
      username: user.username
    };
    const accessToken = token.generateAccessToken(payload);
    return res.status(200).json({
      success: true,
      accessToken,
      refreshToken
    });
  } catch (error) {
    return next(error);
  }
});

/**
 *
 * @api {POST} /api/auth/login Login User
 * @apiName  Login
 * @apiGroup Authentication
 * @apiVersion  1.0.0
 * @apiDescription Login the user(verified) user to the app
 *
 * @apiParam  {String} username username of the user
 * @apiParam  {String} password password of the user
 *
 * @apiHeader {String} Content-Type Request body data format
 * @apiHeader {String} deviceid Device mac address of the phone
 *
 *
 * @apiSuccess (200) {Boolean} success true if user is added to the database
 * @apiSuccess (200) {String} accessToken Temporary token to verify user on the server
 * @apiSuccess (200) {string} refreshToken Token to be used when access token gets expired
 *
 * @apiError success false
 * @apiError message Error message
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     username:"sappa_app"
 *     password:"hello_world"
 * }
 *
 * @apiHeaderExample {json} Header-Example:
 * {
 *      Content-Type:application/json
 *      deviceid:10:10:2022:2200
 * }
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     success:true
 *     accessToken:"aksdnajsndadasadsasa"
 *     refreshToken:"asaaddasdadadad"(256bit)
 * }
 *
 * @apiErrorExample {json} Error-Example:
 * {
 *      success:false
 *      message:"Incorrect Password"
 *
 * }
 *
 */

router.post("/login", auth.isVerified, async (req, res, next) => {
  try {
    const device = req.headers.deviceid;
    const user = await User.findOne({ "username.current": req.body.username });
    if (!user) {
      throw new Error("User Not Found!");
    }
    if (!user.comparePassword(req.body.password)) {
      throw new Error("Incorrect Password!");
    }
    if (user.deviceId.devices.indexOf(device) == -1) {
      await database.addNewDevice(user._id, device);
    }
    if (user.deviceId.current !== device) {
      await database.changeCurrentDevice(user._id, device);
      let opts = {
        email: user.email.data,
        url: device
      };
      await mailer.sendMail(opts);
    }
    await database.updateClientId(user._id, req.headers.deviceid);
    let refreshToken = token.generateRefreshToken();
    let refreshTokenHash = await user.generateHash(refreshToken);
    await token.updateRefreshToken(user._id, refreshTokenHash, User);
    let payload = {
      clientId: user.clientID,
      username: user.username
    };
    let accessToken = token.generateAccessToken(payload);
    return res.status(200).json({
      success: true,
      accessToken,
      refreshToken
    });
  } catch (error) {
    return next(error);
  }
});

/**
 *
 * @api {POST} /api/auth/token Regenerate Access Token
 * @apiName  Regenerate Access Token
 * @apiGroup Authentication
 * @apiVersion  1.0.0
 * @apiDescription Generate access token on expiry
 *
 * @apiHeader {String} Content-Type Request body data format
 * @apiHeader {String} id mongo id
 * @apiHeader {String} clientid clientId of the user
 * @apiHeader {String} refreshToken Permanent token to regenerate access token
 *
 *
 * @apiSuccess (200) {String} accessToken Temporary token to verify user on the server
 *
 *
 * @apiError success false
 * @apiError message Error message
 *
 * @apiHeaderExample {json} Header-Example:
 * {
 *      Content-Type:application/json
 *      clientid:120301312301312303
 *      id:192831381983138
 *      refreshToken:192321831(256bit)
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     accessToken:"aksdnajsndadasadsasa"
 * }
 *
 * @apiErrorExample {json} Error-Example:
 * {
 *     success:false
 *     message:"Invalid Refresh Token"
 * }
 *
 */
router.post("/token", async (req, res, next) => {
  try {
    let id = req.headers.id;
    let clientId = req.headers.clientid;
    console.log(clientId);
    let refreshToken = req.headers.refreshtoken;
    let user = await User.findOne({
      $and: [{ _id: id }, { clientId: clientId }]
    });
    if (!user) {
      throw new Error("User Not Found");
    }
    if (!user.compareRefreshToken(refreshToken)) {
      throw new Error("Invalid Refresh Token");
    }
    let payload = {
      clientId: user.clientId,
      username: user.username
    };
    let accessToken = token.generateAccessToken(payload);
    res.status(200).json({ accessToken });
  } catch (error) {
    return next(error);
  }
});

/**
 *
 * @api {POST} /api/auth/forget-password Forgot Password
 * @apiName  Forgot Password
 * @apiGroup Authentication
 * @apiVersion  1.0.0
 * @apiDescription Sends password reset email to the user
 *
 * @apiParam  {String} email email id of the user
 *
 * @apiHeader {String} Content-Type Request body data format
 *
 *
 * @apiSuccess (200) {Boolean} success true if user is added to the database
 * @apiSuccess (200) {String} message Mail Sent
 *
 * @apiError success false
 * @apiError message Error message
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     email:abc@gmail.com
 * }
 *
 * @apiHeaderExample {json} Header-Example:
 * {
 *    Content-Type:application/json
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     success:true
 *     message:"Mail Sent"
 * }
 *
 * @apiErrorExample {json} Error-Example:
 * {
 *      success:false
 *      message:"Invalid Email Id"
 * }
 *
 */
router.post("/forget-password", async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error("Invalid Email Id");
    }
    const payload = {
      id: user._id,
      email: user.email
    };
    let resetToken = token.generateAccessToken(payload);
    let url = config.DOMAIN_NAME + "/auth/reset-password/" + resetToken;
    let opts = {
      email: req.body.email,
      url
    };
    await mailer.sendMail(opts);
    res.status(200).json({ success: true, message: "Mail Sent" });
  } catch (error) {
    console.log(error);
    return next(error);
  }
});

/**
 *
 * @api {GET} /api/auth/reset-password/:token Verify Reset Password Token
 * @apiName  Verify Reset Password Token
 * @apiGroup Authentication
 * @apiVersion  1.0.0
 * @apiDescription Verifies the reset password is valid or not
 *
 * @apiSuccess success true
 * @apiSuccess message Success message
 *
 * @apiError success false
 * @apiError message Error message
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     success:true
 *     message:"verified"
 * }
 *
 * @apiErrorExample {json} Error-Example:
 * {
 *     success:false
 *     message:"Token Expired"
 * }
 *
 */
router.get("/reset-password/:token", async (req, res, next) => {
  try {
    await token.verifyResetToken(req.params.token);
    res.status(200).json({ success: true, message: "verfied" });
  } catch (error) {
    return next(error);
  }
});

/**
 *
 * @api {POST} /api/auth/reset-password/:token Reset Password
 * @apiName  Reset Password
 * @apiGroup Authentication
 * @apiVersion  1.0.0
 * @apiDescription Resets the password of the user
 *
 * @apiParam  {String} newPassword new password of the user
 * @apiParam  {String} confirmNewPassword same as the newPassword of the user
 *
 * @apiHeader {String} Content-Type Request body data format
 *
 *
 * @apiSuccess (200) {Boolean} success true if user is added to the database
 * @apiSuccess (200) {String} message status of the password reset
 *
 *
 * @apiError success false
 * @apiError message Error message
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     newPassword:"abcas@212"
 *     confirmNewPassword:"abcas@212"
 * }
 *
 * @apiHeaderExample {json} Header-Example:
 * {
 *     Content-Type:application/json
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     success:true
 *     message:"Password Reset Done"
 * }
 *
 *
 * @apiErrorExample {json} Error-Example:
 * {
 *    success:false
 *    message:"Token Expired"
 * }
 *
 *
 */

router.post("/reset-password/:token", async (req, res, next) => {
  try {
    let opts = {
      newPassword: req.body.newPassword,
      confirmNewPassword: req.body.confirmNewPassword
    };
    const payload = await token.verifyResetToken(req.params.token);
    opts.payload = payload;
    let message = await database.resetPassword(opts);
    res.status(200).json({ success: true, message });
  } catch (error) {
    return next(error);
  }
});

/**
 *
 * @api {POST} /api/auth/send-verify-message Send Verify Message
 * @apiName  Send Verify Message
 * @apiGroup Authentication
 * @apiVersion  1.0.0
 * @apiDescription Sends Email/OTP to the registered users
 *
 * @apiHeader  {String} Content-Type Request body data format
 * @apiHeader  {String} username username of the user
 *
 * @apiSuccess (200) {Boolean} success true if user is added to the database
 * @apiSuccess (200) {String} message Awaiting User Verification
 *
 * @apiError success false
 * @apiError message Error message
 *
 *
 * @apiHeaderExample  {json} Request-Example:
 * {
 *    Content-Type:application/json
 *    username:sappa_app
 * }
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     success:true
 *     message:"Awaiting User Verification"
 * }
 *
 * @apiErrorExample {json} Error-Example:
 * {
 *     success:false
 *     message:"Error regiestring user"
 * }
 *
 */
router.post("/send-verify-message", async (req, res, next) => {
  try {
    let user = await User.findOne({ "username.current": req.headers.username });
    // verify user
    user.sendAuthyToken();
    console.log("otp send");
    database.sendVerifyEmail(user._id);
    res
      .status(200)
      .json({ success: true, message: "Awaiting User Verification" });
  } catch (error) {
    return next(error);
  }
});

/**
 *
 * @api {POST} /api/auth/verify-otp Verify OTP
 * @apiName  Verify OTP
 * @apiGroup Authentication
 * @apiVersion  1.0.0
 * @apiDescription Checks the validity of the OTP sent to the users mobile
 *
 * @apiParam  {String} code OTP sent to the user
 *
 * @apiHeader  {String} Content-Type Request body data format
 * @apiHeader  {String} username username of the user
 *
 * @apiSuccess (200) {Boolean} success true if user is added to the database
 * @apiSuccess (200) {String} message status of the OTP Verification
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     code:1231231
 * }
 *
 * @apiHeaderExample  {json} Request-Example:
 * {
 *     Content-Type:application/json
 *     username:sappa_app
 * }
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     success:true
 *     message:"OTP Verified"
 * }
 *
 *
 *
 */

router.post("/verify-otp", async (req, res, next) => {
  try {
    if (!req.headers.username && !req.body.code) {
      throw new Error("Invalid Request body");
    }

    let user = await User.findOne({ "username.current": req.headers.username });
    if (!user) {
      throw new Error("User not found");
    }
    const response = await user.verifyAuthyToken(req.body.code);
    return res.status(200).json({ success: true, response: response });
  } catch (error) {
    return next(error);
  }
});

/**
 *
 * @api {GET} /api/auth/verify-email/:token Verify Email
 * @apiName  Verify Email
 * @apiGroup Authentication
 * @apiVersion  1.0.0
 * @apiDescription Checks the validity of the email id of the user
 *
 * @apiSuccess (200) {Boolean} success true if user is added to the database
 * @apiSuccess (200) {String} message status of the OTP Verification
 *
 * @apiError success false
 * @apiError message Error message
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     success:true
 *     message:"Email Verified"
 * }
 *
 * @apiErrorExample {json} Error-Example:
 * {
 *     success:false
 *     message:"Email Not Verified"
 * }
 *
 *
 */

router.get("/verify-email/:token", async (req, res, next) => {
  try {
    await database.verifyEmail(req.params.token);
    res.status(200).json({ success: true, message: "Email Verified" });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
