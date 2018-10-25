const User = require("../models/user");
const Student = require("../models/student");
const Faculty = require("../models/faculty");
const Organization = require("../models/organization");
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
              let role = req.body.role;
              newUser.password = newUser.generateHash(password);
              newUser.role = role;
              let result = await newUser.save();
              if (role === "student") {
                let newStudent = new Student();
                newStudent.userId = result._id;
                newStudent.regNo = req.body.regNo;
                newStudent.skills = req.body.skills;
                newStudent.gender = req.body.gender;
                await newStudent.save();
              }
              if (role === "organization") {
                let newOrganization = new Organization();
                newOrganization.userId = result._id;
                newOrganization.domain = req.body.domain;
                newOrganization.moto = req.body.moto;
                await newOrganization.save();
              }
              if (role === "faculty") {
                let newFaculty = new Faculty();
                newFaculty.userId = result._id;
                newFaculty.school = req.body.school;
                newFaculty.gender = req.body.gender;
                await newFaculty.save();
              }
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
