class DrinkMachine {
    constructor() {
    }

    serveDrink(size) {
        if(size === "large"){
            console.log("With large size pizza, a complimentry drink is free!");
        }
    }
}

module.exports = DrinkMachine;