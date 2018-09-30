const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/constants");

const Client = require("authy-client").Client;
const authy = new Client({ key: config.TWILIO_AUTHY_KEY });

const twilioClient = require("twilio")(
  config.TWILIO_ACCOUNT_SID,
  config.TWILIO_AUTH_TOKEN
);

const passwordSchema = new mongoose.Schema({
  current: {
    type: String,
    required: true
  },
  previous: {
    type: String,
    default: null
  }
});

// classify into subcategories for easy modification
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      current: {
        type: String,
        required: true,
        unique: true
      },
      history: []
    },
    email: {
      data: {
        type: String,
        required: true,
        unique: true
      },
      token: {
        data: {
          type: String,
          default: null,
          unique: true
        },
        expiry: {
          type: Date
        }
      },
      verified: {
        type: Boolean,
        default: false
      }
    },
    password: passwordSchema,
    phone: {
      countryCode: {
        type: String,
        required: true
      },
      number: {
        type: String,
        required: true,
        unique: true
      },
      verified: {
        type: Boolean,
        default: false
      }
    },
    bio: {
      type: String
    },
    gender: {
      type: String,
      enum: ["Male", "Female"]
    },
    profilePhoto: {
      type: String
    },
    role: {
      type: String,
      enum: ["admin", "public"],
      default: "public"
    },
    refreshToken: {
      type: String
    },
    deviceId: {
      current: {
        type: String
      },
      devices: {
        type: Array
      }
    },
    clientId: {
      type: String
    },
    complete: {
      type: Boolean,
      default: false
    },
    verified: {
      type: Boolean,
      default: false
    },
    authyId: String
  },
  { timestamps: true }
);

userSchema.methods.generateHash = async function(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password.current);
};

userSchema.methods.compareRefreshToken = function(refreshToken) {
  return bcrypt.compareSync(refreshToken, this.refreshToken);
};

/**
 * Sends a token after 2FA via authy
 * @param {Object} user
 */
const sendToken = async function(user) {
  try {
    const response = await authy.requestSms({ authyId: user.authyId });
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Verifies for a user and sends the token
 */
userSchema.methods.sendAuthyToken = async function() {
  try {
    if (!this.authyId) {
      const response = await authy.registerUser({
        email: this.email.data,
        phone: this.phone.number,
        countryCode: this.phone.countryCode
      });
      if (!response.user) {
        throw new Error("Error registering user");
      }
      this.authyId = response.user.id;
      const updatedUser = await this.save();
      return sendToken(updatedUser);
    }
    return sendToken(this);
  } catch (error) {
    throw error;
  }
};

/**
 * Verifies the authy token with the received otp
 * @param {String} otp
 */
userSchema.methods.verifyAuthyToken = async function(otp) {
  try {
    const response = await authy.verifyToken({
      authyId: this.authyId,
      token: otp
    });
    this.phone.verified = true;
    await this.save();
    return response.message;
  } catch (error) {
    throw error;
  }
};

/**
 * Sends a message to the user
 * @param {String} message
 * @param {Function} successCallback
 * @param {Function} errorCallback
 */
userSchema.methods.sendMessage = async function(message) {
  try {
    const toNumber = `+${this.countryCode}${this.phone}`;
    const messageResponse = await twilioClient.messages.create({
      to: toNumber,
      from: config.twilioNumber,
      body: message
    });
    return messageResponse;
  } catch (error) {
    throw error;
  }
};

module.exports = mongoose.model("User", userSchema);
