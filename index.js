const fs = require("node:fs/promises");

console.log("first");
const fetchData = async () => {
  try {
    const data = await fs.readFile("./file.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
console.log("second");

fetchData();

// console.log("first")
// fs.readFile("./file.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
// console.log("second")

// console.log("first")
// const fileContent = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContent);

// console.log("second")
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//     if(error){
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// });

// console.log("third")

// fs.writeFileSync("./greet.txt", "Good morning Akash!");

// fs.writeFile("./greet.txt", " Welcome to the coding world", {flag: "a"}, (error) => {
//     if(error){
//         console.log(error);
//     } else {
//         console.log("File written")
//     }
// })
