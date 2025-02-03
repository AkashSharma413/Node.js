// console.log("This is log 1");
// process.nextTick(()=> console.log("This is log 2"));
// console.log("This is log 3");

// console.log("This is log 1");
// Promise.resolve().then(() => console.log("This is log 2"));
// console.log("This is log 3");

// setTimeout(() => console.log("This is setTimeOut log 1"), 0)
// setTimeout(() => {
//   console.log("This is setTimeOut log 2")
//   process.nextTick(() => console.log("This is nextTick from setTimeOut"))
// }, 0)
// setTimeout(() => console.log("This is setTimeOut log 3"), 0)

// process.nextTick(() => console.log("This is log 1"))
// process.nextTick(() => {
//   console.log("This is log 2")
//   process.nextTick(() => console.log("This is log from inner next tick block"))
// })
// process.nextTick(() => console.log("This is log 3"))

// Promise.resolve().then(() => console.log("This is promise log 1"))
// Promise.resolve().then(() => {
//   console.log("This is promise log 2")
//   Promise.resolve().then(() => console.log("This is promise log from inner promise block"))
// })
// Promise.resolve().then(() => console.log("This is promise log 3"))

// Timer queue execute in FIFO order 
setTimeout(() => console.log("This is log statement 1"), 1000)
setTimeout(() => console.log("This is log statement 2"), 500)
setTimeout(() => console.log("This is log statement 3"), 0)



