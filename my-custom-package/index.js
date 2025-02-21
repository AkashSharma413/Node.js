const swapCase = require("swap-case").swapCase;

const greet = (name) => {
    console.log(swapCase(`Hello ${name}, Welcome to the world of coding!!!!`))
}

module.exports = greet;