function nice(name) {
    console.log("Hey " + name + " you are doing great")
    console.log("Hey " + name + " you are good")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your shoes are nice too!")
}

function sum(a, b, c = 3) {
    // console.log(a + b)
    // console.log(a, b, c)
    return a + b + c
}

result1 = sum(3, 2)
result2 = sum(8, 5)
result3 = sum(5, 21)

console.log("The sum of these numers is: ", result1)
console.log("The sum of these numers is: ", result2)
console.log("The sum of these numers is: ", result3)

const func1 = (x) => {
    console.log("I am an arrow function", x)
}

func1(30)
func1(66)
func1(99)


// nice("Tarun")
// nice("Adi")