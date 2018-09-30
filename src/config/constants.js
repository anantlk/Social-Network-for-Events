const MONGO_URI =
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_URI_PROD
    : process.env.MONGO_URI_DEV;
const DOMAIN_NAME =
  process.env.NODE_ENV === "production"
    ? process.env.DOMAIN_NAME
    : "locahost:3000";

const MAILER_EMAIL_ID = process.env.MAILER_EMAIL_ID;
const MAILER_PASSWORD = process.env.MAILER_PASSWORD;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const ACCESS_TOKEN_LIFE = process.env.ACCESS_TOKEN_LIFE;
const SENDGRID_API_ID = process.env.SENDGRID_API_ID;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const TWILIO_AUTHY_KEY = process.env.TWILIO_AUTHY_KEY;
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;

module.exports = {
  MONGO_URI,
  MAILER_EMAIL_ID,
  MAILER_PASSWORD,
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_LIFE,
  SENDGRID_API_ID,
  SENDGRID_API_KEY,
  TWILIO_AUTHY_KEY,
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  DOMAIN_NAME
};
