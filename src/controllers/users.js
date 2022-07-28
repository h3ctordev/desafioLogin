let users = [];

const home = (req, res) => {
  res.status(200).json({
    message: `Log-in successfully: Hello ${req.session.name} `,
  });
};

const insert = (req, res) => {
  const { name } = req.body;
  if (name) {
    req.session.name = name;
    console.log(name);
    return res.redirect("/");
  }
  res.status(400).json({ message: "missing params" });
};

const destroy = (req, res) => {
  try {
    req.session.destroy();
    res.status(200).json({
      message: `Bye! Bye!`,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  home,
  insert,
  destroy,
};
