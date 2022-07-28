const express = require("express");
const session = require("express-session");
const router = require("./src/routes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  session({
    secret: "supersecret",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 60000,
    },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Listen port ${PORT}`);
});
