const http = require("node:http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("Hello World");
    }
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));