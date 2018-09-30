var express = require("express");
var router = express.Router();
var path = require("path");
var errHanlder = require("../utilities/handleError");

/**
 * @api {get} /api/admin Admin View
 * @apiName Admin View
 * @apiGroup Admin
 *
 * @apiDescription This route will allow the admin with all his necessary details to viewed on the admin page.
 *
 * @apiSuccess {Boolean} success Success Status.
 * @apiSuccess {JSON} files List of uploaded files.
 */
router.get("/", (req, res) => {
  file
    .find({})
    .populate("userId")
    .exec()
    .then(result => {
      res.json({ success: true, files: result });
    })
    .catch(err => errHanlder(res, err));
});

/**
 * @api {post} /api/admin Ananlyse File
 * @apiName AnalyseFile
 * @apiGroup Admin
 *
 * @apiDescription This route will allow the admin to approve or reject the uploaded files which are pending.
 *
 * @apiParam {String} status Status of the file approved/rejected
 * @apiParam {String} id Name of the file
 *
 * @apiSuccess {Boolean} success Success Status.
 * @apiSuccess {JSON} result Status modification result.
 */

router.post("/", (req, res) => {
  file
    .findByIdAndUpdate(req.body.id, { $set: { status: req.body.status } })
    .exec()
    .then(result => {
      res.json({ success: true, result: result });
    })
    .catch(err => errHanlder(res, err));
});

module.exports = router;
