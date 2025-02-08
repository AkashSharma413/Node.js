const fs = require("node:fs");

// fs.readFile(__filename, () => {
//     console.log("this is read file 1");
//     setImmediate(() => console.log("this is inner setImmediate 1")) // check queues
//     process.nextTick(() => console.log("this is inner nextTick 1")) // microtask queue/nextTick queue
//     Promise.resolve().then(() => console.log("this is inner resolve 1")) // microtask queue/promise queue
// }) // I/O queue

// process.nextTick(() => console.log("this is nextTick 1")); // microtask queue/nextTick queue
// Promise.resolve().then(() => console.log("this is resolve 1")); // microtask queue/promise queue
// setTimeout(() => console.log("this is setTimeOut 1"), 0); // timer queue
// setImmediate(() => console.log("this is setImmediate 1")) // check queues

setImmediate(() => console.log("this is setImmediate 1"))
setImmediate(() => {
    console.log("this is setImmediate 2")
    process.nextTick(() => console.log("this is process.nextTick 1"))
    Promise.resolve().then(() => console.log("this is promise.resolve 1"))
})
setImmediate(() => console.log("this is setImmediate 3"))

