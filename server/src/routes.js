const UserController = require("./controllers/UserController");

module.exports = (app) => {
  app.get("/user", UserController.index);

  app.post("/user", UserController.create);
};
