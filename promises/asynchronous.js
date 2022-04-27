//SYNCHRONOUS EXAMPLE

// console.log("I");
// console.log("eat");
// console.log("Ice Cream");


//ASYNCHRONOUS EXAMPLE
console.log("I");
setTimeout(()=>{
    console.log("eat");
}, 2000)

console.log("Ice cream")