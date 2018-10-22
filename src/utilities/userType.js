module.exports.isStudent = (req, res, next) => {
  if (req.user.role !== "student") {
    return next(new Error("Not a student"));
  }
  return next();
};

module.exports.isOrganization = (req, res, next) => {
  if (req.user.role !== "organization") {
    return next(new Error("Not a Oragnization"));
  }
  return next();
};

module.exports.isFaculty = (req, res, next) => {
  if (req.user.role !== "faculty") {
    return next(new Error("Not a Faculty"));
  }
  return next();
};
