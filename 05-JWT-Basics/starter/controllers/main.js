const login = async (req, res) => {
  res.send("Fake login/Register/Signup route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({ msg: `Hello, John Doe`, secret: `Here is your ${luckyNumber}` });
};

module.exports = { login, dashboard };
