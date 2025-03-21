const http = require("node:http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("Home Page");
    } else if (req.url === "/slow-page") {
        for(let i = 0; i < 6000000000; i++) {}
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("Slow Page");
    }
});

server.listen(8000, () => {
    console.log("Server is listening on port 8000");
})