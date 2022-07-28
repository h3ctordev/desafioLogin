const login = (req, res, next) => {
  if (req.session?.name) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized user, you need login" });
  }
};

module.exports = {
  login,
};
