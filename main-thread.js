// Worker threads module and cluster module is used to improve the performance of Node application!

const http = require("node:http");
const { Worker } = require("node:worker_threads");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("Home Page");
    } else if (req.url === "/slow-page") {
        const worker = new Worker("./worker_thread.js");
        worker.on("message", (j) => {
            res.writeHead(200, {"content-type": "text/plain"});
            res.end(`Slow Page ${j}`);
        }) 
    }
});

server.listen(8000, () => {
    console.log("Server is listening on port 8000");
})