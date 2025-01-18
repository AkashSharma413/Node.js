// Every module has it's own scope, same variable won't conflict used in multiple modules, modules code get convert into IIFE expression
const SuperHero = require("./super-hero");

const myHero = new SuperHero("Batman");
console.log(myHero.getName());
myHero.setName("Bruce Wayne");
console.log(myHero.getName());

const newHero = new SuperHero("Akash");
console.log(newHero.getName());