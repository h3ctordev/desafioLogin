require("dotenv").config();
const express = require("express");
const session = require("express-session");
const router = require("./src/routes");

const { connect } = require("./src/config/db");

const passport = require("passport");
require("./src/middlewares/auth");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  session({
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: +process.env.COOKIE_MAX_AGE,
    },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", router);

app.listen(PORT, async () => {
  console.log(`Listen port ${PORT}`);
  await connect();
});
