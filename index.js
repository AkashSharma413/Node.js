const path = require("node:path");
// const path = require("path");

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log(path.extname(__dirname));
console.log(path.extname(__filename));

console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "../index.html"));
console.log(path.join("/folder1", "//folder2", "../index.html"));

console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "../index.html"));
console.log(path.resolve("/folder1", "//folder2", "../index.html"));
console.log(path.resolve(__dirname, "index.html"));

console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));
console.log(path);

console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute("./index.html"));
