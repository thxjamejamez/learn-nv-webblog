module.exports = {
  index(req, res) {
    res.send("all user");
  },

  create(req, res) {
    res.send("create user: " + JSON.stringify(req.body));
  },
};
