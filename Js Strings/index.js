console.log("This is String Tutorial")
let a = "Tarun"
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
// console.log(a[5]) // undefined

console.log(a.length)

let real_name = "Tarun"
let friend = "Reeny"
console.log("His name is " + real_name + " and his friend name is " + friend)
console.log(`His name is ${real_name} and his friend name is ${friend}`) // Template literals

let b = "Shivam"
console.log(b.toUpperCase()) 
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 4)) 
console.log(b.slice(1, 5)) 
console.log(b.slice(1)) 

console.log(b.replace("Sh", "77"))  // replace first occurrence
console.log(b.concat(a, "Rahul", "Equip")) // concat
