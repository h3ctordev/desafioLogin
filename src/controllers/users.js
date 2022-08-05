const User = require("../models/users");

const login = (req, res) => {
  console.log(req.user);
  console.log(req.isAuthenticated());
  return res.status(200).json({ status: "OK", message: "Login successfully" });
};

const insert = (req, res) => {
  console.log(req);
  return res.status(200).json({
    status: "OK",
    message: `Register successfully user ${req.session.passport.user}`,
  });
};

const destroy = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ error: err });
    res.status(200).json({ status: "OK", message: "Logged Out" });
  });
};

const myUser = async (req, res) => {
  const { password, __v, ...data } = req.user;
  return res.status(200).json({ status: "OK", data });
};
const failLogin = (req, res) => {
  res.status(401).json({ status: "Fail", message: "Credentials No Found" });
};
const failRegister = (req, res) => {
  res.status(401).json({ status: "Fail", message: "User exist" });
};

module.exports = {
  login,
  insert,
  destroy,
  failLogin,
  failRegister,
  myUser,
};
