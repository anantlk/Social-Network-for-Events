const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;

module.exports = passport => {
  console.log("In Passport js");
  passport.serializeUser((user, done) => {
    console.log("In serialize");
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log("In deserialize");
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use(
    "newRegister",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, email, password, done) => {
        console.log(req.body);
        process.nextTick(async () => {
          try {
            let user = await User.findOne({ email: email });
            if (user) {
              throw Error("User Already Exists!");
            } else {
              console.log("Saving data");
              let newUser = new User(req.body);
              newUser.password = newUser.generateHash(password);
              newUser.name = req.body.firstname + " " + req.body.lastname;
              let result = await newUser.save();
              return done(null, result);
            }
          } catch (error) {
            return done(error);
          }
        });
      }
    )
  );

  passport.use(
    "login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, email, password, done) => {
        process.nextTick(async () => {
          try {
            let user = await User.findOne({ email: email });
            if (!user) {
              throw Error("User Doesn't Exist");
            }
            if (!user.validPassword(password)) {
              throw Error("Invalid Password");
            }
            return done(null, user);
          } catch (error) {
            return done(error);
          }
        });
      }
    )
  );
};
