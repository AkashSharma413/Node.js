const greet = (name) => {
    console.log(`Hello ${name}`)
} 

const higherOrderFunction = (callback) => {
    let name = "Akash Sharma";
    callback(name);
}

higherOrderFunction(greet);