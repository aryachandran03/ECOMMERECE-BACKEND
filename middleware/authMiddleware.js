const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  const token = req.headers.authorization;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;

  next();
};

exports.admin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.json({ message: "Admin only" });
  }
  next();
};