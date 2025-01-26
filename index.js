const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  let name = "Akash Sharma"
  res.writeHead(200, {"content-type": "text/html"});
  let html = fs.readFileSync("./index.html", "utf-8");
  html = html.replace("{{name}}", name);
  res.end(html);
})

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
})