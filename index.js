// console.log("This is log 1");
// process.nextTick(()=> console.log("This is log 2"));
// console.log("This is log 3");

// console.log("This is log 1");
// Promise.resolve().then(() => console.log("This is log 2"));
// console.log("This is log 3");

process.nextTick(() => console.log("This is log 1"))
process.nextTick(() => {
  console.log("This is log 2")
  process.nextTick(() => console.log("This is log from inner next tick block"))
})
process.nextTick(() => console.log("This is log 3"))

Promise.resolve().then(() => console.log("This is promise log 1"))
Promise.resolve().then(() => {
  console.log("This is promise log 2")
  Promise.resolve().then(() => console.log("This is promise log from inner promise block"))
})
Promise.resolve().then(() => console.log("This is promise log 3"))



