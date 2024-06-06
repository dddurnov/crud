const dataModule = require("../../sq3-data");

const updateUser = (req, res, userId) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("end", async () => {
    const user = JSON.parse(body);
    const users = await dataModule.updateUser(userId, user);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  });
};

module.exports = updateUser;
