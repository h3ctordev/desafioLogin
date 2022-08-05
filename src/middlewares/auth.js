// const { add, get } = require("../models/users");
const User = require("../models/users");
const pass = require("../utils/pass");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  "login",
  new LocalStrategy(
    {
      passReqToCallback: true,
      usernameField: "email",
    },
    async function (req, email, password, next) {
      try {
        const user = await User.findOne({ email: req.body.email })
          .lean()
          .exec();
        if (user && req.body.email === user.email) {
          if (pass.check(req.body.password, user.password))
            return next(null, user);
          else return next(null, false);
        } else {
          return next(null, false);
        }
      } catch (error) {
        console.error(error);
        throw next(null, false);
      }
    }
  )
);

passport.use(
  "register",
  new LocalStrategy(
    {
      passReqToCallback: true,
      usernameField: "email",
    },
    async function (req, email, password, next) {
      try {
        const user = await User.findOne({ email }).lean().exec();
        if (user) return next(null, false);

        const newUser = await User.create({
          ...req.body,
          password: await pass.create(req.body.password),
        });
        console.log(newUser);
        return next(null, newUser);
      } catch (error) {
        console.error(error);
        throw next(null, false);
      }
    }
  )
);

passport.serializeUser(function (user, next) {
  console.log(user);
  next(null, user.email);
});

passport.deserializeUser(async function (email, next) {
  console.log(email);
  const user = await User.findOne({ email }).lean().exec();

  next(null, user);
});
