console.log("This is about Variables and Data Types in JavaScript")

var a = 10
a = a + 1
let b = 20
let c = "Tarun"
let_a = "Alex"
// var 55a = "Ram"

// console.log(a + b + 8)
console.log(typeof a, typeof b, typeof c)

{
    // var is a global variable
    // var a = 21

    // let is a block variable
    let a = 21
    console.log(a)
}
console.log(a)

// const canot be changed after declaration
// const a1 = 6
// a1 = a1+ 1

let x = "Equinox Bhayiya"
let y = 22
let z = 3.55
const p = true
let q = undefined
let r = null
console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

let o = {
    "name": "Tarun",
    "job role": "Software Engineer",
    "job code": 11111,
    "is_handsome": true
}

console.log(o)
o.salary = "100crore"
console.log(o)
o.salary = "500crore"
console.log(o)