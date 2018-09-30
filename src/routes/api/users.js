const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const database = require("../../services/portal/users");

router.use(auth.isLoggedIn);

/**
 *
 * @api {GET} /api/users/get-user Get User
 * @apiName  Get User
 * @apiGroup User
 * @apiVersion  1.0.0
 * @apiDescription Fetches the user details
 *
 * @apiHeader {String} Authorization access token of the user
 *
 * @apiSuccess (200) {Object} user user details
 * @apiSuccess (200) {Object} user Details of the user
 * @apiSuccess (200) {String} user._id MongoId of the user
 * @apiSuccess (200) {String} user.name Name of the user
 * @apiSuccess (200) {String} user.username Username  of the user
 * @apiSuccess (200) {String} user.email Emails of the user
 * @apiSuccess (200) {String} user.bio Description of the user's profile
 * @apiSuccess (200) {String} user.gender Gender of the user
 * @apiSuccess (200) {Object} user.phone Contact number of the user
 * @apiSuccess (200) {String} user.phone.countryCode Country code of the user's mobile number
 * @apiSuccess (200) {String} user.phone.number Mobile number of the user
 * @apiSuccess (200) {String} user.clientId Client ID of the user's app
 *
 * @apiError success false
 * @apiError message Error message
 *
 * @apiHeaderExample {json} Header-Example:
 * {
 *    Authorization: Bearer asldsajdjajadadkadakdakd
 * }
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *    user: {
 *      _id:"5434353535"
 *      name:"anant",
 *      username:"sappa_app",
 *      email:"abc@gmail.com",
 *      clientId:"adsadsdsdd13133",
 *      gender:"Male",
 *      bio:"I am a developer",
 *      phone:{
 *        countryCode:"91",
 *        number:"9876543210",
 *      }
 *    }
 * }
 *
 * @apiErrorExample {json} Error-Example:
 * {
 *    success:false
 *    message:"User not found"
 * }
 *
 *
 *
 */

router.get("/get-user", async (req, res, next) => {
  try {
    let user = await database.getUser(req.headers.id);
    res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
});

/**
 *
 * @api {POST} /api/users/change-username Change Username
 * @apiName  Change Username
 * @apiGroup User
 * @apiVersion  1.0.0
 * @apiDescription To change the username of the user
 *
 * @apiParam  {String} curretUsername Current username of the user
 * @apiParam  {String} newUsername New username of the user
 *
 * @apiHeader  {String} username username of the user
 * @apiHeader  {String} Authorization Access token of the user
 *
 * @apiSuccess (200) {Boolean} success true if user is added to the database
 * @apiSuccess (200) {String} result status of the username change
 *
 *
 * @apiError success false
 * @apiError message Error message
 *
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     newUsername:sapp_app_1
 *     currentUsername:sappa_app
 * }
 *
 * @apiHeaderExample  {json} Request-Example:
 * {
 *     username:sappa_app,
 *     Authorization:Bearer dknsdjsaskadkadadada1231312dsd
 * }
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     success:true
 *     result:"Successfully changed username"
 * }
 *
 * @apiErrorExample {json} Error-Example:
 * {
 *    success:false
 *    message:"Username should be unique"
 * }
 *
 */
router.post("/change-username", async (req, res, next) => {
  try {
    let result = await database.changeUserName(req.body);
    return res.status(200).json({ success: true, result: result });
  } catch (error) {
    return next(error);
  }
});

/**
 *
 * @api {POST} /api/users/change-password Change Password
 * @apiName  Change Password
 * @apiGroup User
 * @apiVersion  1.0.0
 * @apiDescription To change the password of the user
 *
 * @apiParam  {String} curretPassword Current username of the user
 * @apiParam  {String} newPassword New password of the user
 * @apiParam  {String} confirmNewPassword Password same as the newPassword
 *
 * @apiHeader  {String} username username of the user
 * @apiHeader  {String} Authorization Access token of the user
 *
 * @apiSuccess (200) {Boolean} success true
 * @apiSuccess (200) {String} result status of the password change
 *
 * @apiError success false
 * @apiError message Error message
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     newPassword:sappa@123
 *     confirmNewPassword:sappa@123
 *     currentPassword:sappa_app@123
 * }
 *
 * @apiHeaderExample  {json} Request-Example:
 * {
 *     username:sappa_app,
 *     Authorization:Bearer dknsdjsaskadkadadada1231312dsd
 * }
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     success:true
 *     result:"Successfully changed password"
 * }
 *
 * @apiErrorExample {json} Error-Example:
 * {
 *    success:false
 *    message:"Incorrect Password"
 * }
 *
 */

router.post("/change-password", async (req, res, next) => {
  try {
    let result = await database.changePassword(req.body, req.headers.username);
    return res.status(200).json({ success: true, result: result });
  } catch (error) {
    return next(error);
  }
});

/**
 *
 * @api {POST} /api/users/delete Delete User
 * @apiName  Delete User
 * @apiGroup User
 * @apiVersion  1.0.0
 * @apiDescription Deactivate the account of the user
 *
 * @apiHeader  {String} id mongoDB Id of the user
 * @apiHeader  {String} Authorization Access token of the user
 *
 * @apiSuccess (200) {Boolean} success true
 * @apiSuccess (200) {String} result Status of the account deactivation
 *
 * @apiError success false
 * @apiError message Error message
 *
 * @apiHeaderExample  {json} Request-Example:
 * {
 *     id:"35432342342"
 *     Authorization:Bearer dknsdjsaskadkadadada1231312dsd
 * }
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     success:true
 *     result:"Successfully deleted account"
 * }
 *
 * @apiErrorExample {json} Error-Example:
 * {
 *    success:false
 *    message:"User not found"
 * }
 *
 */
router.post("/delete", async (req, res, next) => {
  try {
    let result = await database.deleteUser(req.headers.id);
    res.status(200).json({ success: true, result });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
