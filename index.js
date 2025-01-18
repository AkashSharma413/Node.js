// Every module has it's own scope, same variable won't conflict used in multiple modules, modules code get convert into IIFE expression
const math = require("./math");  
const {add, subtract} = math;

console.log(add(2, 3)); 
console.log(subtract(2, 3)); 