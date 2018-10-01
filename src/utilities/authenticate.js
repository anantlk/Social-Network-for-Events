module.exports = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next(new Error("Not Logged In"));
  }
  return next();
};
