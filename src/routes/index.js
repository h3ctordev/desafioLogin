const routes = require("express").Router();
const passport = require("passport");
const checkAuth = require("../middlewares/checkAuth");
const {
  login,
  insert,
  destroy,
  failLogin,
  failRegister,
  myUser,
} = require("../controllers");

routes.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/fail-login" }),
  login
);
routes.post(
  "/register",
  passport.authenticate("register", { failureRedirect: "/fail-register" }),
  insert
);

routes.get("/logout", destroy);

routes.get("/fail-login", failLogin);
routes.get("/fail-register", failRegister);
// Prueba
routes.get("/", checkAuth, myUser);

module.exports = routes;
