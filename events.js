const EventEmitter = require("node:events");
const emitter = new EventEmitter();

emitter.on("order-pizza", (size, topping) => {
    console.log(`Order received! Pizza size is ${size} with topping of ${topping} is baking.`);
})

emitter.on("order-pizza", (size) => {
    if(size === "large"){
        console.log(`With large size pizza, a complimentry drink is free!`);
    }
})

console.log("Before order pizza, please book your seat!")
emitter.emit("order-pizza", "large", "mushroom");