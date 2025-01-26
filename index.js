const http = require("node:http");

const server = http.createServer((req, res) => {
  const myDetails = {
    firstName: "Akash",
    lastName: "Sharma"
  };

  res.writeHead(200, {"content-type": "application/json"});
  res.end(JSON.stringify(myDetails));
})

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
})