const sgMail = require("@sendgrid/mail");
const config = require("../../config/constants");

/**
 * Sends email to the user
 * @param {Object} details - objects containing parameters for the send email
 * @param {String} details.email - email id of the user
 * @param {String} details.url - url of the message content sent to the user
 */

module.exports.sendMail = async details => {
  try {
    // change to constants
    sgMail.setApiKey(config.SENDGRID_API_KEY);
    console.log(details);
    const msg = {
      to: details.email,
      from: "team.sappa.app@gmail.com",
      subject: "Sappa App Reset Password",
      text: "Click this link to reset password",
      html:
        "<p>Click this link to reset password:<a href='" +
        details.url +
        "'>" +
        details.url +
        "</a></p>"
    };
    await sgMail.send(msg);
    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
