const getRandom = (min = 1, max = 1000) =>
  Math.floor(Math.random() * (max - min)) + min;

const randoms = (cant) => {
  const result = {};
  for (let i = 0; i < +cant; i++) {
    const num = getRandom();
    result[num] = num.toString() in result ? ++result[num] : 1;
  }

  process.send(result);
};

process.on("message", randoms);
