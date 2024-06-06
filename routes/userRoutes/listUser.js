const userModule = require("../../sq3-data");

const listUser = async (req, res) => {
  const users = await userModule.getUsers();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(users));
};

module.exports = listUser;
