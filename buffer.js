const buffer = new Buffer.from("Akash");

console.log(buffer.toJSON());
buffer.write("Sharma");
console.log(buffer.toString());
console.log(buffer);