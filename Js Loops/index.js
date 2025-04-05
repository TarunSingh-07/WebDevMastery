console.log("I am about Loops")

let a = 1
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for (let i = 0; i < 100; i++) {
//     console.log(a + i)
// }

let obj = {
    name: "Tarun",
    role: "Developer",
    company: "Equinox"
}

for (const key in obj) {
    const element = obj[key]
    console.log(key, element)
}

for (const c of "Tarun") {
    console.log(c)
}

