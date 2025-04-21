let a = [1, 93, 5, 6, 88]

// for (let index = 0; index <a.length; index++){
//     const element = a[index]
//     console.log(element)
// }

/*  forEach loops is used for iterating over an array. 
It takes a callback function as an argument and executes it for each element in the array. 
The callback function can take three arguments: the current value, the index of the current value, and the entire array itself.
*/

// a.forEach((value, index, arr) =>{
//     console.log(value, index, arr)
//     // console.log(arr) // [1, 93, 5, 6, 88]
//     // console.log(index) // 0, 1, 2, 3, 4
//     // console.log(value) // 1, 93, 5, 6, 88
// })

let object = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element) // 1, 2, 3
    }
}