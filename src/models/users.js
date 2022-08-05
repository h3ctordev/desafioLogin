const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  address: {
    type: String,
  },
  createAt: {
    type: Date,
  },
});

UsersSchema.pre("save", function (next) {
  if (!this.createAt) this.createAt = new Date();
  next();
});

module.exports = mongoose.model("Users", UsersSchema);
