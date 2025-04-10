/* Create a Faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

console.log("Faulty Calculator")

let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter Operation")
let b = prompt("Enter Second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random > 0.1) {
    // Perform the correct operation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

} else {
    // Perform the wrong operation
    c = obj[c]
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

function faultyCalculator(num1, num2) {

}