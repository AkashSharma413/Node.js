const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {"content-type": "text/plain"});
  res.end("Hello World!");
  console.log(req, "req");
})

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
})