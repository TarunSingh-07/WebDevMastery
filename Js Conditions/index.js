console.log("Hello I am Conditional tutorial")

let age = 17
let grace = 2

// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

if ((age+grace)>18){
    console.log("You can Drive")
}

else{
    console.log("You cannot Drive")
}

// Assignment Operators
let age2 = 18
let grace2 = 2

// age2 += grace2 // age2 = age2 + grace2
console.log(age2)

if (age2 == 18) {
    console.log("You can Drive")
} else {
    console.log("You cannot Drive")
}

let age3 = 1

if (age3 == 18) {
    console.log("You can Drive")
} 
else if (age3 == 0){
    console.log("Are you kidding !!!")
}
else if (age3 == 1){
    console.log("Are you again kidding !!!")
}
else {
    console.log("You cannot Drive")
}

a = 6
b = 8
let c = a > b ? (a-b):(b-a) 
console.log(c)

/*
translate to : 
if (a>b) {
    let c = a - b
} else {
    let c = b - a
}*/



