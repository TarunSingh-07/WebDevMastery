console.log("Tarun is a Hacker")
console.log("Baby is a Hecker")


// setTimeout is a asynchronous function
setTimeout(() => {
  console.log("I am inside setTimeout");
}, 2000)

setTimeout(() => {
  console.log("I am inside setTimeout 2");
}, 2000)

console.log("The End")


const fn = () => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
  console.log(arg)
  fn()
} 

const loadScript = (src, callback) => {
  let sc = document.createElement("script")
  sc.src = src
  sc.onload = callback("Tarun", fn) 
  // sc.onload = () => callback("Tarun", fn);  // This is the correct way to pass a callback function
  document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)

// example 2

function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Ajay", sayBye);

// example 3

function calc(a, b, callback) {
    return callback(a, b);
}

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

console.log(calc(5, 3, add));    
console.log(calc(5, 3, mul));