const dataModule = require("../../sq3-data");

const getUser = async (req, res, userId) => {
  const user = await dataModule.getUser(userId);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(user));
};

module.exports = getUser;
