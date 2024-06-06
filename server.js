const http = require("http");
const routeHandler = require("./routes/router");

const server = http.createServer(routeHandler);

const PORT = 3000;
server.listen(PORT, "127.0.0.1", () => {
  console.log(`Server is running on port: ${PORT}`);
});
