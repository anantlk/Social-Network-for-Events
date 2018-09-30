const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const config = require("../config/constants");

let opts = {};

module.exports = passport => {
  try {
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.ACCESS_TOKEN_SECRET || "";
    // console.log(opts.secretOrKey);

    passport.serializeUser((user, done) => {
      done(null, user);
    });

    passport.use(
      new JwtStrategy(opts, (jwtPayload, done) => {
        let expirationDate = new Date(jwtPayload.exp * 1000);
        if (expirationDate < new Date()) {
          return done(null, false);
        }
        let user = jwtPayload;
        done(null, user);
      })
    );
  } catch (error) {
    throw error;
  }
};
