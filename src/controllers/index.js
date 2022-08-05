const users = require("./users");

module.exports = {
  login: users.login,
  destroy: users.destroy,
  insert: users.insert,
  failLogin: users.failLogin,
  failRegister: users.failRegister,
  myUser: users.myUser,
};
