const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("About page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "Akash",
        lastName: "Sharma",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page not found!");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
