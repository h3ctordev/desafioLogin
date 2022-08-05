const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  create: async (password) => {
    try {
      return await bcrypt.hash(password, saltRounds);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  check: async (password, hash) => {
    try {
      return await bcrypt.compare(password, hash);
    } catch (error) {
      console.error(error);
      throw res.status(500).json({ status: "Fail" });
    }
  },
};
