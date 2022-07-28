const routes = require("express").Router();
const { login } = require("../middlewares");
const { home, insert, destroy } = require("../controllers");

routes.get("/", login, home);

routes.post("/login", insert);

routes.get("/logout", destroy);

module.exports = routes;
