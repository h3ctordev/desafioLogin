const path = require("path");
const { fork } = require("child_process");
const randomsProcess = fork(path.join(__dirname, "..", "utils/randoms.js"));

const randoms = (req, res) => {
  // console.log(req.query);
  const cant = req.query?.cant || process.env.CALC_RANDOM_DEFAULT || 10;
  randomsProcess.send(cant);
  randomsProcess.on("message", (result) => {
    res.status(200).json(result);
  });
};

module.exports = {
  randoms,
};
