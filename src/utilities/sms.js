const config = require("../config/constants");
const patterns = require("../config/patterns");
const accountSid = config.TWILIO_ACCOUNT_SID;
const authToken = config.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

/**
 * Generic sms sending utility
 * @param {String} body should have maximum 1600 characters
 * @param {String} from should have country code
 * @param {String} to should have country code
 */
module.exports.sendSMS = async (body, from, to) => {
  try {
    if (
      !patterns.INTERNATIONAL_PHONE_NUMBER.test(from) &&
      !patterns.INTERNATIONAL_PHONE_NUMBER.test(to)
    ) {
      throw new Error("Invalid Phone number format");
    }
    if (body.length >= 1600) {
      throw new Error("Excess Message length, maximum is 1600 characters");
    }
    await client.messages
      .create({
        body: body,
        from: from,
        to: to
      })
      .then(message => console.log(message))
      .catch(err => Promise.reject(err))
      .done();
    return "Message Sent Successfully";
  } catch (error) {
    throw error;
  }
};
