const fs = require("node:fs");

fs.readFile(__filename, () => {
    console.log("this is read file 1");
}) // I/O queue

process.nextTick(() => console.log("this is nextTick 1")); // microtask queue/nextTick queue
Promise.resolve().then(() => console.log("this is resolve 1")); // microtask queue/promise queue
setTimeout(() => console.log("this is setTimeOut 1"), 0); // timer queue