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
    secret: "supersecret",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 600000,
    },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.listen(PORT, async () => {
  console.log(`Listen port ${PORT}`);
  await connect();
});
