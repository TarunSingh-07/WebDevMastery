// Faulty calculater
console.log("Faulty Calculator")

let random = Math.random()
console.log(random)

let a = Number(prompt("Enter first number"))
let c = prompt("Enter Operation")
let b = Number(prompt("Enter Second number"))

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}
let result
if (random > 0.1){
    if (c == "+"){
        result = a + b
    }
    else if (c == "-" ){
        result = a - b
    }
    else if (c == "*" ){
        result = a * b
    }
    else if (c == "/" ){
        result = a / b
    }

} else {
    c = obj[c]
    if (c == "+"){
        result = a - b
    }
    else if (c == "-" ){
        result = a / b
    }
    else if (c == "*" ){
        result = a + b
    }
    else if (c == "/" ){
        result = a ** b
    }

}


/*
  In without obj creation we use the === instead of == because
  == is used for type conversion and
  === is used for strict comparison
*/

console.log(`The result is ${a} ${c} ${b} : `, result)
alert(`The result is ${result}`)

// console.log("The result is " + result)
// alert("The result is " + result)

