const dataApi = require("./data");

const constructorMethod = app => {
  app.use("/api", dataApi);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;