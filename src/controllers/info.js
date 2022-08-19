const info = (req, res) => {
  res.status(200).json({
    "argumentos-entrada": process.argv,
    "sistema-operativo": process.platform,
    "node-version": process.versions.node,
    rss: process.memoryUsage().rss,
    "path-ejecucion": process.execPath,
    "porcess-id": process.pid,
    "carpeta-proyecto": process.env.PWD,
  });
};

module.exports = {
  info,
};
