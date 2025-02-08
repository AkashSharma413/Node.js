const fs = require("node:fs")

const readableStream = fs.createReadStream(__filename)
readableStream.close()

readableStream.on("close", () => console.log("this is from readableStream close callback"))

setImmediate(() => console.log("this is setImmediate"))
setTimeout(() => console.log("this is setTimeOut"))
Promise.resolve().then(() => console.log("this is promise.resole"))
process.nextTick(() => console.log("this is nextTick"))