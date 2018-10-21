module.exports = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // console.log(req.headers);
    console.log("Not logged in");
    console.log(req.isAuthenticated());
    return next(new Error("Not Logged In"));
  }
  return next();
};
