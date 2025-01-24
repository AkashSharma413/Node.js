const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

const readableStreams = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2
});

readableStreams.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))

const writeableStreams = fs.createWriteStream("./file2.txt");

// readableStreams.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStreams.write(chunk);
// });

readableStreams.pipe(writeableStreams);