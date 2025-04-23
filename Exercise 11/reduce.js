let a = 6

function factorial(number) {
    let arr = Array.from(Array(number+1).keys()) // [ 0, 1, 2, 3, 4, 5, 6 ]
    console.log(arr.slice(1,)) // [ 1, 2, 3, 4, 5, 6 ]
    let c = arr.slice(1,).reduce((a, b)=> { 
        return a * b
    })
    console.log(c) // 720
}
factorial(a)




/* reminder
let arr = Array.from(Array(number).keys()) // [ 0, 1, 2, 3, 4, 5 ]
console.log(arr) // [ 0, 1, 2, 3, 4, 5 ]
*/