const url = require("url");
const listUser = require("./listUser");
const createUser = require("./createUser");
const getUser = require("./getUser");
const deleteUser = require("./deleteUser");
const updateUser = require("./updateUser");

const userRoutes = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  const path = parsedUrl.pathname;
  const userId = parseInt(path.split("/")[2], 10);

  res.setHeader("Content-Type", "application/json");

  if (path === "/users" && method === "GET") {
    listUser(req, res);
  } else if (path === "/users" && method === "POST") {
    createUser(req, res);
  } else if (path.startsWith("/users/") && method === "GET") {
    getUser(req, res, userId);
  } else if (path.startsWith("/users/") && method === "DELETE") {
    deleteUser(req, res, userId);
  } else if (path.startsWith("/users/") && method === "PUT") {
    updateUser(req, res, userId);
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Route not found in users" }));
  }
};

module.exports = userRoutes;
