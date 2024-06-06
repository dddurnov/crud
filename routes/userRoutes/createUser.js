const dataModule = require("../../sq3-data");

const createUser = (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", async () => {
    const user = JSON.parse(body);
    const newUser = await dataModule.addUser(user);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(newUser));
  });
};

module.exports = createUser;
