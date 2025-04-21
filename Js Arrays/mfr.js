let arr = [1, 13, 5, 7, 11]

// newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element ** 2)
// }

// console.log(newArr) // [1, 169, 25, 49, 121]


// Map method is used to create a new array by applying a function to each element of the original array.
// OR Creates a new array by applying a function to each element of the original array.

let newArr = arr.map((e) => {
    return e ** 2
})

console.log(newArr) // [1, 169, 25, 49, 121]

// Filer method is used to create a new array by filtering the elements of the original array based on a condition.

const greaterThanSeven = (e) => {
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven)) 

// reduce function is used to reduce the array to a single value by applying a function to each element of the array.
let arr2 = [1, 2, 3, 4, 5, 6]
const red = (a, b) => {
    return a*b
}
console.log(arr2.reduce(red)) // 720 --  1*2*3*4*5*6 = 720


let arr3 = Array.from("Tarun") // Converts a string to an array
console.log(arr3) // [ 'T', 'a', 'r', 'u', 'n' ]