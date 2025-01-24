const fs = require("node:fs");

const readableStreams = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2
});

const writeableStreams = fs.createWriteStream("./file2.txt");

readableStreams.on("data", (chunk) => {
  console.log(chunk);
  writeableStreams.write(chunk);
});