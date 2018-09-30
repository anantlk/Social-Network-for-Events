const sgMail = require("@sendgrid/mail");
const config = require("../../config/constants");

/**
 * Sends an email
 * @param {Object} details
 * @param {String} details.to
 * @param {String} details.from
 * @param {String} details.subject
 * @param {String} details.text
 * @param {String} details.html
 */
module.exports.sendMail = async details => {
  try {
    // change to constants
    sgMail.setApiKey(config.SENDGRID_API_KEY);
    const msg = {
      to: details.to,
      from: details.from,
      subject: details.subject,
      text: details.text,
      html: details.html
    };
    await sgMail.send(msg);
    return;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
