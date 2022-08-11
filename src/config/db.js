const mongoose = require("mongoose");

const uri = process.env.MOONGODB_URI;

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.info("db connected OK!");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  connect,
};
