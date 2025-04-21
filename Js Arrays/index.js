let arr = [1, 2, 5 ,7, 8]
// Index   0, 1, 2, 3, 4

// Strings are immutable and Arrays are mutable

arr[0] = 2666
// console.log(arr, typeof arr)
// console.log(arr.length)


// arr[0] = 2666
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

console.log(arr.toString()) // 1,2,5,7,8
console.log(arr.join(" and "))

let a = [1, 2, 3, 4, 5, 6]
console.log(a)

a.pop() // removes last element  -----------------------------
console.log(a) // [1, 2, 3, 4, 5]                            |
                                                             |      
a.push(100) // adds element at the end      ------------------------------                |
console.log(a) // [1, 2, 3, 4, 5, 100]                       |           |           
                                                             |           
a.push("Eren Yeager")                                        |           
console.log(a) // [1, 2, 3, 4, 5, 100, 'Eren Yeager']        |           |
                                                             |
a.shift()   // removes first element    ----------------------           |
console.log(a) // [2, 3, 4, 5, 100, 'Eren Yeager']                       |
                                                                         |
a.unshift("Mikasa") // adds element at the beginning   ------------------
console.log(a) // ['Mikasa', 2, 3, 4, 5, 100, 'Eren Yeager']


delete a[1] // deletes element at index 1
console.log(a) // ['Mikasa', <1 empty item>, 3, 4, 5, 100, 'Eren Yeager']

console.log(a.length) // 7
console.log(a[1]) // undefined -- Memory allocation toh hua he bas value nahi hai

let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [9, 8, 7]

a1.concat(a2, a3) // Concatenates arrays but does not change the original array
console.log(a1.concat(a2, a3))
console.log(a1) // [1, 2, 3]

a3.sort() // Sorts the array in ascending order
console.log(a3) // [7, 8, 9]

let num = [1, 2, 3, 4, 5]
num.splice(1, 2) // Removes 2 elements from index 1 -- 1 indexse start hoga and 2 elements remove karega
console.log(num) // [1, 4, 5]

let nums = [1, 2, 3, 4, 5]
nums.slice(2) // Returns a new array from index 2 to the end of the array
console.log(nums.slice(2)) // [3, 4, 5]

