const dataModule = require("../../sq3-data");

const deleteUserUser = async (req, res, userId) => {
  const users = await dataModule.deleteUser(userId);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(users));
};

module.exports = deleteUserUser;
