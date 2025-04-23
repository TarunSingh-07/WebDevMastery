let a = Number(prompt("Enter a number"))
let factorial = 1

for (let i = 1; i <= a; i++) {
    factorial *= i

}
console.log("The factorial is : ", factorial) // 720


// OR
// Using Function

function factorialFunction(n) {
    let factorial = 1
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }
    return factorial
}

let number = Number(prompt("Enter a number"))
console.log(`The factorial of ${number} is ${factorialFunction(number)}`)

